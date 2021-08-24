import React from 'react';
import ReactDom from 'react-dom';
function Hi(){
  return(
    <div>
      <h1>
        How are you
      </h1>
    </div>
  );
};


ReactDom.render(<Hi/>,document.getElementById('root'));