import { Link } from "react-router-dom";


const BlogList = ({ blog, deleteHandle }) => {


    return (
        <div className="bloglist">
            {blog.map((blog) => (
                <div className="blogCard" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by ~ {blog.author}</p>
                    </Link>
                    {/* <button onClick={() => deleteHandle(blog.id)}>Delete BLog</button> */}

                </div>
            ))
            }
        </div>
    );
}

export default BlogList;
