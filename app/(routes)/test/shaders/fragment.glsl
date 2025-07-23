uniform float uTime;
varying vec2 vUv;
uniform vec2 uReslution;

void main() {

  vec2 uv = gl_FragCoord.xy / uReslution;

    // نخلّي الـ uv بين -1 و +1 ونعدّل المركز
  uv = uv * 2.0 - 1.0;

    // نستخدم sin wave واضحة
  float wave = 0.3 * sin(uv.x * 3.0 + uTime * 1.0) - 0.3;

    // mask يحدد المناطق فوق الموجة
  float mask = smoothstep(wave, wave + 0.3, uv.y);

    // تدرج لوني بالأخضر والسماوي زي اللي في الصورة
  vec3 topColor = mix(vec3(0.0, 1.0, 1.0), vec3(0.5, 1.0, 0.4), uv.y + 0.5);
  vec3 finalColor = mix(vec3(0.0), topColor, mask);

  gl_FragColor = vec4(finalColor, 1.0);
}