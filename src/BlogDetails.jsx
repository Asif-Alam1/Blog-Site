import { useParams } from "react-router-dom";
import useFetch from "./useFetch";



export default function BlogDetails  () {
    const { id } = useParams(); 
const {Blog}=useFetch('http://localhost:8000/blogs');
    return (
    <div className="BlogDetails">
        {Blog &&(
        < div className = "BlogDetails" >
        <h1>{Blog[id].Title}</h1>
        <h3>written by {Blog[id].author}</h3>
        <p>{Blog[id].body}</p>
            </div>
        )
            }
    </div>
    )
}