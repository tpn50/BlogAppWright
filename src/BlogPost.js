import React, { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { BlogContext } from "./BlogContext";
import { Navigate, useNavigate } from "react-router-dom";
import "./BlogPostCreationPage.css";

function BlogPostCreationPage() {
  const { addBlogPost } = useContext(BlogContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (title.trim() === "") {
      alert("Please enter a title.");
      isValid = false;
    }
    if (description.trim() === "") {
      alert("Please enter a description.");
      isValid = false;
    }

    if (content.trim() === "") {
      alert("Please enter the content.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      addBlogPost({ title, description, content });
      alert("Form is valid. You can proceed to submit to an API.");
      navigate("/");
    }
  };

  return (
    <div className="blog-post-creation">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </label>
        <br></br>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </label>
        <br></br>
        <label>
          Content:
          <ReactQuill value={content} onChange={setContent} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default BlogPostCreationPage;
