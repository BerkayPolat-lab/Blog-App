#!/bin/bash
# Starting the MongoDB server
cd my-blog-backend
mongod --dbpath ./mongodb-data/ &

# Running the backend server
npm run dev &

# Running the React frontend
cd ../my-blog
npm start