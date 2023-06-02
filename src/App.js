import React, { useState } from "react";
import BlogPostCreationPage from "./BlogPost";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogContext } from "./BlogContext";
import Header from "./Header";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = (post) => {
    setBlogPosts([...blogPosts, post]);
  };

  return (
    <div>
      <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/createpost" element={<BlogPostCreationPage />} />
          </Routes>
        </Router>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
