export default function Navbar(){
    return(
       <>
       <header  className="header">
    <nav>
      <div  className="left">
        <a href="https://bpitindia.com/" target="_blank"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s" alt="" /></a>  
      </div>
      <div  className="right">
        <ul  className="upper">
            <li  className="upperlist"><a  className="navigation" href="#">Home</a></li>
            <li  className="upperlist"><a  className="navigation" href="#aboutus">About Us</a></li>
            <li  className="upperlist"><a  className="navigation" href="#contactus">Contact Us</a></li>
            <li  className="upperlist"><a  className="navigation" href="#vision">Vision Mission</a></li>
            

          </ul>
       </div>
       <a href='#signin'><button class="button-28" role="button">Sign In</button></a>
    </nav>

</header>
</>
    )
}