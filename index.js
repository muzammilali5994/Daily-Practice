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


        // --------------------------------------------------------
        // 1. SCENE SETUP (The Basics)
        // --------------------------------------------------------
        const canvas = document.querySelector('#webgl-canvas');
        const scene = new THREE.Scene();

        const sizes = { width: window.innerWidth, height: window.innerHeight };
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
        camera.position.z = 10; // Move camera back so we can see the object
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // --------------------------------------------------------
        // 2. LIGHTING (To make the 3D shape look 3D)
        // --------------------------------------------------------
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0x00f2fe, 3, 10);
        pointLight.position.set(-2, -2, 2);
        scene.add(pointLight);

        // --------------------------------------------------------
        // 3. THE 3D OBJECT (The "Gem")
        // --------------------------------------------------------
        // Icosahedron is a great basic geometry for practicing lighting
        const geometry = new THREE.IcosahedronGeometry(1.5, 0); 
        
        // MeshStandardMaterial reacts beautifully to light
        const material = new THREE.MeshStandardMaterial({ 
            color: 0xffffff,
            roughness: 0.2, // Makes it shiny
            metalness: 0.8, // Makes it look a bit metallic
            flatShading: true // Gives it that low-poly crystal look
        });
        
        const gem = new THREE.Mesh(geometry, material);
        
        // Offset it slightly to the right so it doesn't block the text
        gem.position.x = 2;
        scene.add(gem);

        // --------------------------------------------------------
        // 4. GSAP ANIMATIONS (The Magic)
        // --------------------------------------------------------
        
        // Set initial states for the reveal
        gem.scale.set(0, 0, 0);
        gem.rotation.set(Math.PI, Math.PI, 0);

        // Create a GSAP Timeline for the initial load sequence
        const tl = gsap.timeline();

        // 1. Animate UI Text
        tl.from(".title", { y: 30, opacity: 0, duration: 1, ease: "power3.out" })
          .from(".subtitle", { y: 20, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        
        // 2. Animate the 3D Object "popping" into existence
          .to(gem.scale, { x: 1, y: 1, z: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }, "-=1")
          .to(gem.rotation, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power3.out" }, "-=1.5");

        // 3. The Continuous Floating Effect (Independent of timeline)
        // We use sine.inOut to make the bobbing feel natural and heavy
        gsap.to(gem.position, {
            y: 0.4,           // Move up by 0.4 units
            duration: 2,      // Takes 2 seconds
            yoyo: true,       // Go back down
            repeat: -1,       // Repeat infinitely
            ease: "sine.inOut" // Smooth deceleration at top and bottom
        });

        // --------------------------------------------------------
        // 5. THE RENDER LOOP
        // --------------------------------------------------------
        const tick = () => {
            // We add a slow continuous spin here directly in the render loop.
            // GSAP handles the Y-axis float, Three handles the continuous spin.
            gem.rotation.y += 0.005;
            gem.rotation.x += 0.002;

            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };
        tick();

        // --------------------------------------------------------
        // 6. RESIZE HANDLER (Keep things responsive)
        // --------------------------------------------------------
        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(sizes.width, sizes.height);
        });