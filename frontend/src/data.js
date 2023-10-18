import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature } from 'topojson-client';

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/land-50m.json';

export const useData = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    json(jsonUrl).then(topojsonData => {
      const {land} = topojsonData.objects
      setData(
        { land: feature(topojsonData, land) }
      )
    });
  }, []);
  return data;
};