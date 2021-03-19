import React from "react";

const Toto =(props)=>
{      const HH1=props.statee.reponsetoto!==null? <h1> {props.statee.reponsetoto} </h1>: <h1> ordre non donné </h1>;

        return(
           <div>
               <button onClick={props.reponseTotoo}> reponse toto </button>
               {HH1}
           </div>
        );
    
}
export default Toto;