import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setPend] = useState(false);
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        setPend(true);
        const blog = { title, body, author };
        fetch('  http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)

        }).then(() => {
            console.log('added');
            setPend(false);
            history.push('/');
        })
    }
    return (<div className="create">
        <h2>Add a New Blog</h2>

        <form onSubmit={submitHandler}>
            <label>Blog Title : </label>
            <input
                type="text"
                required
                value={title}
                onChange={
                    (e) => setTitle(e.target.value)
                }
            />
            <label>Blog body : </label>
            <textarea
                required
                value={body}
                onChange={
                    (e) => setBody(e.target.value)
                }
            ></textarea>
            <label>Blog Author : </label>
            <input
                type="text"
                required
                value={author}
                onChange={
                    (e) => setAuthor(e.target.value)
                }
            />
            {!isPending && <button>add blog</button>}
            {isPending && <button disabled>adding a blog...</button>}

        </form>

    </div>);
}

export default Create;