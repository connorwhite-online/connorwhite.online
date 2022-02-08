import * as THREE from 'three';

// manual file loader utility setup
import { GLTFLoader } from 
'three/examples/jsm/loaders/GLTFLoader.js';

import { OBJLoader } from 
'three/examples/jsm/loaders/OBJLoader.js';

import { STLLoader } from 
'three/examples/jsm/loaders/STLLoader';

// render setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.webGLContainer').appendChild(renderer.domElement);


// scene setup
const scene = new THREE.Scene();

//camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

// loader declarations
const gltfloader = new GLTFLoader();
const objloader = new OBJLoader();
const stlloader = new STLLoader();

// load stud.gltf
gltfloader.load(
    // resource URL
    'assets/models/stud.gltf',
    // called when the resource is loaded
    function ( gltf ) {

        scene.add( gltf.scene );

        gltf.animations;
        gltf.scene;
        gltf.scenes;
        gltf.cameras;
        gltf.asset;
    
    },

    //called wile loading is progressing
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },

    // called when loading has errors
    function ( error ) {
        console.log('An error occurred');
    }
);

// render loop
renderer.render(scene, camera);





