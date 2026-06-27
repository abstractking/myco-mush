import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  uniform float time;
  uniform float scroll;
  uniform float speed;
  uniform float waveIntensity;
  uniform float warpCount;

  void main() {
    vec3 pos = position;
    vUv = uv;
    float t = time * speed + scroll * 5.0;
    float angle = atan(pos.x, pos.z);
    float radius = length(pos.xz);
    float spiral = sin(angle * warpCount + t * 2.0) * 0.3;
    float displace = sin(radius * 3.0 - t * 4.0 + spiral) * waveIntensity;
    float yWave = sin(vUv.x * 10.0 + t) * cos(vUv.y * 10.0 + t) * 0.05;
    pos.y += displace + yWave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float time;
  uniform float colorSpeed;
  uniform float gridScale;
  uniform float lineWidth;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  uniform vec3 color4;
  uniform vec3 color5;

  float gridLine(float coord, float width) {
    float fw = fwidth(coord);
    float p = abs(fract(coord - 0.5) - 0.5);
    return smoothstep(width * fw, (width + 1.0) * fw, p);
  }

  void main() {
    float t = time * colorSpeed;
    vec2 uv = vUv;
    uv *= gridScale;
    float gx = gridLine(uv.x, lineWidth);
    float gy = gridLine(uv.y, lineWidth);
    float g = min(gx, gy);
    float angle = atan(vUv.x - 0.5, vUv.y - 0.5) + time * 0.5;
    float blend = fract(angle / 6.28318);
    vec3 c1 = mix(color1, color2, smoothstep(0.0, 0.25, blend));
    vec3 c2 = mix(c1, color3, smoothstep(0.25, 0.5, blend));
    vec3 c3 = mix(c2, mix(color4, color5, smoothstep(0.5, 0.75, blend)), smoothstep(0.5, 1.0, blend));
    vec3 gridColor = c3 * (1.0 - g);
    vec3 bg = vec3(0.0, 0.0, 0.0);
    gl_FragColor = vec4(bg + gridColor, 1.0);
  }
`;

export default function GridPlane() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 15);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const isMobile = window.innerWidth < 768;
    const subdivisions = isMobile ? 100 : 200;
    const geometry = new THREE.PlaneGeometry(100, 100, subdivisions, subdivisions);
    geometry.rotateX(-Math.PI / 2);

    const clock = new THREE.Clock();
    const scrollRef = { value: 0 };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      transparent: false,
      uniforms: {
        time: { value: 0.0 },
        scroll: { value: 0.0 },
        speed: { value: 0.5 },
        waveIntensity: { value: 0.05 },
        warpCount: { value: 4.0 },
        colorSpeed: { value: 0.2 },
        gridScale: { value: 50.0 },
        lineWidth: { value: 1.0 },
        color1: { value: new THREE.Vector3(0.141, 0.0, 0.275) },
        color2: { value: new THREE.Vector3(0.514, 0.012, 0.988) },
        color3: { value: new THREE.Vector3(1.0, 0.0, 0.431) },
        color4: { value: new THREE.Vector3(0.984, 0.345, 0.027) },
        color5: { value: new THREE.Vector3(1.0, 0.745, 0.059) },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- Sun-eye emblem: floats above the grid, glows with time + scroll ---
    const textureLoader = new THREE.TextureLoader();
    const sunTexture = textureLoader.load('/texture/sun-eye.png');
    sunTexture.colorSpace = THREE.SRGBColorSpace;

    const sunGeometry = new THREE.PlaneGeometry(9, 9);
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: sunTexture,
      transparent: true,
      depthWrite: false,
      toneMapped: false,
    });

    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    sunMesh.position.set(0, 5.5, -6); // centered above the horizon line
    scene.add(sunMesh);

    let animId = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      material.uniforms.time.value = t;
      material.uniforms.scroll.value = scrollRef.value;

      // Subtle breathing glow + drift, reacting to time and scroll
      const pulse = 1 + Math.sin(t * 0.6) * 0.06;
      sunMesh.scale.setScalar(pulse);
      sunMesh.rotation.z = Math.sin(t * 0.15) * 0.04;
      sunMesh.position.y = 5.5 + Math.sin(t * 0.4) * 0.25 - scrollRef.value * 2.5;
      sunMaterial.opacity = 0.85 + Math.sin(t * 0.6) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    const handleScroll = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      scrollRef.value = docHeight > 0 ? window.scrollY / docHeight : 0;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      sunGeometry.dispose();
      sunMaterial.dispose();
      sunTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
