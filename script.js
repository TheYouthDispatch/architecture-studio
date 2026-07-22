let scene;
let camera;
let renderer;

let house;



function init(){


scene = new THREE.Scene();

scene.background = new THREE.Color(0x222222);



camera = new THREE.PerspectiveCamera(
45,
window.innerWidth/600,
0.1,
1000
);


camera.position.set(
5,
5,
8
);



renderer = new THREE.WebGLRenderer({
antialias:true
});


renderer.setSize(
window.innerWidth,
600
);


document
.getElementById("scene")
.appendChild(renderer.domElement);




// lighting

let light = new THREE.DirectionalLight(
0xffffff,
1
);

light.position.set(
5,
10,
5
);

scene.add(light);



let ambient = new THREE.AmbientLight(
0xffffff,
0.5
);

scene.add(ambient);



// ground

let groundGeometry =
new THREE.PlaneGeometry(
20,
20
);


let groundMaterial =
new THREE.MeshStandardMaterial({
color:0x555555
});


let ground =
new THREE.Mesh(
groundGeometry,
groundMaterial
);


ground.rotation.x =
-Math.PI/2;


scene.add(ground);



createHouse();


animate();


}



function createHouse(){


let body =
new THREE.BoxGeometry(
2,
1.5,
2
);


let material =
new THREE.MeshStandardMaterial({
color:0xffffff
});


house =
new THREE.Mesh(
body,
material
);


house.position.y=.75;


scene.add(house);



// roof

let roof =
new THREE.ConeGeometry(
1.7,
1,
4
);


let roofMaterial =
new THREE.MeshStandardMaterial({
color:0x8b4513
});


let roofMesh =
new THREE.Mesh(
roof,
roofMaterial
);


roofMesh.position.y=2;


roofMesh.rotation.y=Math.PI/4;


scene.add(roofMesh);



}




function addHouse(){


let newHouse =
house.clone();


newHouse.position.x =
Math.random()*6-3;


scene.add(newHouse);


}



function changeMaterial(){


house.material.color.set(
Math.random()*0xffffff
);


}



function resetScene(){

location.reload();

}



function animate(){

requestAnimationFrame(
animate
);


renderer.render(
scene,
camera
);


}



init();
