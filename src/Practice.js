import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Def ="Hi my name is : "
const Id="MY id Is : "
const Dipt="My dipertment name is : "
const Badhon={
  name:"Badhon Biswas",
  id:"1925002058",
  Diperment:"CSE(DAY)"
}
const Mahabub={
  name:"Mahabubul Hok",
  id:"1925002056",
  Diperment:"CSE(DAY)"
}
const Mafus={
  name:"Mafus",
  id:"1925002002",
  Diperment:"CSE(DAY)"
}

function Fram(){
  return(
    <div className="container">
      <div className="jumbotron">
         <Man name={Badhon.name}  id={Badhon.id} Dipertment={Badhon.Diperment}/>
         <Man name={Mahabub.name}  id={Mahabub.id} Dipertment={Mahabub.Diperment}/>
         <Man name={Mafus.name}  id={Mafus.id} Dipertment={Mafus.Diperment}/>
         {/* <But/> */}
      </div>
    </div>
  );
};


const Man=(props)=>{
  return(
    <div className="container">
      <div className="jumbotron border">
        <h3>{Def} {props.name} <br /> {Id}{props.id} <br /> {Dipt} {props.Dipertment}</h3>
        <But/>
      </div>
    </div>
  );
}
const But=()=>{
  return(
    <div style={{display:"flex"}} ClassName="border">
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
    </div>
  );
}
ReactDom.render(<Fram/>,document.getElementById('root'));