import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Group
const group = new THREE.Group()
group.position.y = .3
group.rotation.y = 1
group.scale.y = 2
scene.add(group)

// Objects
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"red"})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"green"})
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"yellow"})
)
cube3.position.x = 2
group.add(cube3)


// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000})
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// //Position
// mesh.position.x = 0.6
// mesh.position.y = -0.6
// mesh.position.z = 1
// // mesh.position.set(0.8,-0.6,1)

// //Scale
// mesh.scale.x = 2 
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// // mesh.scale.set(2,0.5,0.5)

// //Rotation
// mesh.rotation.reorder("YXZ")
// mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.x = Math.PI * 0.25

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//look at center of object 
// camera.lookAt(mesh.position) 

//Vector3
// console.log(mesh.position.length()); (distance from center point to object)
// console.log(mesh.position.normalize()); (set the object at 1 from the center point)
// console.log(mesh.position.distanceTo(camera.position)); (distance from center object to camera)

//Axes helper 
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


//  Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// **Mesh , Camera , Group are inherite of Object 3D means they have position , rotation , scale 
// **Position is inherited from Vector3 means it has length , distanceTo , Normalize methods