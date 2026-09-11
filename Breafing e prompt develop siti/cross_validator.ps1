$ErrorActionPreference = "Stop"

# Paths
$workspace = $PSScriptRoot
$formFile = Join-Path $workspace "breafing_v2_ottimizzato.md"
$promptFile = Join-Path $workspace "prompt_sviluppo_sito.md"
$guideFile = Join-Path $workspace "guida_operativa_completa.md"

Write-Host "Iniziando la validazione incrociata delle domande..." -ForegroundColor Cyan

# 1. Estrazione delle domande dal Form
if (-not (Test-Path $formFile)) {
    Write-Host "ERRORE: File $formFile non trovato." -ForegroundColor Red
    exit 1
}

$formContent = Get-Content $formFile
$formQuestions = [System.Collections.Generic.HashSet[string]]::new()

foreach ($line in $formContent) {
    if ($line -match "### Domanda (\d+[a-zA-Z]?)") {
        $null = $formQuestions.Add($matches[1])
    }
}

Write-Host "Trovate $($formQuestions.Count) domande nel file Form." -ForegroundColor Green

# 2. Estrazione delle reference nel Prompt
function Validate-References {
    param(
        [string]$FilePath,
        [string]$Name
    )
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "ERRORE: File $FilePath non trovato." -ForegroundColor Red
        return
    }

    $content = Get-Content $FilePath
    $errorsCount = 0

    Write-Host "`nControllo in $Name..." -ForegroundColor Cyan

    for ($i = 0; $i -lt $content.Count; $i++) {
        $line = $content[$i]
        
        # Regex per "Domanda X" o "Domande X-Y"
        # Matches: "Domanda 72", "Domande 80-81", "Domanda 48b"
        $matches = [regex]::Matches($line, "Domand[ae] (\d+[a-zA-Z]?)(?:-(\d+[a-zA-Z]?))?", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        
        foreach ($match in $matches) {
            $q1 = $match.Groups[1].Value
            $q2 = $match.Groups[2].Value
            
            if ($q1 -and -not $formQuestions.Contains($q1)) {
                Write-Host "  [Riga $($i+1)] Riferimento a Domanda fantasma: '$q1' - Linea: '$line'" -ForegroundColor Yellow
                $errorsCount++
            }
            
            if ($q2) {
                if (-not $formQuestions.Contains($q2)) {
                    Write-Host "  [Riga $($i+1)] Riferimento a Domanda fantasma: '$q2' - Linea: '$line'" -ForegroundColor Yellow
                    $errorsCount++
                }
            }
        }
    }

    if ($errorsCount -eq 0) {
        Write-Host "  Nessun riferimento fantasma trovato in $Name!" -ForegroundColor Green
    } else {
        Write-Host "  Trovati $errorsCount errori in $Name." -ForegroundColor Red
    }
}

Validate-References -FilePath $promptFile -Name "Prompt Sviluppo Sito"
Validate-References -FilePath $guideFile -Name "Guida Operativa Completa"

Write-Host "`nValidazione completata." -ForegroundColor Cyan
