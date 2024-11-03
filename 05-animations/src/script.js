import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//Clock Elapsed Time
const clock = new THREE.Clock()

// Gsap
// gsap.to(mesh.position, {
//     x: 1,
//     duration: 2
// })
// gsap.to(mesh.position,{
//     y:1,
//     duration: 2
// })


// Animation 
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    //Update the Object
    mesh.position.x = Math.sin(elapsedTime)
    mesh.position.y = Math.cos(elapsedTime)
    mesh.rotation.y  = elapsedTime

    // render
    renderer.render(scene, camera)

    // Call tick again after the next frame
    window.requestAnimationFrame(tick)
}

tick()