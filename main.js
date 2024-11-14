import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/Addons.js';



// document.body.style.overflow = 'hidden';

// const scene = new THREE.Scene();

// const canvas = document.querySelector('canvas.webgl') 

// const sizes = {
//     width: window.innerWidth, 
//     height: window.innerHeight
// }


// // const geometry = new THREE.BoxGeometry(2,2,1)

// // const material = new THREE.MeshBasicMaterial({color: 0xffffff })

// // const mesh = new THREE.Mesh(geometry, material)

// // scene.add(mesh)


// // const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height)
// // camera.position.z = 3
// // scene.add(camera)

// // const renderer = new THREE.WebGLRenderer({
// //     canvas: canvas
// // })

// // // mesh.position.x = 3
// // // mesh.position.y = -1
// // // mesh.position.z = -2

// // mesh.position.set(5,-4,-3)

// // // Axes HELPERS

// // // Axes helper for origin of viewport
// // const originAxesHelper = new THREE.AxesHelper(1)
// // scene.add(originAxesHelper)

// // // Axes helper for objectOrigin
// // const ObjectaxesHelper = new THREE.AxesHelper(2)
// // ObjectaxesHelper.position.set(...mesh.position)
// // scene.add(ObjectaxesHelper)

// // // Scaling of Object
// // mesh.scale.set(2,2,.5)

// // // Rotation of Object
// // mesh.rotation.x = Math.PI * 0.25
// // mesh.rotation.y = Math.PI * 0.25

// // // Look at Object
// // // camera.lookAt(mesh.position)

// // renderer.setSize(sizes.width, sizes.height)

// // renderer.render(scene, camera)


// // Groups

// const group = new THREE.Group()
// group.scale.y = 2
// group.rotation.y = 0.2
// scene.add(group)

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color: 0xffffff})
// )

// cube1.position.x = -2
// group.add(cube1)

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color: 0xffffff})
// )

// cube2.position.x = 0
// group.add(cube2)

// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color: 0xffffff})
// )

// cube3.position.x = 2
// group.add(cube3)

// const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height)
// camera.position.z = 3

// // const aspectRatio = sizes.width / sizes.height
// // const camera = new THREE.OrthographicCamera(- 1 * aspectRatio, 1 *
// // aspectRatio, 1, - 1, 0.1, 100)


// scene.add(camera)

// const renderer = new THREE.WebGLRenderer({
//     canvas : canvas
// })
// const axesHelper = new THREE.AxesHelper(2)
// scene.add(axesHelper)
// renderer.setSize(sizes.width, sizes.height)

// const clock = new THREE.Clock()
// let time = new Date()

// // const tick = () =>{

// //    const elapsedTime = clock.getElapsedTime()

// //     // group.position.x = Math.cos(elapsedTime)
// //     // group.position.y = Math.sin(elapsedTime)
// //     camera.position.x = Math.cos(elapsedTime)
// //     camera.position.y = Math.sin(elapsedTime)
// //     camera.lookAt(group.position)
// //     renderer.render(scene, camera)

// //     window.requestAnimationFrame(tick)
// // } 

// // tick()

// // gsap.to(group.position, {duration: 1, delay: 1, x: 2})

// // const tick = () =>
// //     {
// //      // Render
// //      renderer.render(scene, camera)
// //      // Call tick again on the next frame
// //      window.requestAnimationFrame(tick)
// //     }
// //     tick()

// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height,
//     1, 1000)
//     // const aspectRatio = sizes.width / sizes.height
//     // const camera = new THREE.OrthographicCamera(- 1 * aspectRatio, 1 *
//     aspectRatio, 1, - 1, 0.1, 100)
//     // camera.position.x = 2
//     // camera.position.y = 2
//     camera.position.z = 3
//     camera.lookAt(mesh.position)
//     scene.add(camera)

// // renderer.render(scene, camera)


// const cursor = {
//     x: 0,
//     y: 0
//    }

// window.addEventListener('mousemove', (event) =>
//     {
//      cursor.x = event.clientX / sizes.width - 0.5
//      cursor.y = - (event.clientY / sizes.height - 0.5)
//     })
    


// let time = new Date()

// const tick = () =>{

//    const elapsedTime = clock.getElapsedTime()

//     // group.position.x = Math.cos(elapsedTime)
//     // group.position.y = Math.sin(elapsedTime)
//     camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
//     camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
//     camera.position.y = cursor.y * 3
//     camera.lookAt(mesh.position)
//     renderer.render(scene, camera)

//     window.requestAnimationFrame(tick)
// } 

// tick()

function createEye(side){
    let eye = new THREE.Mesh(
        new THREE.BoxGeometry(1,1.5,.5),
        new THREE.MeshBasicMaterial({color: 0xffffff})
    )

    eye.scale.set(.2,.2,1)
    eye.position.z = .3
    eye.position.x = (side == "left") ? -.2 : (side == "right") ? .2 : console.log("VALUE ERROR")

    return eye
}

