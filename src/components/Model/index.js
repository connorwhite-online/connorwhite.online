import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/m1_metal.gltf");


// useEffect(() => {
//     gsap.fromTo(group.current, {
//       scale: 0,
//       opacity: 0,
//     }, {
//       scale: 1,
//       opacity: 1,
//       duration: .75,
//       ease: "power3.inOut"
//     })
//   }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.75}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["64765"].geometry}
          material={materials.Material_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["64765_1"].geometry}
          material={materials.Material_3}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/m1_metal.gltf");