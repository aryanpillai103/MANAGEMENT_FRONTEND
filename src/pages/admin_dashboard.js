import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Admin_dashboard() {
  const [products, setProducts] = useState([]);
  const [complaintId, setComplaintId] = useState([]);
  const navigate = useNavigate();

  const notify = () => {
    toast("Status Updated");
  };

  const handleClick = async () => {
    const res = await axios.get("http://localhost:9010/issue/");
    console.log(res.data);
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
    .then(response => {console.log("status updated")});
    navigate("/admin_dashboard");
  
  }
  
  return (
    <div>
      <header  className="header">
    <nav>
      <div  className="left">
        <a href="https://bpitindia.com/" target="_blank"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s" alt="" /></a>  
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
        <br/>
        <br/>
        <table>
          <thead>
            <tr>
            <th>Complaint ID</th>
            <th>Designation</th>
            <th>Name</th>
            <th>Enrolment No./Teacher ID</th>
            <th>Location</th>
            <th>Area</th>
            <th>Floor Number</th>
            <th>Room Numebr</th>
            <th>Item Type</th>
            <th>Equipment ID</th>
            <th>Issue Description</th>
            <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {products.map((prodObj, index) => (
            <tr key={index}>
    
                <td>
                  {prodObj.complaintid}
                </td>
                <td>
                  {prodObj.designation}
                </td>
                <td>
                  {prodObj.name}
                </td>
                <td>
                  {prodObj.enrollmentno}
                </td>
                <td>
                  {prodObj.location}
                </td>
                <td>
                  {prodObj.area}
                </td>
                <td>
                  {prodObj.floorno}
                </td>
                <td>
                  {prodObj.roomno}
                </td>
                <td>
                  {prodObj.itemtype}
                </td>
                <td>
                  {prodObj.equipmentid}
                </td>
                <td>
                  {prodObj.issuedescription}
                </td>
                <td>
                  {prodObj.status}
                </td>
                </tr>
          ))}
          </tbody>
        </table>
       <br/>
       <br/>

        <h2 className="h2">Enter Complaint ID:</h2>
        <br/>
        
       <form onSubmit={handleUpdate}>
        <input value={complaintId} onChange={(e)=>{
          setComplaintId(e.target.value)
        }}/>
        <button type="submit" onClick={notify}>Mark As 'Complete'</button>
      </form>
      </div>
      <Footer />
    </div>
  );
}
