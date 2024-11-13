import {useParams} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
import Loading from './Loading'
import CommentsList from '../components/CommentsList';
import useUser from "../hooks/useUser";
import AddCommentForm from '../components/AddCommentForm';
import { Link } from 'react-router-dom';
import { ArticlesContext } from "../hooks/useContext";

const ArticlePage = () => {
    const {articleId} = useParams();
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});
    const {articles} = useContext(ArticlesContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {user, isLoading} = useUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/articles/${articleId}`);
                console.log(response.data);
                setArticleInfo(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [articleId]);

    const handleClick = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        setArticleInfo((prev) => ({
            ...prev,
            upvotes: response.data
        }));
    }

    const article = articles.find((article) => article.name === articleId);
    
    if (article === undefined) {
        return <NotFoundPage />
    }
    if (loading) {
        return <Loading />;
    }

    return (<>
        <h1> {article.title} </h1>
        <div className="upvotes-section"> 
            {user ? <><button onClick={handleClick}> Upvote </button><p> This article has {articleInfo.upvotes} upvote(s). </p></> : <Link to="/login"> Sign in to upvote</Link>}
        </div>
        <p> {article.content[0]} </p>
        {user ? <><AddCommentForm articleId={articleId} onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}/>
        <CommentsList comments={articleInfo.comments} /> </> : <Link to="/login"> Sign in to comment</Link>}
        </>

    )
}

export default ArticlePage;