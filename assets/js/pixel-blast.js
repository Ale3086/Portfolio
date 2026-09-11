// pixel-blast.js - Authentic Vanilla WebGL2 Implementation

const VERTEX_SRC = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `#version 300 es
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`;

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
    return [
        parseInt(hex.substring(0, 2), 16) / 255,
        parseInt(hex.substring(2, 4), 16) / 255,
        parseInt(hex.substring(4, 6), 16) / 255
    ];
}

class PixelBlastWebGl {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.gl = canvas.getContext('webgl2', { antialias: true, alpha: true, powerPreference: 'high-performance' });
        
        if (!this.gl) {
            console.error('WebGL2 not supported');
            return;
        }

        // Options (basate sulle richieste dell'utente)
        this.options = {
            variant: options.variant || 'square',
            pixelSize: options.pixelSize !== undefined ? options.pixelSize : 2,
            color: options.color || '#144a11',
            patternScale: options.patternScale !== undefined ? options.patternScale : 3.5,
            patternDensity: options.patternDensity !== undefined ? options.patternDensity : 1.2,
            pixelSizeJitter: options.pixelSizeJitter || 0,
            enableRipples: options.enableRipples !== undefined ? options.enableRipples : true,
            rippleSpeed: options.rippleSpeed !== undefined ? options.rippleSpeed : 1.0,
            rippleThickness: options.rippleThickness !== undefined ? options.rippleThickness : 0.21,
            rippleIntensity: options.rippleIntensityScale !== undefined ? options.rippleIntensityScale : 0.5,
            edgeFade: options.edgeFade !== undefined ? options.edgeFade : 0.5,
            speed: options.speed !== undefined ? options.speed : 0.5
        };

        this.MAX_CLICKS = 10;
        this.clickPos = new Float32Array(this.MAX_CLICKS * 2).fill(-1);
        this.clickTimes = new Float32Array(this.MAX_CLICKS).fill(0);
        this.clickIx = 0;
        this.startTime = performance.now();

        this.initGL();
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('pointerdown', (e) => this.onPointerDown(e), { passive: true });
        
        this.animate();
    }

    compileShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    initGL() {
        const gl = this.gl;
        const vs = this.compileShader(gl.VERTEX_SHADER, VERTEX_SRC);
        const fs = this.compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SRC);
        
        this.program = gl.createProgram();
        gl.attachShader(this.program, vs);
        gl.attachShader(this.program, fs);
        gl.linkProgram(this.program);
        
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(this.program));
            return;
        }
        
        // Fullscreen quad
        const vertices = new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1
        ]);
        
        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        
        const positionLoc = gl.getAttribLocation(this.program, 'position');
        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

        // Uniform locations
        this.uniforms = {
            uColor: gl.getUniformLocation(this.program, 'uColor'),
            uResolution: gl.getUniformLocation(this.program, 'uResolution'),
            uTime: gl.getUniformLocation(this.program, 'uTime'),
            uPixelSize: gl.getUniformLocation(this.program, 'uPixelSize'),
            uScale: gl.getUniformLocation(this.program, 'uScale'),
            uDensity: gl.getUniformLocation(this.program, 'uDensity'),
            uPixelJitter: gl.getUniformLocation(this.program, 'uPixelJitter'),
            uEnableRipples: gl.getUniformLocation(this.program, 'uEnableRipples'),
            uRippleSpeed: gl.getUniformLocation(this.program, 'uRippleSpeed'),
            uRippleThickness: gl.getUniformLocation(this.program, 'uRippleThickness'),
            uRippleIntensity: gl.getUniformLocation(this.program, 'uRippleIntensity'),
            uEdgeFade: gl.getUniformLocation(this.program, 'uEdgeFade'),
            uShapeType: gl.getUniformLocation(this.program, 'uShapeType'),
            uClickPos: gl.getUniformLocation(this.program, 'uClickPos'),
            uClickTimes: gl.getUniformLocation(this.program, 'uClickTimes')
        };
    }

    resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = document.body.clientWidth;
        const h = window.innerHeight;
        this.canvas.width = w * dpr;
        this.canvas.height = h * dpr;
        this.canvas.style.width = w + 'px';
        this.canvas.style.height = h + 'px';
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.dpr = dpr;
    }

    onPointerDown(e) {
        const rect = this.canvas.getBoundingClientRect();
        // The original code calculates pointer pos with Y flipped for WebGL coords
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        const fx = (e.clientX - rect.left) * scaleX;
        const fy = (rect.height - (e.clientY - rect.top)) * scaleY;
        
        this.clickPos[this.clickIx * 2] = fx;
        this.clickPos[this.clickIx * 2 + 1] = fy;
        
        const timeOffset = ((performance.now() - this.startTime) / 1000) * this.options.speed;
        this.clickTimes[this.clickIx] = timeOffset;
        
        this.clickIx = (this.clickIx + 1) % this.MAX_CLICKS;
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        const gl = this.gl;
        gl.useProgram(this.program);
        
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Map shape
        const SHAPE_MAP = { square: 0, circle: 1, triangle: 2, diamond: 3 };
        const shapeType = SHAPE_MAP[this.options.variant] ?? 0;
        
        const colorRgb = hexToRgb(this.options.color);
        const time = ((performance.now() - this.startTime) / 1000) * this.options.speed;

        gl.uniform3f(this.uniforms.uColor, colorRgb[0], colorRgb[1], colorRgb[2]);
        gl.uniform2f(this.uniforms.uResolution, this.canvas.width, this.canvas.height);
        gl.uniform1f(this.uniforms.uTime, time);
        gl.uniform1f(this.uniforms.uPixelSize, this.options.pixelSize * this.dpr);
        gl.uniform1f(this.uniforms.uScale, this.options.patternScale);
        gl.uniform1f(this.uniforms.uDensity, this.options.patternDensity);
        gl.uniform1f(this.uniforms.uPixelJitter, this.options.pixelSizeJitter);
        gl.uniform1i(this.uniforms.uEnableRipples, this.options.enableRipples ? 1 : 0);
        gl.uniform1f(this.uniforms.uRippleSpeed, this.options.rippleSpeed);
        gl.uniform1f(this.uniforms.uRippleThickness, this.options.rippleThickness);
        gl.uniform1f(this.uniforms.uRippleIntensity, this.options.rippleIntensity);
        gl.uniform1f(this.uniforms.uEdgeFade, this.options.edgeFade);
        gl.uniform1i(this.uniforms.uShapeType, shapeType);
        
        gl.uniform2fv(this.uniforms.uClickPos, this.clickPos);
        gl.uniform1fv(this.uniforms.uClickTimes, this.clickTimes);

        // Draw
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
}

// Inizializza automaticamente sul canvas
document.addEventListener('bootComplete', () => {
    const canvas = document.getElementById('pixel-blast-bg');
    if (canvas) {
        new PixelBlastWebGl(canvas, {
            variant: 'square',
            pixelSize: 2,
            color: '#144a11',
            patternScale: 3.5,
            patternDensity: 1.2,
            enableRipples: true,
            rippleSpeed: 1,
            rippleThickness: 0.21,
            rippleIntensityScale: 0.5,
            speed: 0.5,
            edgeFade: 0.5
        });
    }
});

