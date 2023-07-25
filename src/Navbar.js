import { Link } from "react-router-dom";

export default function Navbar() {
 
  return (
      <nav className="navbar">   
      <Link className="Link" to="/">  
              <h1>My Blog</h1>
            </Link>
          <div className="links">
              <Link className="Link" to="/about">About</Link>
              <Link className="Link" to="/create" >New Blog</Link>
          </div>
      </nav>
      
  );
}