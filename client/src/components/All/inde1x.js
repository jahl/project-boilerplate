import React, { Component } from 'react';
import "./style.css";
//import Footer from "./components/Footer";

class All extends Component {

    render() {

        return (


<main>
<div className="grid">
    
    <div className="grid__item bg-dark">
        <div className="grid__item-content text-warning">
           
        <h1 className="display-1 font-weight-bold p-2 ">Let's Talk A Bit</h1>
        <a  href="#">Contact Us</a>

        </div>
    </div>

    <div className="grid__item grid__item bg-dark">
     
        <div className="grid__item-content text-light">
        <small>Anyday, Anywhere</small>

            <h1 className="display-4 font-weight-bold p-2"> Make your Bussiness Possible</h1>
                <p className="lead font-weight-normal text-justify"> We have the necessary tools that help reach a global audience about the product.</p>

         
         
        </div>
    </div>

    <div className="grid__item grid__item--bg theme-3">
        <div className="grid__item-img">
            <img src="img/Img23.jpg" alt="Image"/>
        </div>

        <div className="grid__item-content">
            <span className="grid__item-meta">Italy</span>
            <h2 className="grid__item-title">Calm Serenity</h2>
            <h3 className="grid__item-subtitle">
                <span>Italy's secret meadows and fields</span>
                <a className="grid__item-link" href="#">Check them out</a>
            </h3>
        </div>
    </div>

    <div className="grid__item theme-4">
        <div className="grid__item-content">
          
            <h2 className="grid__item-title grid__item-title--small">Qualm Inspiration for Everybody</h2>
            <p className="grid__item-text">Muse about, something incredible is waiting to be known, courage of our questions tesseract hearts of the stars great turbulent clouds the only home.</p>
            <a href="#" className="grid__item-link">Read more</a>
        </div>
    </div>

    <div className="grid__item theme-5">
        <div className="grid__item-content">
         
            <h2 className="grid__item-title grid__item-title--small">Bangkok's Hidden Foodstalls</h2>
            <p className="grid__item-text">Tingling of the spine, network of wormholes preserve and cherish that pale blue dot cosmic ocean encyclopaedia galactica.</p>
            <a href="#" className="grid__item-link">Read more</a>
        </div>
    </div>

    <div className="grid__item grid__item--bg theme-6">
        <div className="grid__item-img" >
            <img src="img/Img1.jpg" alt="Image"/>
            <img src="img/Img13.jpg" alt="Image Alt"/>
        </div>
        <div className="grid__item-content">
            <span className="grid__item-meta">Sweden</span>
            <h2 className="grid__item-title">Build it forever</h2>
            <h3 className="grid__item-subtitle">
                <span>Sweden's famous furniture</span>
                <a className="grid__item-link" href="#">Discover more</a>
            </h3>
        </div>
    </div>

 

</div>
</main>


)
}



}



export default All;