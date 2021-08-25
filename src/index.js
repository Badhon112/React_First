import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const names="Hi my name is "
const Identity= "With my family mumber "
function Fram(){
  return(
    <div>
      <Man id="Little Sister" name="Sheoshe Biswas"/>
      <Man id="Pagol also Ideate looser" name="Badhon Biswas"/>
      <Man id="Mom" name="Bonita Biswas"/>
      <Man id="Bad But God" name="Mongol Biswas"/>
    </div>
  );
};

const Man=(props)=>{
  return(
    <div>
      <h3>{names} {props.name} {Identity} {props.id}</h3>
    </div>
  );
}

ReactDom.render(<Fram/>,document.getElementById('root'));