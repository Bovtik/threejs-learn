var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); 

document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial({
	// color: 0x00ff00,
	// wireframe: true
});
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

let cubeSpeed = 0.02;
let planeG = new THREE.PlaneGeometry(2, 2, 16);
let planeM = new THREE.MeshBasicMaterial({
	color: 0xff0000,
	side: THREE.DoubleSide,
	wireframe: true
});
let plane = new THREE.Mesh(planeG, planeM);
scene.add(plane);
function render() {
	// cube.rotation.x -= cubeSpeed;
	cube.rotation.y += cubeSpeed;


	cube.position.x += cubeSpeed;

	if (Math.abs(cube.position.x) >= 1.5) {
		cubeSpeed *= -1;
	}
	// cube.rotation.y += 0.02;

	plane.rotation.y =  1.1 * Math.PI / 2;
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();


var lineMaterial = new THREE.LineBasicMaterial({
	color: 0x4400ff
});
var lineGeometry = new THREE.Geometry();

lineGeometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
lineGeometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
lineGeometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

var line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

camera.position.z = 5;
camera.position.y = 1;
camera.lookAt(0, 0, 0);
// line.position.z = -10;

window.addEventListener('keydown', (e) => {
	// console.log(e);
	switch (e.key) {
		case 'ArrowUp':
			camera.position.z -= 0.1;
			break;
		case 'ArrowRight':
			camera.position.x += 0.1;
			break;
		case 'ArrowDown':
			camera.position.z += 0.1;
			break;
		case 'ArrowLeft':
			camera.position.x -= 0.1;
			break;
		default: break;
	}
	if (e.key == "ArrowUp") {
	}
})

let prevX = null;
let prevY = null;

window.document.addEventListener('mousemove', (e) => {
	// console.log(e);
	let dx = e.clientX - prevX;
	let dy = e.clientY - prevY;
	console.log(dx, dy);
	camera.rotation.y -= dx * 0.005;
	prevX = e.clientX;
})