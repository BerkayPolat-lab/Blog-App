import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import articles from './ArticlesContent';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const {articleId} = useParams();
    const [info, setInfo] = useState(null);

    const article = articles.find(article => article.name === articleId);

    if (article === undefined) {
        return <NotFoundPage />
    }
    return (<>
        <h1> {article.title} </h1>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    )
}

export default ArticlePage;