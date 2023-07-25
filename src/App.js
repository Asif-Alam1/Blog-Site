
import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from './useFetch';
import BlogDetails from './BlogDetails';
import NewBlog from './NewBlog';


export default function App() {
  let time = new Date().toLocaleTimeString();
  const [name, setName] = useState("Potato");

  let handleClick = () => {
   
    name === "Potato" ? setName("Asif") : setName("Potato");

  }
  
  const { Blog, setBlog } = useFetch(' http://localhost:8000/blogs');
  
  return (
    <Router>
    <div className="App">
    <Navbar />
      <h1 className="Title">Hello,{name}</h1>
        <button onClick={handleClick} className='btn'>Click me</button>
        <div className="test">
        <Switch>
          <Route path="/" exact >
            <Home />
            </Route>
            
            <Route path="/about" exact>
              <h2>Who are we ?</h2>
              <p>We are the warriors of the night,the vigilanties of the days,the guys who make you feel safe.</p>
              <p>We are batman and robin </p>
              <h3>And we are the best</h3>
              
            </Route>

            <Route path="/create" exact>
             <NewBlog />
            </Route>

            <Route path="/blogs/:id" exact>
              <BlogDetails />
              </Route>
      </Switch>
        </div>
    <h2>Time now is:{time}</h2>
      
      </div>
      </Router>
  );
}


