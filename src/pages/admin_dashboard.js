import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Admin_dashboard() {
  const [products, setProducts] = useState([]);
  const [complaintId, setComplaintId] = useState([]);

  const notify = () => {
    toast("Update Done !!");
  }

  const handleClick = async () => {
    const res = await axios.get("http://localhost:9010/issue/");
    const reversedProducts = res.data.reverse();
    setProducts(reversedProducts);
  };
  
  const update = {
    ComplaintID:"",
    Designation:"",
    Name:"",
    EnrollmentNo:"",
    Location:"",
    Area:"",
    Floorno:"",
    Roomno:"",
    Itemtype:"",
    Equipmentid:"",
    Issuedescription:"",
    Status:"Pending",
  };

  const handleUpdate = async ()=> {
    axios.put(`http://localhost:9010/issueUpdate/${complaintId}`,update)
    .then(response => {console.log("status updated")})
    .catch(error => {console.log("status not updated")})
  }
  
  return (
    <div>
      <header className="header">
        <nav>
          <div className="left">
            <a href="https://bpitindia.com/" target="_blank">
              {" "}
              <img
                src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png"
                alt=""
              />
            </a>
          </div>
          <div className="right">
            <ul className="homelink">
              <Link to="/admin_dashboard">
                <li className="homelinklist">Home</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>

      <br />
      <br />
      <br />
      <br />

      <div className="main">
        <div className="left">
          <h1 id="title">
            <span className="hello"> All reports </span>will be listed here.
          </h1>
          <br />
          <h2 id="subtitle">
            Click on any report to{" "}
            <span className="hello">view the details.</span>
          </h2>
          <br />
          <h2 id="desc">
            Click on the <span className="hello"> refresh </span>button to check
            for new reports!
          </h2>
          <br />

          <button className="btnn" onClick={handleClick}>
            Refresh
          </button>
        </div>
        <center>
          {products.map((prodObj, index) => {
            return (
              <div>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.complaintid}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.designation}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.name}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.enrollmentno}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.location}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.area}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.floorno}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.roomno}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.itemtype}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.equipmentid}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.issuedescription}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {prodObj.status}
                </p>
              </div>
            );
          })}
        </center>
        <h2>Enter Enrollment No:</h2>
       <form onSubmit={notify}>
        <input value={complaintId} onChange={(e)=>{
          setComplaintId(e.target.value)
        }}/>
        <button type="submit" 
        onClick={handleUpdate}
        >Update</button>
      </form>
      </div>
      <Footer />
    </div>
  );
}
