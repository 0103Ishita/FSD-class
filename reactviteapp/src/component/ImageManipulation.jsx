import React, { useState } from 'react'
import butterfly from "./image.png";


function ImageManipulation() {
    const[imgheight, setImgHeight] = React.useState(200);
    const[imgwidth, setImgWidth] = React.useState(200);
    const[red, setRed] = React.useState(0);
    const[green, setGreen] = React.useState(0);
    const [blue, setBlue] = React.useState(0);
    const [angle, setAngle] = React.useState(200);

    function IncreaseImageHeight(){
        setImgHeight(imgheight + 10);
    }
    function DecreaseImageHeight(){
        setImgHeight(imgheight - 10);
    }
    function IncreaseImageWidth(){
        setImgWidth(imgwidth + 10);
    }
    function DecreaseImageWidth(){
        setImgWidth(imgwidth - 10);
    }
    function ChangeBgColour(){
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
    }
    function rotateimg() {
        setAngle(angle + 10);
    }
  return (
    <>
    <h2>Image Manipulation</h2>
    <div style={{border: '1px solid green', width: '350px', height: '450px' , margin: '0px auto', textAlign: 'center', paddingTop: '20px', backgroundColor: 'lightgrey'}}>
              <img src={butterfly} height={imgheight} width={imgwidth} alt="leaf" style={{ paddingTop: '70px', paddingLeft: '20px', backgroundColor: `rgb(${red}, ${green}, ${blue}`,transform:`rotate(${angle}deg)` }} />
    </div>
    <div>
        <button onClick={IncreaseImageHeight}>Increase Height</button>
        <button onClick={DecreaseImageHeight}>Decrease Height</button>
        <button onClick={IncreaseImageWidth}>Increase Width</button>
        <button onClick={DecreaseImageWidth}>Decrease Width</button>
        <button onClick={ChangeBgColour}>Change Background colour</button>
        <button onClick={rotateimg}>Rotate</button>
    </div>
    <div>
        <h2 style={{color : 'blue'}}>Image height : {imgheight}</h2>
    </div>
    <div>
        <h2 style={{color : 'blue'}}>Image width : {imgwidth}</h2>
    </div>
    </>
  )
}



export default ImageManipulation