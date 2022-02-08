import * as THREE from 'three';

// manual file loader setup
import { GLTFLoader } from 
'three/examples/jsm/loaders/GLTFLoader.js';

import { OBJLoader } from 
'three/examples/jsm/loaders/OBJLoader.js';

import { STLLoader } from 
'three/examples/jsm/loaders/STLLoader';

const scene = new THREE.Scene();
const glloader = new GLTFLoader();
const objloader = new OBJLoader();
const stlloader = new STLLoader();

glloader.load( '../models/stud.gltf', function ( gltf ) {
    scene.add( gltf.scene );
}, undefined, function ( error ) {
    console.error( error );
});





