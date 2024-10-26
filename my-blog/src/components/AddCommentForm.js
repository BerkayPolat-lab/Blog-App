import {React, useState} from "react";
import axios from "axios";


const AddCommentForm = ({articleId, onArticleUpdated}) => {
    const [comment, setComment] = useState(""); 
    const [nameOf, setNameOf] = useState("");

    const handleNameChange = (e) => {
        setNameOf(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/articles/${articleId}/comments`, {postedBy: nameOf, text: comment});
            console.log('Data successfully sent:', response.data);
            const updatedArticle = response.data;
            onArticleUpdated(updatedArticle);
        } catch (error) {
            console.error('Error sending data:', error);
        }

        setNameOf('');
        setComment('');
    };


    return (
        <div id="add-comment-form">
        <h2> Add a Comment </h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    value={nameOf} 
                    onChange={handleNameChange} 
                    required 
                />
            </label>
            <br />
            <label>
                Comment:
                <textarea
                    rows="4"
                    columns="50"
                    value={comment}
                    onChange={handleCommentChange} 
                    required
                />
            </label>
            <br />
            <button type="submit">Add Comment </button>
        </form>
        </div>
    )
}

export default AddCommentForm;