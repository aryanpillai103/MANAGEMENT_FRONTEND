
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import Footer from "../components/footer";
// import { useEffect, useState } from "react";
// import axios from "axios";


// export default function Dashboard() {
//   function ButtonLink({ to, children }) {
//     return (
//       <Link to={to}>
//         <button>{children}</button>
//       </Link>
//     );
//   }

//   const [products, setProducts] = useState([]);
//   const [history, setHistory] = useState([]);
//   const [enrollmentno, setEnrollmentno] = useState("");

//   const handleClick = async () => {
//     try {
//       const res = await axios.get("http://localhost:9010/issue/");
//       setProducts(res.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleRefresh = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:9010/issues/${enrollmentno}`
//       );
//       if (res.data) {
//         // console.log(res.data);
//         let arr = [];
//         arr.push(res.data);
//         console.log(arr)
//         setProducts(...products,arr);
        
//       } else {
//         setProducts([]);
//       }
//     } catch (error) {
//       console.error("Error fetching history:", error);
//     }
//   };

//   return (
//     <div>
//       <header className="header">
//         <nav>
//           <div className="left">
//             <a href="https://bpitindia.com/" target="_blank">
//               <img
//                 src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png"
//                 alt=""
//               />
//             </a>
//           </div>
//           <div className="right">
//             <ul className="homelink">
//               <Link to="/dashboard">
//                 <li className="homelinklist">Home</li>
//               </Link>
//             </ul>
//           </div>
//         </nav>
//       </header>

//       <br />
//       <br />
//       <br />
//       <br />

//       <div className="main">
//         <div className="left">
//           <h1 id="title">
//             Got something to <span className="hello">report</span>?
//           </h1>
//           <br />
//           <h2 id="subtitle">
//             Fill a <span className="hello">quick form </span>to get it reported
//             to <br />
//             the authorities <span className="hello">in a snap!</span>
//           </h2>

//           <br />

//           <ButtonLink to="/form">Report here</ButtonLink>
//         </div>

//         <div className="right"></div>
//       </div>
//       <br />

//       <label>Enter Enrollment Number </label>
//       <input
//         type="text"
//         value={enrollmentno}
//         onChange={(e) => {
//           setEnrollmentno(e.target.value);
//         }}
//       />
//       <button onClick={handleRefresh}>Submit</button>

//       <h1 className="p">Your reports:</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Floor Number</th>
//             <th>Room Number</th>
//             <th>Equipment ID</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.length > 0 &&
//             products.map((prodObj, index) => (
//               <tr key={index}>
//                 <td style={{ fontSize: 20, color: "black" }}>
//                   {prodObj.floorno}
//                 </td>
//                 <td style={{ fontSize: 20, color: "black" }}>
//                   {prodObj.roomno}
//                 </td>
//                 <td style={{ fontSize: 20, color: "black" }}>
//                   {prodObj.equipmentid}
//                 </td>
//                 <td style={{ fontSize: 20, color: "black" }}>
//                   {prodObj.status}
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>

//       <button className="btnn" onClick={handleClick}>
//         Refresh
//       </button>

//       <br />
//       <br />
//       <br />
//       <br />
//       <Footer />
//     </div>
//   );
// }

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

  const handleClick = async () => {
    try {
      const res = await axios.get("http://localhost:9010/issue/");
      // Reverse the fetched records
      const reversedProducts = res.data.reverse();
      setProducts(reversedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleRefresh = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9010/issues/${enrollmentno}`
      );
      if (res.data) {
        // Create an array with the fetched data and reverse it
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
      <header className="header">
        <nav>
          <div className="left">
            <a href="https://bpitindia.com/" target="_blank" rel="noopener noreferrer">
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

      <label>Enter Enrollment Number </label>
      <input
        type="text"
        value={enrollmentno}
        onChange={(e) => {
          setEnrollmentno(e.target.value);
        }}
      />
      <button onClick={handleRefresh}>Submit</button>

      <h1 className="p">Your reports:</h1>
      <table>
        <thead>
          <tr>
            <th>Floor Number</th>
            <th>Room Number</th>
            <th>Equipment ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((prodObj, index) => (
              <tr key={index}>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.floorno}
                </td>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.roomno}
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

      <button className="btnn" onClick={handleClick}>
        Refresh
      </button>

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}