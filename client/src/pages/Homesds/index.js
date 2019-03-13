import React, { Component } from 'react';
import 'style.css';


const left = $(".left");
const right = $(".right");
const container = $(".container");

  left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
  });
  left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
  });
  
  right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
  });
  
  right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
  });


class Homes extends Component {

render () {

    return (


        <div class="container">
        <div class="split left">
          <h1>The Designer</h1>
          <a href="#" class="button">Read More</a>
        </div>
        <div class="split right">
          <h1>The Programmer</h1>
          <a href="#" class="button">Read More</a>
        </div>
      </div>


    )
}



}


export default Homes;
