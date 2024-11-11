import {useState, React, useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArticlesContext } from "../hooks/useContext";

const AddArticle = () => {
  const { setArticles, articles} = useContext(ArticlesContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  const handleArticleChange = (e) => {
    setArticle(e.target.value);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`/api/articles/`, {name: title.replace(/\s+/g, '-'), title: title, content: article});
        console.log('Data successfully sent:', response.data);
        const newArticle = response.data;
        if (setArticles) {
          setArticles([...articles, newArticle]);
        } else {
          console.warn("setArticles function is not available.");
        }
        navigate("/");
    } catch (error) {
        console.error('Error sending data:', error);
        console.log(articles);
    }

    setTitle("");
    setArticle("");
};


  return (
    <>
    <h1> Add Article Form </h1>
      <form onSubmit={handleSubmit}>
      <input type="text" 
        name="Title" 
        placeholder="Title" 
        value={title}
        onChange={handleTitleChange}
        required/>

        <textarea type="text" 
        name="Article" 
        placeholder="Article" 
        style={{ width: '300px', height: '100px' }} 
        value={article}
        onChange={handleArticleChange}
        required/>

        <button type="submit"> Publish </button>
      </form>
      </>
      
    )
}

export default AddArticle;