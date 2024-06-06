import { getData } from "../store/fatchApi.js";
import { Component } from "../components/components.js";

let area = document.querySelector("#Area");

// console.log(await getData("users"));

let users = await getData("products");

users.map((product)=>(area.innerHTML+=Component(product)));
