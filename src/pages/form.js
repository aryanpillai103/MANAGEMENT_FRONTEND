import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid } from "uuid";

toast.configure();

// function getUID(){
//   return Date.now().toString(36);
// }

export default function Form(){
  // const day = uuid();
  const [day,setDay] = useState(uuid().slice(0,8))
  const notify = () => {
   
    toast("Form Submitted!!");
};
const [ComplaintID,setComplaintID] = useState('')
  const [Designation,setDesignation] = useState('')
  const [Name,setName] = useState('')
  const [EnrollmentNo,setEnrollmentNo] = useState('')
  const [Location,setLocation] = useState('')
  const [Area,setArea] = useState('')
  const [Floorno,setFloorNo] = useState('')
  const [Roomno,setRoomNo] = useState('')
  const [Itemtype,setItemType] = useState('')
  const [Equipmentid,setEquipmentId] = useState('')
  const [Issuedescription,setIssueDescription] = useState('')
  const [Status,setStatus] = useState("Pending")
  const navigate = useNavigate();




  const handleSubmit = async (e) => {

    e.preventDefault();

    const issue = {
      ComplaintID,
      Designation ,
      Name,
      EnrollmentNo,
      Location,
      Area,
      Floorno,
      Roomno,
      Itemtype,
      Equipmentid,
      Issuedescription,
      Status
  }
   
try {
   const res = await fetch('http://localhost:9010/issue/',{
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(issue)}
    ).then(() => {
      console.log("form submitted!!")
      navigate("/dashboard");
    })
} catch (error) {
  window.alert('Registration failed');
  console.log(error);
}
}
    return(
        <div>

        
            <header className="header">
                <nav>
                    <div className="left">
                        <a href="https://bpitindia.com/" target="_blank"> <img src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png" alt="" /></a>
                    </div>
                    <div className="right">
                        <ul className="homelink">
                        <Link to="/dashboard"><li className="homelinklist">Home</li></Link>
                        </ul>
                    </div>
                </nav>
            </header>

            <br /><br />
            <br /><br />
            <h1>This is Your Unique Complaint id: {day}</h1>
            <h2>Paste it here: </h2>
              <input type="text" id="complaintid" onChange={(e)=>setComplaintID(e.target.value)}/>
            <form onSubmit={handleSubmit} className="form1">
              
              
                <h1 id="part">Personal Details:</h1><br /><br />

                <label htmlFor="roles">Please select your designation:</label>
                <select name="role" id="role" onChange={(e)=>setDesignation(e.target.value)}>
                    <option value="select" hidden>Select your option</option>
                    <option value="student" >Student</option>
                    <option value="faculty">Faculty</option>
                </select>

                <br /><br /><br />
                <div className="per">
                    <label htmlFor="name">Full Name:</label><br />
                    <input type="text" onChange={(e)=>setName(e.target.value)} required /><br /><br /><br />

                    <label htmlFor="enrolment">Enrolment No./Teacher ID:</label><br />
                    <input type="text" onChange={(e)=>setEnrollmentNo(e.target.value)} required /><br /><br /><br />
                </div><br />
                <h1 id="part">Issue Details:</h1><br /><br />


                <label htmlFor="item">Please select the location:</label><br /><br />
                <select name="loc" id="dropdown1" onChange={(e)=>setLocation(e.target.value)} 
                onClick={()=>{var d1=document.getElementById('dropdown1');
    var d2=document.getElementById('ob');
    var d3=document.getElementById('nb');
    var d4=document.getElementById('ground');
    var d5=document.getElementById('canteen');
    var d6=document.getElementById('parking');


    var selected = d1.value;
   
    if(selected==='ob'){
      
      d3.disabled=true;
      d4.disabled=true;
      d2.disabled=false;

    }
    
        if(selected==='nb'){
      d2.disabled=true;
      d4.disabled=true;
      d3.disabled=false;
    }
    
  
    if(selected ==='ground'){
      d2.disabled=true;
      d3.disabled=true;
      d4.disabled=false;
    }else{
      d4.disabled=false;
    }
    
    if(selected==='canteen'){
      d2.disabled=true;
      d3.disabled=true;
      d4.disabled=true;

    }
    
    if(selected==='parking'){
      d2.disabled=true;
      d3.disabled=true;
      d4.disabled=true;
    }
    if(selected==='nb' || selected === 'ob'){
      d4.disabled=true;
    }
  }}>
                    <option value="select" hidden>Select your option</option>
                    <option value="ob">Old Building</option>
                    <option value="nb">New Building</option>
                    <option value="canteen">Canteen</option>
                    <option value="ground">Ground</option>
                    <option value="parking">Parking</option>

                </select>

                <br /><br /><br /><br />

                <div className="line">

                    <label htmlFor="ob">Please select the Room:</label><br /><br />
                    <select name="loc" id="ob" onChange={(e)=>setArea(e.target.value)}>
                        <option value="select" hidden>Old Building</option>
                        <option value="lib">Library</option>
                        <option value="classes">Classes</option>
                        <option value="labs">Labs</option>
                        <option value="clawn">Central Lawn</option>
                        <option value="rec">Reception</option>
                        <option value="shall">Seminar Hall</option>
                        <option value="chall">Conference Halls</option>
                        <option value="wash">Washrooms</option>
                        <option value="office">Offices</option>
                        <option value="office">Lifts</option>


                    </select>
                    <br /><br /><br /><br />

                    <label htmlFor="nb"></label><br /><br />
                    <select name="loc" id="nb" onChange={(e)=>setArea(e.target.value)}>
                        <option value="select" hidden>New Building</option>
                        <option value="offices">Offices</option>
                        <option value="classNamees">classNamees</option>
                        <option value="common">Common Room</option>
                        <option value="wash">Washrooms</option>
                    </select>
                    <br /><br /><br /><br />

                    <label htmlFor="ground"></label><br /><br />
                    <select name="loc" id="ground" onChange={(e)=>setArea(e.target.value)}>
                        <option value="select" hidden>Ground</option>
                        <option value="basket">Basketball Court</option>
                        <option value="foot">Football Ground</option>
                        <option value="volley">Volleyball Court</option>
                    </select>

                </div>

                <br />
                <label htmlFor="floor">Floor No:</label><br />
                <input type="text" onChange={(e)=>setFloorNo(e.target.value)} required /><br /><br /><br />

                <label htmlFor="room">Room No:</label><br />
                <input type="text" onChange={(e)=>setRoomNo(e.target.value)} required /><br /><br /><br />

                <label htmlFor="item">Please select the items you wish to report:</label><br /><br />
                <select name="equipment" id="we" onChange={(e)=>setItemType(e.target.value)}>
                    <option value="select" hidden>Select your option</option>
                    <option value="ac">AC</option>
                    <option value="pc">PC</option>
                    <option value="chair">Chair</option>
                    <option value="table">Table</option>
                    <option value="fan">Fans</option>
                    <option value="fan">Lights</option>
                    <option value="fan">Projector</option>
                    <option value="fan">Projector Screen</option>
                    <option value="fan">Switch Boards</option>
                    <option value="fan">Notice Board</option>
                    <option value="fan">WIFI</option>
                    <option value="fan">White Board</option>
                    <option value="fan">Wall Clock</option>
                    <option value="fan">Dustbins</option>
                    <option value="fan">Water Cooler</option>
                    <option value="fan">Lab Apparatus</option>
                    <option value="fan">Others</option>
                    

                </select>

                <br /><br /><br />

                <label htmlFor="id" >Equipment ID (if any):</label><br />
                <input type="text" onChange={(e)=>setEquipmentId(e.target.value)}/><br /><br /><br />

                <label htmlFor="desc">Please provide a description of the issue:</label><br />
                <textarea name="desc" rows="8" cols="30" required onChange={(e)=>setIssueDescription(e.target.value)}></textarea><br /><br /><br />

                {/* <label for="photo">Upload a photo of the faulty equipment:</label><br />
                <input className='in'  type="file" name="photo" /><br /><br /><br /><br />  */}

                <input type="submit" value="Submit" onClick={notify} className="btn"/>
                <input type="reset" value="Reset" className="btn" />
                </form>

            <br /><br /><br /><br />

  </div>
    )
}