import * as THREE from 'three';

// Лёгкие светящиеся ориентиры для обеих карт; состояние принадлежит раунду хозяина.
export class LanternView {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.root = new THREE.Group();
    this.lantern = new THREE.Group();
    const gold = new THREE.MeshStandardMaterial({ color: 0xd49848, metalness: 0.45, roughness: 0.38 });
    const paper = new THREE.MeshStandardMaterial({ color: 0xffd38b, emissive: 0xff9c35, emissiveIntensity: 1.8, transparent: true, opacity: 0.95 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x453027, roughness: 0.85 });
    // Бумажный фонарь с каркасом, ручкой и кисточкой. Он больше фонарей декораций.
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.43, 0.43, 0.88, 8), paper);
    body.position.y = 0.62; this.lantern.add(body);
    for (const h of [0.16, 0.44, 0.8, 1.08]) {
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.045, 8), gold);
      rim.position.y = h; this.lantern.add(rim);
    }
    const roof = new THREE.Mesh(new THREE.ConeGeometry(0.54, 0.24, 8), gold);
    roof.position.y = 1.19; this.lantern.add(roof);
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.045, 6, 12, Math.PI), gold);
    handle.rotation.z = Math.PI; handle.position.y = 1.38; this.lantern.add(handle);
    const tassel = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.28, 6), gold);
    tassel.rotation.z = Math.PI; tassel.position.y = -0.04; this.lantern.add(tassel);
    const halo = new THREE.Mesh(new THREE.SphereGeometry(0.78, 12, 8),
      new THREE.MeshBasicMaterial({ color: 0xffae40, transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending }));
    halo.position.y = 0.62; this.lantern.add(halo);
    this.root.add(this.lantern);
    this.beacon = new THREE.Group();
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffc660, transparent: true, opacity: 0.15,
      depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.8, 5.5, 12, 1, true), beaconMat);
    beam.position.y = 2.75; this.beacon.add(beam);
    const pickupRing = new THREE.Mesh(new THREE.TorusGeometry(1.32, 0.08, 6, 32),
      new THREE.MeshBasicMaterial({ color: 0xffd467, transparent: true, opacity: 0.88 }));
    pickupRing.rotation.x = Math.PI / 2; pickupRing.position.y = 0.1; this.beacon.add(pickupRing);
    this.root.add(this.beacon);
    this.shrine = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.22, 1.35, 0.28, 12), dark);
    base.position.y = 0.12; this.shrine.add(base);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.12, 0.07, 6, 32), gold);
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.31; this.shrine.add(ring);
    for (const x of [-0.75, 0.75]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 2.2, 8), dark);
      post.position.set(x, 1.34, 0); this.shrine.add(post);
    }
    const lintel = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.19, 0.28), gold);
    lintel.position.y = 2.42; this.shrine.add(lintel);
    const flame = new THREE.Mesh(new THREE.OctahedronGeometry(0.27, 0), paper);
    flame.position.y = 1.65; this.shrine.add(flame);
    const shrineBeam = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 1.15, 7, 12, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x62efff, transparent: true, opacity: 0.13,
        depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
    shrineBeam.position.y = 3.6; this.shrine.add(shrineBeam);
    this.root.add(this.shrine);
    scene.add(this.root);
    this.root.visible = false;
  }

  update(state, agents, t) {
    this.root.visible = !!state?.lantern && !!state?.shrine;
    if (!this.root.visible) return;
    const l = state.lantern, s = state.shrine;
    const carrier = l.carrier && agents.find(a => a.key === l.carrier);
    const y = carrier ? carrier.ctrl.pos.y + 2.2 : this.world.groundAt(l.x, l.z, 0.3, 2) + 0.2;
    this.lantern.position.set(l.x, y + Math.sin(t * 3) * 0.12, l.z);
    this.lantern.rotation.y = t * 0.7;
    this.beacon.visible = !l.carrier;
    this.beacon.position.set(l.x, this.world.groundAt(l.x, l.z, 0.3, 2) + 0.05, l.z);
    this.beacon.children[1].scale.setScalar(1 + Math.sin(t * 3) * 0.07);
    this.shrine.position.set(s.x, this.world.groundAt(s.x, s.z, 0.4, 2), s.z);
    this.shrine.children[0].rotation.y = t * 0.1;
  }

  dispose() { this.scene.remove(this.root); }
}

// Стрелка и расстояние до цели относительно текущего взгляда игрока.
export function objectiveGuide(from, target, yaw) {
  const dx = target.x - from.x, dz = target.z - from.z;
  const right = dx * Math.cos(yaw) - dz * Math.sin(yaw);
  const forward = -dx * Math.sin(yaw) - dz * Math.cos(yaw);
  const angle = Math.atan2(right, forward);
  const arrows = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'];
  const index = (Math.round(angle / (Math.PI / 4)) + 8) % 8;
  return `${arrows[index]} ${Math.ceil(Math.hypot(dx, dz))} м`;
}
