import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Footer from '../components/footer'
export default function Home(){
    return(
        <div>
      <Helmet><script src="script.js"/></Helmet>

<header className="header">
<nav>
  <div className="left">
    <a href="https://bpitindia.com/" target="_blank"><img src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png" alt="" /></a>  
  </div>
  <div className="right">
    <ul className="upper">
    <Link to="/home"><li className="upperlist">Home</li></Link>
        <li className="upperlist"><a className="navigation" href="#aboutus">About Us</a></li>
        <li className="upperlist"><a className="navigation" href="#contactus">Contact Us</a></li>
       
      </ul>
  </div>
</nav>
</header>

<section className="form">
<div className="leftside">
 <h1 className="firstline">Empowering <span className="head">Academic Excellence</span>  </h1>
 <h1 className="secondline">Through Superior <span className="head"> Asset</span> Control.</h1>
 <h1 className="third"> <span className="hello">Sign In </span>for Enhanced Campus Efficiency</h1>
 <a href="#signin" className="a" /*style="color: white;"*/><button className="butt">Sign In</button></a>
</div>
<div className="rightside">
<img id="image" src="https://static.vecteezy.com/system/resources/previews/005/051/315/non_2x/marketing-team-working-on-sales-report-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt=""/>
</div>
</section>
<br/><br/>
<section className="form1" id="signin">
<form className="signin">

<label for="email" className="email">Email:</label><br/>
<input type="text" id="email" name="email" required/><br/>
<br/>
<label for="password" className="pass">Password:</label><br/>
<input type="password" id="password" name="password" required /><br/>
<br/>
<a className="passchange" href="changepass.html">Change Password</a><br/>
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
    <img className="img2" src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20164.jpg?w=740&t=st=1720212766~exp=1720213366~hmac=fc70533ec48d8f851e57f9440c99a2591183c87d8f72f4b000fa37313dafef7c" alt=""/>
    
</div>
</div>

<br/><br/><br/>
<div className="contactus" id="contactus"> 

<div className="doosra">
    <img className="img3" src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483599-2912016.png" alt=""/>
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
<br/>
<br/>
<br/>
<Footer/>

        </div>
    )
}