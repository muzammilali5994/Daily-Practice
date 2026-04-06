import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
gsap.from('.contact-btn',{
    opacity:0,
    x:40,
    duration:1,
    ease:"and.power2.out",
    delay:0.5
})
gsap.from('.email-input',{
    opacity:0,
    x:-40,
    duration:1,
    ease:"and.power2.out",
    delay:0.7
})

// 1. Container select karein
const container = document.getElementById('three-container');

// 2. Scene, Camera, aur Renderer banayein
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

// alpha: true background ko transparent rakhega (peeche ka gradient nazar aayega)
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// 3. 3D Object (Geometry aur Material) banayein
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);

// MeshStandardMaterial light ke sath bohot realistic lagta hai
const material = new THREE.MeshStandardMaterial({ 
    color: 0x007bff, // Bootstrap ka primary blue color
    roughness: 0.2,  // Shiny effect ke liye
    metalness: 0.8   // Metallic look ke liye
});
const shape = new THREE.Mesh(geometry, material);
scene.add(shape);

// 4. Lights Add Karein (baghair light ke standard material black dikhta hai)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Halki roshni
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1); // Tez roshni
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

// Camera ko thora peechay karein taake object nazar aaye
camera.position.z = 30;

// 5. Animation Loop (Object ko rotate karne ke liye)
function animate() {
    requestAnimationFrame(animate);

    // X aur Y axis par shape ko ghumayein
    shape.rotation.x += 0.005;
    shape.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Animation start karein
animate();