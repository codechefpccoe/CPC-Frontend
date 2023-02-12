import React from "react";
import { useEffect } from "react";
import * as THREE from 'three';
import { TweenMax, Power1, Elastic, Expo } from "gsap";
import image from "./Assests/code.png";


export const MainContent = () => {


    useEffect(() => {
    // Three JS Template
    //----------------------------------------------------------------- BASIC parameters
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth * (10/12), window.innerHeight * (5/6));

    if (window.innerWidth > 800) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.shadowMap.needsUpdate = true;
      renderer.toneMapping = THREE.ReinhardToneMapping;
    }
    //-----------------------------------------------------------------

    var SPACE = document.getElementById("MainContent")
    SPACE.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    var camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      500
    );

    camera.position.set(0, 7, 14);

    var scene = new THREE.Scene();
    var city = new THREE.Object3D();
    var town = new THREE.Object3D();

    var uSpeed = 0.001;

    //----------------------------------------------------------------- FOG background

    // var setcolor = 0xF02050;
    // var setcolor = 0xF2F111;
    // var setcolor = 0xFF6347;
    var setcolor = 0x0096FF;
    // var setcolor = 0x7600bc
    // var setcolor = 0x00FFFF;
    // var setcolor = 0x0006b1;
    // var setcolor = 0xFFD700;

    scene.background = new THREE.Color(setcolor);
    scene.fog = new THREE.Fog(setcolor, 8, 20);
    // scene.fog = new THREE.FogExp2(setcolor, 0.05);
    //----------------------------------------------------------------- RANDOM Function
    function mathRandom(num = 8) {
      var numValue = -Math.random() * num + Math.random() * num;
      return numValue;
    }
    //----------------------------------------------------------------- CHANGE bluilding colors
      function hex() {
        const RanHexColor = Math.floor(Math.random() * 16777215).toString(16);
        var backgroundColor = "#" + RanHexColor;
        return backgroundColor;
      }

    function setTintColor() {
      var setColor = 0x252432;
      return setColor;
    }

    //----------------------------------------------------------------- CREATE City

    function init() {
      var segments = 2;
      for (var i = 1; i < 100; i++) {
        var geometry = new THREE.BoxGeometry(1, 1, 1, segments, segments, segments);
        var material = new THREE.MeshStandardMaterial({
          color: "#000000",
          wireframe: false,
        });

        var cube = new THREE.Mesh(geometry, material);
        var floor = new THREE.Mesh(geometry, material);

        cube.castShadow = true;
        cube.receiveShadow = true;
        cube.rotationValue = 0.1 + Math.abs(mathRandom(8));

        floor.scale.y = 0.05; //+mathRandom(0.5);
        cube.scale.y = 0.1 + Math.abs(mathRandom(8));
        var cubeWidth = 0.9;
        cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth);
        cube.position.x = Math.round(mathRandom());
        cube.position.z = Math.round(mathRandom());

        floor.position.set(
          cube.position.x,
          0 /*floor.scale.y / 2*/,
          cube.position.z
        );

        town.add(floor);
        town.add(cube);
      }
      
    }

    //----------------------------------------------------------------- MOUSE function
    var mouse = new THREE.Vector2()
    if (window.innerWidth >= 1024) {
      function onMouseMove(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }
      function onDocumentTouchStart(event) {
        if (event.touches.length == 1) {
          event.preventDefault();
          mouse.x = event.touches[0].pageX - window.innerWidth / 2;
          mouse.y = event.touches[0].pageY - window.innerHeight / 2;
        }
      }
      function onDocumentTouchMove(event) {
        if (event.touches.length == 1) {
          event.preventDefault();
          mouse.x = event.touches[0].pageX - window.innerWidth / 2;
          mouse.y = event.touches[0].pageY - window.innerHeight / 2;
        }
      }
      window.addEventListener("mousemove", onMouseMove, false);
      window.addEventListener("touchstart", onDocumentTouchStart, false);
      window.addEventListener("touchmove", onDocumentTouchMove, false);
    }

    //----------------------------------------------------------------- Lights
    var ambientLight = new THREE.AmbientLight(0xffffff, 4);
    var lightFront = new THREE.SpotLight(0xffffff, 20, 10);
    var lightBack = new THREE.PointLight(0xffffff, 0.5);

    lightFront.rotation.x = (45 * Math.PI) / 180;
    lightFront.rotation.z = (-45 * Math.PI) / 180;
    lightFront.position.set(5, 5, 5);
    lightFront.castShadow = true;
    lightFront.shadow.mapSize.width = 6000;
    lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
    lightFront.penumbra = 0.1;
    lightBack.position.set(0, 6, 0);

    scene.add(ambientLight);
    city.add(lightFront);
    scene.add(lightBack);
    scene.add(city);
    city.add(town);

    //----------------------------------------------------------------- ANIMATE

    var animate = function () {
      var time = Date.now() * 0.00005;
      requestAnimationFrame(animate);

      city.rotation.y -= (mouse.x * 8 - camera.rotation.y) * uSpeed;
      city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed;
      if (city.rotation.x < -0.05) city.rotation.x = -0.05;
      else if (city.rotation.x > 1) city.rotation.x = 1;
      var cityRotation = Math.sin(Date.now() / 5000) * 13;
      for (let i = 0, l = town.children.length; i < l; i++) {
        var object = town.children[i];
      }

      camera.lookAt(city.position);
      renderer.render(scene, camera);
    };

    //----------------------------------------------------------------- START functions
    init();
    animate();
  }, []);


  return (
    <div className="h-full flex justify-between">
      <div className="absolute w-3/6 mt-16 ml-10 flex flex-col gap-7">
        <div className="text-5xl font-iceberg">
          The <span className="text-sky-600 bg-white p-1 border rounded-lg">Blue</span> BIT
        </div>
        <div className="text-2xl">#ThinkTwiceCodeOnce</div>
        <div className="text-slate-100 font-thin">
          The Blue BIT is an adrenaline-fueled hackathon where you can
          collaborate with top talents to create cutting-edge projects that can
          change the world. It is the ultimate playground for anyone who loves
          to build, tinker, and create.
        </div>
        <div className="bg-sky-600 px-10 py-3 w-fit cursor-pointer shadow-2xl shadow-slate-600">
          Register
        </div>
      </div>
      <div id="MainContent"></div>
      {/* <img className="" style={{ width: "40vw" }} src={image}></img> */}
    </div>
  );
};
