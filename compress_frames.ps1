Add-Type -AssemblyName System.Drawing
$encoder = [System.Drawing.Imaging.Encoder]::Quality
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, [long]45)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageDecoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }

Write-Host "Compressing index frames..."
$frames = Get-ChildItem "assets\frames\*.jpg"
foreach ($f in $frames) {
    $img = [System.Drawing.Image]::FromFile($f.FullName)
    $bmp = New-Object System.Drawing.Bitmap($img, 1024, 576)
    $tempPath = $f.FullName + ".tmp"
    $bmp.Save($tempPath, $jpegCodec, $encoderParams)
    $bmp.Dispose()
    $img.Dispose()
    Move-Item -Path $tempPath -Destination $f.FullName -Force
}

Write-Host "Compressing chi-sono frames..."
$framesChiSiamo = Get-ChildItem "assets\Frames-chiSono\*.jpg" -ErrorAction SilentlyContinue
if ($framesChiSiamo) {
    foreach ($f in $framesChiSiamo) {
        $img = [System.Drawing.Image]::FromFile($f.FullName)
        $bmp = New-Object System.Drawing.Bitmap($img, 1024, 576)
        $tempPath = $f.FullName + ".tmp"
        $bmp.Save($tempPath, $jpegCodec, $encoderParams)
        $bmp.Dispose()
        $img.Dispose()
        Move-Item -Path $tempPath -Destination $f.FullName -Force
    }
}
Write-Host "Done!"
