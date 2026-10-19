// Поздравление появляется в начале раунда, а салюты живут в настоящем 3D-небе.
// Глубина проверяется WebGL: дома и деревья заслоняют салюты, когда стоят перед ними.
import * as THREE from 'three';

const GREETING_SECONDS = 1.8;
const PARTICLES = 24;
const COLORS = [0xffe391, 0xff89bb, 0x97dfff];

function sparkTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 32;
  const ctx = canvas.getContext('2d');
  const glow = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  glow.addColorStop(0, 'rgba(255,255,255,1)');
  glow.addColorStop(.25, 'rgba(255,255,255,.95)');
  glow.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 32, 32);
  return new THREE.CanvasTexture(canvas);
}

export function createBirthdaySky(scene) {
  const style = document.createElement('style');
  style.textContent = `
    .birthday-message { position: fixed; z-index: 3; pointer-events: none; top: clamp(150px, 22vh, 250px);
      left: 50%; transform: translateX(-50%); width: min(82vw, 720px); text-align: center;
      font: 400 clamp(27px, 4.5vw, 58px)/1.06 'Neucha', 'Comic Sans MS', cursive;
      color: #fff2cc; text-shadow: 0 3px 3px #21102f, 0 0 15px #ffbd7a, 0 0 36px #e579c7;
      opacity: 0; visibility: hidden; transition: opacity .25s, visibility .25s; }
    .birthday-message.on { opacity: 1; visibility: visible; }
    .birthday-message strong { display: block; margin-top: .08em; font-size: 1.3em; font-weight: 400;
      color: #ffe4a0; text-shadow: 0 3px 3px #21102f, 0 0 18px #ffd178, 0 0 40px #fb76a8; }
    @media (max-width: 760px) {
      .birthday-message { top: clamp(118px, 16vh, 165px); left: 56%; width: 65vw;
        font-size: clamp(21px, 6.4vw, 29px); }
    }
    @media (max-height: 530px) and (orientation: landscape) {
      .birthday-message { top: 24%; left: 50%; width: 58vw; font-size: clamp(19px, 5vh, 30px); }
    }
  `;
  document.head.append(style);
  const message = document.createElement('div');
  message.className = 'birthday-message';
  message.setAttribute('aria-hidden', 'true');
  message.innerHTML = 'С днём рождения, Маша!<strong>8 лет!</strong>';
  document.body.append(message);

  const texture = sparkTexture();
  const root = new THREE.Group();
  root.visible = false;
  scene.add(root);
  const bursts = COLORS.map((color, index) => {
    const positions = new Float32Array(PARTICLES * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color, map: texture, size: 8, sizeAttenuation: false,
      transparent: true, opacity: 0, depthTest: true, depthWrite: false, fog: false, toneMapped: false,
      blending: THREE.AdditiveBlending });
    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    root.add(points);
    return { positions, geometry, material, points, offset: index * 1.25 };
  });

  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  let time = 0;
  let greeting = 0;
  return {
    setScene(nextScene) { nextScene.add(root); },
    start() { greeting = GREETING_SECONDS; message.classList.add('on'); },
    update(dt, camera, active) {
      root.visible = active;
      if (greeting > 0 && active) {
        greeting = Math.max(0, greeting - dt);
        if (greeting === 0) message.classList.remove('on');
      } else if (!active) message.classList.remove('on');
      if (!active) return;

      time += dt;
      camera.getWorldDirection(forward);
      forward.y = 0;
      if (forward.lengthSq() < .01) forward.set(0, 0, -1);
      forward.normalize();
      right.set(-forward.z, 0, forward.x);
      const skyY = Math.max(camera.position.y + 24, 28);
      for (let index = 0; index < bursts.length; index++) {
        const burst = bursts[index];
        const phase = ((time + burst.offset) % 3.75) / 3.75;
        const life = Math.max(0, (phase - .08) / .72);
        const radius = 1 + 20 * Math.min(1, life);
        // За границей обеих игровых карт (±44): любой дом и дерево остаются
        // ближе к камере и правильно закрывают искры проверкой глубины.
        burst.points.position.set(camera.position.x + forward.x * 150 + right.x * (index - 1) * 35,
          skyY + (index === 1 ? 4 : 0), camera.position.z + forward.z * 150 + right.z * (index - 1) * 35);
        burst.points.quaternion.copy(camera.quaternion);
        burst.material.opacity = phase < .08 || phase > .8 ? 0 : Math.min(1, (phase - .08) * 12) * Math.min(1, (.8 - phase) * 3);
        for (let i = 0; i < PARTICLES; i++) {
          const angle = i * Math.PI * 2 / PARTICLES;
          const spread = radius * (.68 + (i % 3) * .16);
          burst.positions[i * 3] = Math.cos(angle) * spread;
          burst.positions[i * 3 + 1] = Math.sin(angle) * spread - life * life * 2.3;
          burst.positions[i * 3 + 2] = (i % 4 - 1.5) * life;
        }
        burst.geometry.attributes.position.needsUpdate = true;
      }
    },
  };
}
