// // Define a function to load and display a 3D model
// function loadModel(modelUrl, modelName) {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
  
//     const loader = new THREE.GLTFLoader();
//     let model;
  
//     loader.load(modelUrl, (gltf) => {
//       model = gltf.scene;
//       scene.add(model);
  
//       // Adjust the position, rotation, and scale of the model as needed
//       model.position.set(0, 0, 0);
//       model.rotation.set(0, 0, 0);
//       model.scale.set(1, 1, 1);
  
//       animate();
//     });
  
//     camera.position.z = 5;
  
//     function animate() {
//       requestAnimationFrame(animate);
  
//       // Add any animation or interaction logic here
  
//       renderer.render(scene, camera);
//     }
  
//     window.addEventListener('resize', () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;
//       camera.aspect = newWidth / newHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(newWidth, newHeight);
//     });
//   }
  
//   // Load and display the 3D model for the Lion
//   loadModel('models/Lion.glb', 'Lion');
  


  // Get a reference to the container div
const container = document.getElementById('model-container');

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 2;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Load the .glb model
const loader = new THREE.GLTFLoader();
let model;

loader.load('Lion.glb', (gltf) => {
  model = gltf.scene;
  scene.add(model);

  // You can adjust the model's position, rotation, and scale here if needed
  model.position.set(0, 0, 0);
  model.rotation.set(0, 0, 0);
  model.scale.set(1, 1, 1);

  // Animate the scene
  const animate = () => {
    requestAnimationFrame(animate);

    // Add animation or interaction logic here

    renderer.render(scene, camera);
  };

  animate();
});

// Handle window resizing
window.addEventListener('resize', () => {
  const newWidth = container.clientWidth;
  const newHeight = container.clientHeight;
  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(newWidth, newHeight);
});
