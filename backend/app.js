const express = require('express');

const app = express();

app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Header",
        "Origin, X-Request-With, Content-Type, Accept", 
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS")
    next();
});


app.use('/api/posts',(req, res, next)=> {
    const posts = [
       {
        id: "7565tguj",
        title: "First server-side post",
        content: "Tnis is coming from the server"
       },
       {
        id: "ytujykgjb",
        title: "Second server-side post",
        content: "Tnis is coming from the server!"
       }
    ];
    return res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    });
});

module.exports = app;