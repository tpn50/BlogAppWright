import React, { useContext } from "react";
import { BlogContext } from "./BlogContext";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const { blogPosts } = useContext(BlogContext);

  if (blogPosts.length === 0) {
    return (
      <div className="home-page">
        <h1>No blog posts available.</h1>
        <Link to="/createpost">
          <button>Add New Blog</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="home-page">
      <div>
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>
      <Link to="/createpost">
        <button>Add New Blog</button>
      </Link>
    </div>
  );
}

export default HomePage;
