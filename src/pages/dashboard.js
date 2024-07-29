
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Dashboard() {
  function ButtonLink({ to, children }) {
    return (
      <Link to={to}>
        <button>{children}</button>
      </Link>
    );
  }

  const [products, setProducts] = useState([]);
  const [history, setHistory] = useState([]);
  const [enrollmentno, setEnrollmentno] = useState("");

  // const handleClick = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:9010/issue/");
  //     const reversedProducts = res.data.reverse();
  //     setProducts(reversedProducts);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  const handleRefresh = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9010/issues/${enrollmentno}`
      );
      if (res.data) {
        const reversedProductsEnro = res.data.reverse();
        setProducts(reversedProductsEnro);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  return (
    <div>

<header  className="header">
    <nav>
      <div  className="left">
        <a href="https://bpitindia.com/" target="_blank"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s" alt="" /></a>  
      </div>
      <div  className="right">
        <ul  className="upper">
            {/* <li  className="upperlist"><a  className="navigation" href="#">Home</a></li> */}
            

          </ul>
       </div>
       {/* <a href='#signin'><button class="button-28" role="button">Sign In</button></a> */}
    </nav>

</header>


      

      <br />
      <br />
      

      <div className="main">
        <div className="left">
          <h1 id="title">
            Got something to <span className="hello">report</span>?
          </h1>
          <br />
          <h2 id="subtitle">
            Fill a <span className="hello">quick form </span>to get it reported
            to <br />
            the authorities <span className="hello">in a snap!</span>
          </h2>

          <br />

          <ButtonLink to="/form">Report here</ButtonLink>
        </div>

        <div className="right"></div>
      </div>
      <br />
      <br />
      <br />


      <label className="p">Enter Enrolment Number to view your reports:  </label>
      <br/>
      <br/>

      <input className="p"
        type="text"
        value={enrollmentno}
        onChange={(e) => {
          setEnrollmentno(e.target.value);
        }}
      />
      <button onClick={handleRefresh}>Submit</button>

      <h1 className="p">Your reports:</h1>

      <div className="table">
      <table className="p">
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>Room Number</th>
            <th>Equipment Type</th>
            <th>Equipment ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((prodObj, index) => (
              <tr key={index}>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.complaintid}
                </td>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.roomno}
                </td>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.itemtype}
                </td>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.equipmentid}
                </td>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>

      {/* <button className="btnn" onClick={handleClick}>
        Refresh
      </button> */}

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}