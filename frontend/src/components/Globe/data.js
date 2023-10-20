import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature } from 'topojson-client';

const jsonUrl = '/continents.json';

export const GlobeData = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    json(jsonUrl).then(topojsonData => {
      const {continents} = topojsonData.objects
      setData(
        { continents: feature(topojsonData, continents) }
      )
    });
  }, []);
  return data;
};