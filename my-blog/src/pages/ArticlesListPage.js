import {Link} from "react-router-dom"
import {React, useState, useEffect, useContext} from "react"
import NotFoundPage from '../pages/NotFoundPage';
import axios from 'axios';
import Loading from '../pages/Loading'
import { ArticlesContext } from "../hooks/useContext";


const ArticlesListPage = () => {
    const {articles, setArticles} = useContext(ArticlesContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/articles/`);
                setArticles(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (articles === undefined) {
        return <NotFoundPage />
    }
    if (loading) {
        return <Loading />;
    }
  return (
    <>
    <h1> Articles </h1>
    {articles.map((article) => {
        return (
            <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>)
    })}
    <Link to={{pathname: "/addarticle"}}> Add Article Form </Link>
    </>
  );
};

export default ArticlesListPage;