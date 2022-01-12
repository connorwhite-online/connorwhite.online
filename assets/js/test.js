const three = require('three');

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(); 
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); 
const sphere = new THREE.Mesh( geometry, material ); 
scene.add( sphere ); 
camera.position.z = 5;


function onWindowResize() {
    const { width, height } = canvas;
    
    screenDimensions.width = width;
    screenDimensions.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
};

function animate() { requestAnimationFrame( animate ); 
    sphere.rotation.x += 0.01; sphere.rotation.y += 0.01;
    renderer.render( scene, camera ); 
} 
animate();

// // instantiate a loader
// const loader = new OBJLoader();

// // load a resource
// loader.load(
// 	// resource URL
// 	'../models/Surveillance.obj',
// 	// called when resource is loaded
// 	function ( object ) {

// 		scene.add( object );

// 	},
// 	// called when loading is in progresses
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );