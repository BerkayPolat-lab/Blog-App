import express from 'express'

const app = express();

app.use(express.json());

let articlesInfo = [{
    name: "learn-react",
    upvotes: 0,
}, {
    name: "learn-node",
    upvotes: 0
}, {
    name: "mongodb",
    upvotes: 0
}]

app.post("/", (req, res) => {
    res.send("GET request received.");
    console.log(`Received. Welcome, ${req.body.name}`);
})

app.put("/api/articles/:name/upvote", (req, res) => {
    const nameI = req.params.name;
    const article = articlesInfo.find((a) => a.name === nameI);
    if (article) {
        article.upvotes += 1;
        res.send(`The article ${nameI} now has ${article.upvotes} upvotes.`);
    } else {
        res.send(`The article ${nameI} does not exist!`);
    }
})

app.get("/hello/:name", (req, res) => {
    const {name} = req.params;
    res.send(`Hello, ${name}`);
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000.");
})