function createEar(side){
    let ear = new THREE.Mesh(
        new THREE.BoxGeometry(.5,3,1),
        new THREE.MeshBasicMaterial({color: 0xffffff})
    )

    ear.scale.set(.1,.3,.3)

    ear.position.set(((side=="left") ? .6 : (side=="right") ? -.6 : console.log("VALUE ERROR")),
                    .2,
                    -.25)
    ear.rotation.x = Math.PI * .75
    ear.rotation.z = Math.PI * ((side=="left") ? .1 : (side=="right") ? -.1 : console.log("VALUE ERROR"))
    return ear
}

function createArm(side){
    let hand = new THREE.Mesh(
        new THREE.BoxGeometry(.2,.5,.3),
        new THREE.MeshBasicMaterial({color: 0xffffff})
    )

    hand.position.x = ((side=="left") ? -.4 : (side=="right") ? .4 : console.log("VALUE ERROR"))
    hand.position.y = -.8
    hand.rotation.z = Math.PI * ((side=="left") ? .9 : (side=="right") ? -.9 : console.log("VALUE ERROR"))

    return hand
}


document.body.style.overflow = 'hidden';

const canvas = document.querySelector('canvas.webgl') 

const sizes = {
    width : window.innerWidth,
    height : window.innerHeight
}

const renderer = new THREE.WebGLRenderer({
    canvas : canvas,
})

renderer.setSize( sizes.width, sizes.height )

const camera = new THREE.PerspectiveCamera( 45,  sizes.width/sizes.height )
camera.position.z = 10

const scene = new THREE.Scene();
scene.add( camera )

// ALLAY MINECRAFT
const allay = new THREE.Group()

// Head Group Init
const headCube = new THREE.Group()
allay.add(headCube)


// head Cube
const head = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x36cbf2})
)

headCube.add(head)

// Eyes

const lefteyeCube = createEye("left")

const righteyeCube = createEye("right")

headCube.add( lefteyeCube )
headCube.add( righteyeCube )

// Ears

const leftEar = createEar("left")
const rightEar = createEar("right")

headCube.add(leftEar)
headCube.add(rightEar)



// const AxesHelper = new THREE.AxesHelper(1)
// scene.add( AxesHelper )

// Torso

const bodyGroup = new THREE.Group()

const body = new THREE.Mesh(
    new THREE.BoxGeometry(.5,1,.5),
    new THREE.MeshBasicMaterial({color: 0xffffff})
)

bodyGroup.add(body)

body.position.y = -.5
body.rotation.x = Math.PI * -.9
allay.add(bodyGroup)

// Hands

const hands = new THREE.Group()

const rightHand = createArm("right")

const leftHand = createArm("left")

hands.add(rightHand)
hands.add(leftHand)

allay.add(hands)

// Controls and Camera

const controls = new OrbitControls(camera, canvas)

camera.position.x = 0

// Animations

// Head Animations

// Eye Animation
gsap.to([righteyeCube.scale,lefteyeCube.scale], {y: 0.02, ease: 'power2.inOut', yoyo: true, repeat: -1 , repeatDelay: 5})
gsap.to(headCube.rotation, {z: Math.PI * -.05, x:  Math.PI * -.05,  ease: 'power2.inOut', yoyo: true, repeat: -1 , repeatDelay: 5})

// Ear Animation
gsap.to(leftEar.rotation, {x: Math.PI * .8, z: Math.PI * .1, ease: 'power2.inOut', yoyo: true, repeat: -1 , repeatDelay: 1})
gsap.to(leftEar.position, {y: .2 ,ease: 'power2.inOut', yoyo: true, repeat: -1 , repeatDelay: 1 })

gsap.to(rightEar.rotation, {x: Math.PI * .8, z: Math.PI * -.1, ease: 'power2.inOut', yoyo: true, repeat: -1 , repeatDelay: .5})
gsap.to(rightEar.position, {y: .2 ,ease: 'power2.inOut', yoyo: true, repeat: -1 , repeatDelay: .5 })

// Body Animations

gsap.to(body.rotation , {x: Math.PI * -.85, ease: 'sine.inOut', yoyo: true, repeat: -1 , repeatDelay: 1})

// Hand Animations

gsap.to(rightHand.rotation, {z: Math.PI * -.85, ease: 'power4.inOut', yoyo: true, repeat: -1, repeatDelay: .2})
gsap.to(leftHand.rotation, {z: Math.PI * .85, ease: 'power4.inOut', yoyo: true, repeat: -1, repeatDelay: .2})

// Whole Body Animation

gsap.to(allay.position, {y: .05 , ease: 'sine.inOut', yoyo: true, repeat: -1 , repeatDelay: .2 })

scene.add(allay)

const tick = () =>{
    controls.update()
    renderer.render( scene , camera );
    window.requestAnimationFrame(tick)
}

tick()


