import React, { useState } from "react";
import { useEffect } from "react";
import * as THREE from "three";
import { Navbar } from "./Navbar";
import { MainContent } from "./MainContent";
import { Price } from "./Price";
import { TimeLine } from "./TimeLine";
import Cursor from "./Cursor/Cursor.jsx";
import { Rounds } from "./Rounds";
import { Details } from "./Details";
import { FAQs } from "./FAQ";
import "./thebluebit.css";
import image from "./Assests/Frame 1.png";

export const TheBlueBIT = () => {
  const [iwidth, siw] = useState(window.innerWidth);
  window.onresize = function (event) {
    siw(event.target.innerWidth);
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      // Three JS Template
      //----------------------------------------------------------------- BASIC parameters
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(
        window.innerWidth * (10 / 12),
        window.innerHeight * (5 / 6)
      );

      if (window.innerWidth > 800) {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.shadowMap.needsUpdate = true;
        renderer.toneMapping = THREE.ReinhardToneMapping;
      }
      //-----------------------------------------------------------------

      var SPACE = document.getElementById("City");
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
      var setcolor = 0x0096ff;
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

      //----------------------------------------------------------------- CREATE City

      function init() {
        var segments = 2;
        for (var i = 1; i < 30; i++) {
          var geometry = new THREE.BoxGeometry(
            1,
            1,
            1,
            segments,
            segments,
            segments
          );
          var material = new THREE.MeshStandardMaterial({
            color: "#000000",
            wireframe: false,
          });

          var cube = new THREE.Mesh(geometry, material);
          var floor = new THREE.Mesh(geometry, material);

          // cube.castShadow = true;
          // cube.receiveShadow = true;
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
      var mouse = new THREE.Vector2();
      if (window.innerWidth >= 1024) {
        function onMouseMove(event) {
          event.preventDefault();
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }
        window.addEventListener("mousemove", onMouseMove, false);
      }

      //----------------------------------------------------------------- Lights
      var ambientLight = new THREE.AmbientLight(0xffffff, 4);
      // var lightFront = new THREE.SpotLight(0xffffff, 20, 10);
      // var lightBack = new THREE.PointLight(0xffffff, 0.5);

      // lightFront.rotation.x = (45 * Math.PI) / 180;
      // lightFront.rotation.z = (-45 * Math.PI) / 180;
      // lightFront.position.set(5, 5, 5);
      // lightFront.castShadow = true;
      // lightFront.shadow.mapSize.width = 6000;
      // lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
      // lightFront.penumbra = 0.1;
      // lightBack.position.set(0, 6, 0);

      scene.add(ambientLight);
      // city.add(lightFront);
      // scene.add(lightBack);
      scene.add(city);
      city.add(town);

      //----------------------------------------------------------------- ANIMATE

      init();
      var animate = function () {
        // var time = Date.now() * 0.00005;
        requestAnimationFrame(animate);

        city.rotation.y -= (mouse.x * 8 - camera.rotation.y) * uSpeed;
        city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed;
        if (city.rotation.x < -0.05) city.rotation.x = -0.05;
        else if (city.rotation.x > 1) city.rotation.x = 1;
        // var cityRotation = Math.sin(Date.now() / 5000) * 13;
        // for (let i = 0, l = town.children.length; i < l; i++) {
        //   var object = town.children[i];
        // }

        camera.lookAt(city.position);
        renderer.render(scene, camera);
      };

      //----------------------------------------------------------------- START functions

      animate();
    }
  }, []);

  return (
    <div id="thebluebit">
      <div
        className="relative text-white flex justify-center items-center w-screen h-screen"
        style={{ background: "#24242B" }}
      >
        <div className="absolute left-0 w-3/12 h-full bg-sky-600 opacity-100"></div>
        <div className="z-50">
          <Cursor />
        </div>
        <div
          id="main"
          className="w-[95%] md:w-10/12 h-[90%] md:h-5/6 rounded-2xl drop-shadow-2xl overflow-hidden"
        >
          <div id="City" className="fixed -z-50 bg-black bg-opacity-50"></div>
          <div className=" bg-black bg-opacity-60 w-full h-full ">
            <Navbar />
            <div className="overflow-auto h-full">
              <MainContent />
              <Rounds />
              <Details />
              <TimeLine />
              <Price />
              <FAQs />
              <div style={{ height: "10vh" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
