import React from "react";
import vishnu from "./vishnu.jpg"
import sitbon from "./sitbon.png"
import sander from "./sander.jpg"
import phoebe from "./phoebe.jpg"
const imageStyle ={
  width: "70%", paddingBottom:"10px", paddingTop: "10px"
}
const titleStyle = {
  fontSize : "30px",
  paddingLeft: "0px"
}
function Blog() {
  return (
    <div style = {{paddingRight:"20px", paddingLeft:"20px"}}>
      <h1> Hear from our Alumnis and Academic Champions</h1>
      <h2> nicola testimonial</h2>
      <div className= "row">
<div className= "col-sm-6"  > 
<div className="card mb-3 border border-white" 
      // style="max-width: 540px;"
      />
  <div className="row no-gutters ">
    <div className="col-md-4">
      <img src={vishnu} style={imageStyle}  class="card-img" alt="hackathon"/>  <h5 className="card-title" style = {titleStyle}>Vishnu Katta </h5>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      
        <h6 style = {{fontStyle:"italic"}}> “Always try to do things consciously, never let the external factors decide your destiny.” 
</h6>
        <p className="card-text">
        Vishnu Katta was the vice president of QUT BANDS from July 2020 - Nov 2020. He graduated from Master of IT majoring Data Science and has been working at C-RES since January 2021. 
     </p>
     <button type="button" onClick= {(e) => {
  e.preventDefault();
  window.location.href="https://qutbandsmember.getqpay.com/"
}} style= {{width: "20% ", borderRadius: "12px", marginLeft: "auto" , marginRight: "auto"}}>Read more...</button> 
          {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div>
<div className= "col-sm-6" > 

<div className="card mb-3 border border-white" 
      // style="max-width: 540px;"
      />
  <div className="row no-gutters ">
    <div className="col-md-4">
      <img src={sitbon} style={imageStyle}  class="card-img" alt="hackathon"/> <h5 className="card-title" style = {titleStyle}>Prof. Laurianne Sitbon</h5>
   
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h6 style = {{fontStyle:"italic"}}> “ Data tells a story with numbers and how you make that up and how you understand it, that is what makes data science fascinating.”
 
</h6>
        
        <p className="card-text">
        Laurianne Sitbon, Associate Professor and Lecturer at the School of Information Systems, QUT. 
       </p>

          {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
    </div>
</div>
</div>


<div className= "row">
<div className= "col-sm-6"  > 
<div className="card mb-3 border border-white" 
      // style="max-width: 540px;"
      />
  <div className="row no-gutters ">
    <div className="col-md-4">
      <img src={phoebe} style={imageStyle}  class="card-img" alt="hackathon"/>  <h5 className="card-title" style = {titleStyle}>Phoebe Keck</h5>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      
        <h6 style = {{fontStyle:"italic"}}> “ Never be afraid to take on responsibilities or opportunities that come your way. You can always learn a lot from them.”

</h6>
        <p className="card-text">
    Phoebe Keck was the _____ of QUT BANDS from July 2020 - Nov 2020. She graduated from Master of IT majoring Data Science and has been working at _____ since ________. 
     </p>
     <button type="button" onClick= {(e) => {
  e.preventDefault();
  window.location.href="https://qutbandsmember.getqpay.com/"
}} style= {{width: "20% ", borderRadius: "12px", marginLeft: "auto" , marginRight: "auto"}}>Read more...</button> 
          {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div>
<div className= "col-sm-6" > 

<div className="card mb-3 border border-white" 
      // style="max-width: 540px;"
      />
  <div className="row no-gutters ">
    <div className="col-md-4">
      <img src={sander} style={imageStyle}  class="card-img" alt="hackathon"/> <h5 className="card-title" style = {titleStyle}>Dr. Sander Leemans </h5>
   
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h6 style = {{fontStyle:"italic"}}> "I think QUT BANDS provides students with excellent opportunities to get in touch with one another, with industry and with potential employers. Also, it's very nice to meet one another in a more informal setting. I especially like the ‘Speed Networking’ with Brisbane companies."

 
</h6>
        
        <p className="card-text">
        Dr Sander Leemans is a lecturer in Business Process Management at the School of Information Systems, QUT.

       </p>

          {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
    </div>
</div>
</div>
    </div>
  );
}

export default Blog;
