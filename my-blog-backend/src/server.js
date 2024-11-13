import express from 'express'
import {connectToDb, db} from "./db.js"

const app = express();
app.use(express.json());

connectToDb(() => {
    console.log("Sucessfully connected to the mongoDB server.");
    app.listen(3000, () => {
        console.log("Server is listening on port 3000.");
    })
})

app.get("/api/articles/", async(req, res) => {
    try {
        const articles = await db.collection("articlesList").find().toArray();
        console.log(articles);
        if (articles.length > 0) {
          res.json(articles);
        } else {
          res.status(404).send("Articles don't exist.");
        }
      } catch (error) {
        res.status(500).send("Internal server error.");
      }
})

  app.post("/api/articles/", async (req, res) => {
    try {
        const { name, title, content, upvotes, comments } = req.body;
        const newArticle = { name, title, content: [content], upvotes: 0, comments: []};
    
        const result = await db.collection("articlesList").insertOne(newArticle);
        const article = await db.collection("articlesList").findOne({_id: result.insertedId});
        res.json(article);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      }
  })



app.get("/api/articles/:name", async (req, res) => {
    const {name} = req.params;
    const article = await db.collection('articlesList').findOne({ name });
    if (article) {
        res.json(article);
    } else {
        res.status(404).send("Article not found!");
    }
})

app.put("/api/articles/:name/upvote", async (req, res) => {
    const {name} = req.params;

    const returnObject = await db.collection('articlesList').updateOne(
        {name: name},
        {$inc: {upvotes: 1}}
    );

    const article = await db.collection('articlesList').findOne({ name });
    res.json(article.upvotes);
})


app.post("/api/articles/:name/comments", async (req, res) => {
    try {
        const { name } = req.params;
        const { postedBy, text } = req.body;
    
        await db.collection("articlesList").updateOne(
          { name: name },
          { $push: { comments: { postedBy, text } } }
        );
        const article = await db.collection("articlesList").findOne({ name: name });
        res.json(article);
        
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      }

})