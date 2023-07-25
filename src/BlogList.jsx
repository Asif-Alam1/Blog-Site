import { Link } from "react-router-dom";

export default function BlogList({Blog,Title,handleDelete,addBlog}) {
    return (
        <div className="BlogListPreview">
          
            <h1>{Title}</h1>
            {Blog.map((blog) => (
                    <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <div className="Preview" key={blog.id}>
                    <h1>{blog.Title}</h1>
                    <h3>written by {blog.author}</h3>
                    <button className="btn" onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>    
                </Link>    
        ))}
    </div>


)    

}