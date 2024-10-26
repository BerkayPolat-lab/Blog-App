import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import articles from './ArticlesContent';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
import Loading from './Loading'
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = () => {
    const {articleId} = useParams();
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/articles/${articleId}`);
                setArticleInfo(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [articleId]);

    /* const handleClick = () => {
        setArticleInfo((prev) => ({
            ...prev,
            upvotes: prev.upvotes + 1
        }));
    }
    */

    const handleClick = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        setArticleInfo((prev) => ({
            ...prev,
            upvotes: response.data
        }));
    }

    const article = articles.find(article => article.name === articleId);
    
    if (article === undefined) {
        return <NotFoundPage />
    }
    if (loading) {
        return <Loading />;
    }

    return (<>
        <h1> {article.title} </h1>
        <div className="upvotes-section"> 
            <button onClick={handleClick}> Upvote </button>
            <p> This article has {articleInfo.upvotes} upvote(s). </p>
        </div>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        <AddCommentForm articleId={articleId} onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}/>
        <CommentsList comments={articleInfo.comments} />
        </>

    )
}

export default ArticlePage;