import React from 'react'
import '../css/welcome.css'
import { Row, Col } from 'react-bootstrap'

function WelcomePage() {

    function abc(){
        const arr=["Ambitious","Self motivated","Critical thinker","a Software Engineer","a Proud Indian", "TANMAY"];
        const fonts=["IM Fell English SC","Rubik Bubbles","Grape Nuts","Bangers","Permanent Marker","Rubik Moonrocks"]
        let i=0;
        setInterval(() => {
            document.getElementById("aaa").innerText = arr[i];
            document.getElementById("aaa").style.fontFamily = fonts[i];
            ++i;
            if(i===6) i=0;
        }, 2000);
    };

  return (
   <div className='welcome'>
       <Row className="welcome-row">
           <Col className='col1' sm={6} xs={12}>
                <h1>I am</h1>
           </Col>
           {document.addEventListener('DOMContentLoaded',abc())}
           <Col className='col2' id="name" sm={6} xs={12}>
                <h1 id="aaa">_</h1>
           </Col>
       </Row>


   </div>
  )
}

export default WelcomePage