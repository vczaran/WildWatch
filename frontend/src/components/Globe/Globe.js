import { geoOrthographic, geoPath, geoGraticule } from 'd3';
import React, {useState, useCallback} from 'react';
import $ from 'jquery';

const width = 960;
const height = 500;
const intialMousePosition = {x: width/2, y: height/2};

const projection = geoOrthographic();
const path = geoPath(projection);
const graticule = geoGraticule();


export const Globe = ({data: {continents}}) => {

  const [MousePosition, SetMousePosition] = useState(intialMousePosition)
  const [mouseDown, SetMousedDown] = useState(false)

  const handleMouseDown = useCallback((event) => {

  SetMousedDown(true);
  
},[])
const handleMouseUp = useCallback((event) => {

  $('.globe').css('cursor', '')
  SetMousedDown(false);
  
},[])

const handleMouseMove = useCallback((event) => {
  
  const {clientX, clientY}= event;
  if(mouseDown){
    SetMousePosition({x:clientX, y:clientY});
    $('.globe').css('cursor', 'pointer')
  }
  
},[SetMousePosition, mouseDown])


function handleClick (feature) {
  let continent = feature.properties.CONTINENT;

  if (continent === "North America") {
    console.log('North America');
  } else if (continent === "South America") {
    console.log('South America');
  } else if (continent === "Europe") {
    console.log('Europe');
  } else if (continent === "Asia") {
    console.log('Asia'); 
  } else if (continent === 'Africa') {
    console.log('Africa');
  } else if (continent === 'Antarctica') {
    console.log('Antarctica');
  } else if (continent === 'Australia') {
    console.log('Australia');
  }
 
}
  
  return(
  <g  className="globe" onMouseDown = {handleMouseDown} onMouseMove = {handleMouseMove} onMouseUp= {handleMouseUp}>
      {projection.rotate([MousePosition.x + 30 / 60, -MousePosition.y, 0])}
     <path className = "sphere" d={ path({type: 'Sphere'})}/>
      <path className = "graticule" d={ path(graticule())} style = {{display: 'none'}}/> 
     
    {
      continents.features.map(feature => (
       <path className = "feature" d={ path(feature)} onClick={()=>handleClick(feature)}/>
      )) 
    }
  </g>);

// Globe w/out mouse rotation
// return(
//   <g className="globe" >
//   <path className = "sphere" d={ path({type: 'Sphere'})}/>
//   {
//         land.features.map(feature => (
//         <path className = "feature" d={ path(feature)}/>
//        ))
//    }
//   </g>
// );
};