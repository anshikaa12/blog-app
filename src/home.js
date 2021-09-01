import { useState, useEffect } from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending } = useFetch("http://localhost:8000/blogs")
    return (
        <div className="homepage">
            {isPending && <div>is Loading...</div>}
            {blogs && <BlogList blog={blogs} />}
        </div>

    );
}

export default Home;

