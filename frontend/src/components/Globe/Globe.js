import { geoOrthographic, geoPath, geoGraticule } from 'd3';
import React, {useState, useCallback} from 'react';
import $ from 'jquery';
import ContinentModal from '../Continent Modal/ContinentModal';

const width = 960;
const height = 500;
const intialMousePosition = {x: width/2, y: height/2};

const projection = geoOrthographic();
const path = geoPath(projection);
const graticule = geoGraticule();


export const Globe = ({data: {continents}}) => {

  const [MousePosition, SetMousePosition] = useState(intialMousePosition);
  const [mouseDown, SetMousedDown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [continent, setContinent] = useState("");
  // const openModal = () => {
  //   setModalOpen(true);
  // }

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleMouseDown = useCallback((event) => {

  SetMousedDown(true);
  
},[])
const handleMouseUp = useCallback((event) => {

  $('.globe').css('cursor', '')
  SetMousedDown(false);
  
},[])

const handleMouseMove = useCallback((event) => {
  
  const {clientX, clientY} = event;
  if(mouseDown){
    SetMousePosition({x:clientX, y:clientY});
    $('.globe').css('cursor', 'pointer')
  }
  
},[SetMousePosition, mouseDown])


function handleClick (feature) {
  setModalOpen(true);
  let continent = feature.properties.CONTINENT;
  if (continent === "North America") {
    setContinent("North America");
  } else if (continent === "South America") {
    setContinent('South America');
  } else if (continent === "Europe") {
    setContinent('Europe');
  } else if (continent === "Asia") {
    setContinent('Asia'); 
  } else if (continent === 'Africa') {
    setContinent('Africa');
  } else if (continent === 'Antarctica') {
    setContinent('Antarctica');
  } else if (continent === 'Australia') {
    setContinent('Australia');
  }
 
}
  
  return(
    <>
      <g  className="globe" onMouseDown = {handleMouseDown} onMouseMove = {handleMouseMove} onMouseUp= {handleMouseUp}>
          {projection.rotate([MousePosition.x + 30 / 60, -MousePosition.y, 0])}
          <path className = "sphere" d={ path({type: 'Sphere'})}/>
          <path className = "graticule" d={ path(graticule())} style = {{display: 'none'}}/> 
        
        {
          continents.features.map(feature => (
          <path className = "feature" d={path(feature)} onClick={()=>handleClick(feature)}/>
          )) 
        }
      </g>;

      {modalOpen && 
        <ContinentModal 
          closeModal={closeModal}
          continent={continent}/>}   
    </>
  )

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