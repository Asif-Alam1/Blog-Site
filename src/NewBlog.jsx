import{useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function NewBlog() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit= (e) =>   {
        e.preventDefault();
        const Blog = { title, author, body };
        setIsPending(!isPending);    
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Blog)
        }).then(() => {
            setIsPending(!isPending);
            console.log('New Blog added');
            history.push('/');
        })
        }


    return (
        <div className="newBlog">
            {!isPending&& <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Blog Title" name="text" className="input" required value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <br />
                <input type="text" placeholder="Author" name="text" className="input" required value={author}
                    onChange={(e) => setAuthor(e.target.value)} />
        
                <br />
              
                <textarea placeholder="Blog Body" className="input-style" type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                <br />
                <button className="btn" type='submit'>Add Blog</button>
            </form>}

            {isPending &&  <div class="loader">
  <div class="loader_cube loader_cube--color"></div>
   <div class="loader_cube loader_cube--glowing"></div>
</div>}

        </div>
    )

}