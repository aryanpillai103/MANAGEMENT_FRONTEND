import {Link} from 'react-router-dom'
import Footer from '../components/footer'
import { useState } from 'react'
import axios from 'axios'
import { useEffect , useRef} from 'react'

export default function Admin_dashboard(){
  const [products, setProducts] = useState([])

    const handleClick = async ()=> {
      const res = await axios.get('http://localhost:9010/issue/')
      console.log(res.data);
      setProducts(res.data)
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
          <Link to="/admin_dashboard"><li className="homelinklist">Home</li></Link>
          </ul>
        </div>
      </nav>
  </header>

      <br/><br/>
      <br/><br/>

      <div className="main">

        <div className="left">
          <h1 id="title">
            <span className="hello"> All reports </span>will be listed here. 
          </h1>
          <br/>
          <h2 id="subtitle">
            Click on any report to <span className="hello">view the details.</span>
          </h2>
          <br/>
          <h2 id="desc">
            Click on the <span className="hello"> refresh </span>button to check for new reports!
          </h2>      
          <br/>

          <button className="btnn" onClick={handleClick}>Refresh</button>

        </div>
        <center>
        {products.map((prodObj, index) => {
          return (
            <div>
              <p style={{ fontSize: 20, color: 'black' }}>{prodObj.floorno}</p>
            </div>
          );
        })}
      </center>
       {/* <h2>Enter Complaint ID:</h2>
       <form >
        <input/>
        <button type="submit">Submit</button>
      </form> */}
      </div> 
      <Footer/>
  </div>
    )
}