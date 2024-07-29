import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid } from "uuid";

toast.configure();

// function getUID(){
//   return Date.now().toString(36);
// }

export default function Form() {
  // const day = uuid();
  const [day, setDay] = useState(uuid().slice(0, 8));
  const notify = () => {
    toast("Form Submitted!!");
  };
  const [ComplaintID, setComplaintID] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Name, setName] = useState("");
  const [EnrollmentNo, setEnrollmentNo] = useState("");
  const [Location, setLocation] = useState("");
  const [Area, setArea] = useState("");
  const [Floorno, setFloorNo] = useState("");
  const [Roomno, setRoomNo] = useState("");
  const [Itemtype, setItemType] = useState("");
  const [Equipmentid, setEquipmentId] = useState("");
  const [Issuedescription, setIssueDescription] = useState("");
  const [Status, setStatus] = useState("Pending");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const issue = {
      ComplaintID,
      Designation,
      Name,
      EnrollmentNo,
      Location,
      Area,
      Floorno,
      Roomno,
      Itemtype,
      Equipmentid,
      Issuedescription,
      Status,
    };

    try {
      const res = await fetch("http://localhost:9010/issue/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(issue),
      }).then(() => {
        console.log("form submitted!!");
        navigate("/dashboard");
      });
    } catch (error) {
      window.alert("Registration failed");
      console.log(error);
    }
  };
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
              <Link to="/dashboard">
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
      <h1>This is Your Unique Complaint id: {day}</h1>
      <h2>Paste it here: </h2>
      <input
        type="text"
        id="complaintid"
        onChange={(e) => setComplaintID(e.target.value)}
      />
      <form onSubmit={handleSubmit} className="form1">
        <h1 id="part">Personal Details:</h1>
        <br />
        <br />

        <label htmlFor="roles">Please select your designation:</label>
        <select
          name="role"
          id="role"
          onChange={(e) => setDesignation(e.target.value)}
        >
          <option value="select" hidden>
            Select your option
          </option>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
        </select>

        <br />
        <br />
        <br />
        <div className="per">
          <label htmlFor="name">Full Name:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <br />
          <br />

          <label htmlFor="enrolment">Enrolment No./Teacher ID:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setEnrollmentNo(e.target.value)}
            required
          />
          <br />
          <br />
          <br />
        </div>
        <br />
        <h1 id="part">Issue Details:</h1>
        <br />
        <br />

        <label htmlFor="item">Please select the location:</label>
        <br />
        <br />
        <select
          name="loc"
          id="dropdown1"
          onChange={(e) => setLocation(e.target.value)}
          onClick={() => {
            var d1 = document.getElementById("dropdown1");
            var d2 = document.getElementById("Old Building");
            var d3 = document.getElementById("New Building");
            var d4 = document.getElementById("Ground");
            var d5 = document.getElementById("Canteen");
            var d6 = document.getElementById("Parking");

            var selected = d1.value;

            if (selected === "Old Building") {
              d3.disabled = true;
              d4.disabled = true;
              d2.disabled = false;
            }

            if (selected === "New Building") {
              d2.disabled = true;
              d4.disabled = true;
              d3.disabled = false;
            }

            if (selected === "Ground") {
              d2.disabled = true;
              d3.disabled = true;
              d4.disabled = false;
            } else {
              d4.disabled = false;
            }

            if (selected === "Canteen") {
              d2.disabled = true;
              d3.disabled = true;
              d4.disabled = true;
            }

            if (selected === "Parking") {
              d2.disabled = true;
              d3.disabled = true;
              d4.disabled = true;
            }
            if (selected === "New Building" || selected === "Old Building") {
              d4.disabled = true;
            }
          }}
        >
          <option value="select" hidden>
            Select your option
          </option>
          <option value="Old Building">Old Building</option>
          <option value="New Building">New Building</option>
          <option value="Canteen">Canteen</option>
          <option value="Ground">Ground</option>
          <option value="Parking">Parking</option>
        </select>

        <br />
        <br />
        <br />
        <br />

        <div className="line">
          <label htmlFor="Old Building">Please select the Room:</label>
          <br />
          <br />
          <select name="loc" id="Old Building" onChange={(e) => setArea(e.target.value)}>
            <option value="select" hidden>
              Old Building
            </option>
            <option value="Library">Library</option>
            <option value="Classes">Classes</option>
            <option value="Labs">Labs</option>
            <option value="Central Lawn">Central Lawn</option>
            <option value="Reception">Reception</option>
            <option value="Seminar Hall">Seminar Hall</option>
            <option value="Conference Hall">Conference Halls</option>
            <option value="Washrooms">Washrooms</option>
            <option value="Offices">Offices</option>
            <option value="Lifts">Lifts</option>
          </select>
          <br />
          <br />
          <br />
          <br />

          <label htmlFor="New Building"></label>
          <br />
          <br />
          <select name="loc" id="New Building" onChange={(e) => setArea(e.target.value)}>
            <option value="select" hidden>
              New Building
            </option>
            <option value="Offices">Offices</option>
            <option value="Classes">Classes</option>
            <option value="Common Room">Common Room</option>
            <option value="Washrooms">Washrooms</option>
          </select>
          <br />
          <br />
          <br />
          <br />

          <label htmlFor="Ground"></label>
          <br />
          <br />
          <select
            name="loc"
            id="Ground"
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="select" hidden>
              Ground
            </option>
            <option value="Basketball Court">Basketball Court</option>
            <option value="Football Ground">Football Ground</option>
            <option value="Volleyball Court">Volleyball Court</option>
          </select>
        </div>

        <br />
        <label htmlFor="floor">Floor No:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setFloorNo(e.target.value)}
          required
        />
        <br />
        <br />
        <br />

        <label htmlFor="room">Room No:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setRoomNo(e.target.value)}
          required
        />
        <br />
        <br />
        <br />

        <label htmlFor="item">
          Please select the items you wish to report:
        </label>
        <br />
        <br />
        <select
          name="equipment"
          id="we"
          onChange={(e) => setItemType(e.target.value)}
        >
          <option value="select" hidden>
            Select your option
          </option>
          <option value="AC">AC</option>
          <option value="PC">PC</option>
          <option value="Chair">Chair</option>
          <option value="Table">Table</option>
          <option value="Fans">Fans</option>
          <option value="Lights">Lights</option>
          <option value="Projector">Projector</option>
          <option value="Projector Screen">Projector Screen</option>
          <option value="Switch Boards">Switch Boards</option>
          <option value="Notice Board">Notice Board</option>
          <option value="WIFI">WIFI</option>
          <option value="White Board">White Board</option>
          <option value="Wall Clock">Wall Clock</option>
          <option value="Dustbins">Dustbins</option>
          <option value="Water Cooler">Water Cooler</option>
          <option value="Lab Apparatus">Lab Apparatus</option>
          <option value="Others">Others</option>
        </select>

        <br />
        <br />
        <br />

        <label htmlFor="id">Equipment ID (if any):</label>
        <br />
        <input type="text" onChange={(e) => setEquipmentId(e.target.value)} />
        <br />
        <br />
        <br />

        <label htmlFor="desc">Please provide a description of the issue:</label>
        <br />
        <textarea
          name="desc"
          rows="8"
          cols="30"
          required
          onChange={(e) => setIssueDescription(e.target.value)}
        ></textarea>
        <br />
        <br />
        <br />

        {/* <label for="photo">Upload a photo of the faulty equipment:</label><br />
                <input className='in'  type="file" name="photo" /><br /><br /><br /><br />  */}

        <input type="submit" value="Submit" onClick={notify} className="btn" />
        <input type="reset" value="Reset" className="btn" />
      </form>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
