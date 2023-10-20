import { useEffect, useState } from "react";
import SpeciesItem from "./SpeciesItem";
import './SpeciesList.css'

export default function SpeciesList () {
    const [data,setData]=useState([]);

    const getData=()=>{
        fetch('SpeciesByCont.json'
        ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
          )
            .then(function(response){
              return response.json();
            })
            .then(function(myJson) {
              setData(myJson)
            });
    }

    useEffect(()=>{
    getData()
    },[])

    return (
        <div className="species-list">
            {data.map((animal) =>  <SpeciesItem key={animal.id} animal={animal}/>)}
        </div>
    )
}