import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'


export default function Dashboard(){
 
  function ButtonLink({to, children}){

return <Link to={to}><button>{children}</button></Link>
  }
  const [products, setProducts] = useState([])
  const [history, setHistory] = useState([])
  

    const handleClick = async ()=> {
      const res = await axios.get('http://localhost:9010/issue/')
      console.log(res.data);
      setProducts(res.data)
    } 
    const [enrollmentno, setenrollmentno] = useState([])
    
    
            const handleRefresh = async ()=>{
              let res = await axios.get(`http://localhost:9010/issues/${enrollmentno}`)
              if(res.status===200){
                setProducts(res.data)
              }
              else{
                setProducts([])
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

      <br/><br/>
      <br/><br/>

      <div className="main">

        <div className="left">
          <h1 id="title">
            Got something to <span className="hello">report</span>?
          </h1>
        <br/>
          <h2 id="subtitle">
            Fill a <span className="hello">quick form </span>to get it reported to <br/>
            the authorities <span className="hello">in a snap!</span>
          </h2>

          <br/>

          <ButtonLink to="/form">
Report here
          </ButtonLink>
        </div>

        <div className="right">

        </div>

      </div>
      <br/>
      <label>Enter enrolment Number </label>
      <input type="text" value={enrollmentno} onChange={(e) => {setenrollmentno(e.target.value)}}/>
      <button onClick={handleRefresh} >Submit</button>
      <table>
      {history?.map((histObj, index) => {
          
          return (
           
          <tr>
              <td style={{ fontSize: 20, color: 'black' }}>{histObj.floorno}</td>
              <td style={{ fontSize: 20, color: 'black' }}>{histObj.roomno}</td>
              <td style={{ fontSize: 20, color: 'black' }}>{histObj.equipmentid}</td>
              <td style={{ fontSize: 20, color: 'black' }}>{histObj.status}</td>
            </tr>
            
          );
        })}
        </table>
      <h1 className="p">Your reports:</h1>
      
      <table>
               <tr>
            <th>Floor Number</th>
            <th>Room Number</th>
            <th>Equipment ID</th>
            <th>Status</th>
          </tr>
        {products?.map((prodObj, index) => {
          
          return (
           
          <tr>
              <td style={{ fontSize: 20, color: 'black' }}>{prodObj.floorno}</td>
              <td style={{ fontSize: 20, color: 'black' }}>{prodObj.roomno}</td>
              <td style={{ fontSize: 20, color: 'black' }}>{prodObj.equipmentid}</td>
              <td style={{ fontSize: 20, color: 'black' }}>{prodObj.status}</td>
            </tr>
            
          );
        })}
   </table> 
      <button className="btnn" onClick={handleClick}>Refresh</button>
<br/><br/><br/><br/>
      
       <Footer/>
  </div>
    )
}