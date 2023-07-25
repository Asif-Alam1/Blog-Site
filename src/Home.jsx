import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {

    
    const handleDelete = (id) => { 
        fetch('http://localhost:8000/blogs/' + id ,{
            method: 'DELETE'
        }
        )
    }


    const {Blog,setBlog} = useFetch(' http://localhost:8000/blogs');

    return (
        <div className="Home">
            {!Blog && (
                <div class="loader">
  <div class="loader_cube loader_cube--color"></div>
   <div class="loader_cube loader_cube--glowing"></div>
</div>
            )}
            {Blog && <BlogList Blog={Blog} Title="All Blogs" handleDelete={handleDelete} />}
            {/* {Blog && <BlogList Blog={Blog.filter((blogs) => (blogs.author === "Asif"))} Title="Asif's Blogs" handleDelete={handleDelete} />} */}

        </div>
    )

}