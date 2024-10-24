import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import articles from './ArticlesContent';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
import Loading from './Loading'
import CommentsList from '../components/CommentsList';

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

    const article = articles.find(article => article.name === articleId);
    
    if (article === undefined) {
        return <NotFoundPage />
    }
    if (loading) {
        return <Loading />;
    }

    return (<>
        <h1> {article.title} </h1>
        <p> This article has {articleInfo.upvotes} upvote(s). </p>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments} />
        </>

    )
}

export default ArticlePage;