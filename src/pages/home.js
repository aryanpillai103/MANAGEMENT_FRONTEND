import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Footer from '../components/footer'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function Home(){
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();
    
    const handleLogin = async(e) =>{
      e.preventDefault();
      // const isLoggedIn = await
      fakeLogin(username, password);
      // if(isLoggedIn){
      //   navigate('/dashboard');
      // }
      // else if(isLoggedIn){
      //   navigate('/admin_dashboard');
      // }
      // else{
      //   alert("Enter Valid Credentials")
      // }
    };

    const fakeLogin=(username, password) =>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          if(username==='prabal20csea22@bpitindia.edu.in' && password==='prabal'){
            resolve(true);
            navigate('/dashboard');
          }
          else if(username==='achalkaushik@bpitindia.edu.in' && password==='achalsir'){
resolve(true);
navigate('/admin_dashboard');
          }
          else{
            resolve(false);
            alert("Enter Valid Credentials")
          }
          },1000);
        });
    };

  
    return(
        <div>
      <Helmet><script src="script.js"/></Helmet>
<Navbar/>

<section  className="main1" style={{position: "sticky"}}>
  
  <img src="https://images.shiksha.com/mediadata/images/1512469113phpxVkQNz.png" alt=""/>
<div  className="L1"> <h1>WELCOME TO BPIT'S</h1> 
 <h1  className="L2"  >ASSET <span style={{color: "red"}}>MANAGEMENT</span> SYSTEM</h1>
 <h2 className="L3">Streamlining Asset Management for a Smarter Campus</h2>
 </div>
</section>

<br/><br/>


<section className="form1" id="signin">
<form className="signin" onSubmit={handleLogin}>

<label for="email" className="email">Email:</label><br/>
<input type="text" id="email" name="email" value={username} onChange={(e)=>setUsername(e.target.value)} required/><br/>
<br/>
<label for="password" className="pass">Password:</label><br/>
<input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required /><br/>
<br/>
<div className="submit"><br/>
    <input type="submit" value="Submit" className="btn" />
<br/>
<br/>

</div>

</form>
</section><br/><br/>
<br/>
<div className="aboutus" id="aboutus"> 
<div className="first">
   <h1 className="heading">About Us</h1> 
    <p >The project aims to <span className="hello" /*style="font-weight: 500;"*/>streamline the process of reporting faults or damages in equipment </span>such
      as electrical devices, ACs, chairs, and tables. Currently, reporting these issues involves a
      convoluted process of relaying information through multiple people, leading to delays and
        inefficiencies. <span className="hello" /*style="font-weight: 500;"*/>This project will provide a centralised platform for reporting such issues</span>
       directly to the responsible administration.
      <br/>
      This project will significantly <span className="hello" /*style="font-weight: 500;"*/>improve the efficiency of equipment maintenance reporting,</span>
reducing the time taken to address issues and ensuring that faults are promptly fixed.
      </p>
</div>
<div className="second">
    <img className="img2" src="https://thebrandthink.com/wp-content/uploads/2022/09/1-1024x937.png" alt=""/>
    
</div>
</div>

<br/>
<div className="contactus" id="contactus"> 

<div className="doosra">
    <img className="img3" src="https://cdn.vectorstock.com/i/500p/41/64/technical-support-online-operator-is-talking-vector-22964164.jpg" alt=""/>
</div>

<div className="pehla">
  <h1 className="heading">Contact Us</h1> 
   <p><span className="hello" /*style="font-weight: 500;"*/>The Administration: </span><br/>
    Email: bpitindia@yahoo.com <br/>
    Phone: 011-2757 1080, 011-2757 2900 <br/>
    <br/>

    <span className="hello" /*style="font-weight: 500;"*/>The Team:</span> <br/>
    Prabal Aggarwal (Team Lead, Frontend Dev) <br/>
    Saksham Bhardwaj (Frontend Dev) <br/>
    Aryan Pillai (Backend Dev) <br/>
    Naman Gupta (Backend Dev) <br/>

     </p>
</div>


</div>
<br/>
<br/>
<div  className="vis" id="vision">
<h1>Vision & Mission</h1>
<p>
  Vision To establish a leading Global center of excellence in multidisciplinary education, training and research in the area of Engineering, Technology and Management. To produce technologically competent, morally & emotionally strong and ethically sound professionals who excel in their chosen field, practice commitment to their profession and dedicate themselves to the service of mankind.</p>
</div>


<br/>
<br/>
<br/>
<br/>
<br/>
<Footer/>

        </div>
    )
}