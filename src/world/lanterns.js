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
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.62, 8), paper);
    body.position.y = 0.42; this.lantern.add(body);
    for (const h of [0.08, 0.77]) {
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.07, 8), gold);
      rim.position.y = h; this.lantern.add(rim);
    }
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.035, 6, 12, Math.PI), gold);
    handle.rotation.z = Math.PI; handle.position.y = 0.84; this.lantern.add(handle);
    const halo = new THREE.Mesh(new THREE.SphereGeometry(0.52, 12, 8),
      new THREE.MeshBasicMaterial({ color: 0xffae40, transparent: true, opacity: 0.15, depthWrite: false }));
    halo.position.y = 0.42; this.lantern.add(halo);
    this.root.add(this.lantern);
    this.shrine = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.22, 1.35, 0.28, 12), dark);
    base.position.y = 0.12; this.shrine.add(base);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.12, 0.07, 6, 32), gold);
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.31; this.shrine.add(ring);
    for (const x of [-0.75, 0.75]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 2.2, 8), dark);
      post.position.set(x, 1.34, 0); this.shrine.add(post);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.19, 0.28), gold);
    beam.position.y = 2.42; this.shrine.add(beam);
    const flame = new THREE.Mesh(new THREE.OctahedronGeometry(0.27, 0), paper);
    flame.position.y = 1.65; this.shrine.add(flame);
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
    this.shrine.position.set(s.x, this.world.groundAt(s.x, s.z, 0.4, 2), s.z);
    this.shrine.children[0].rotation.y = t * 0.1;
  }

  dispose() { this.scene.remove(this.root); }
}
