const express = require('express');
const app = express();
const morgan = require('morgan');
const postRoute = require('./routes/post');

const myOwnMiddlewre = () => {
    console.log('Middleware Applied');
};

app.get('/',postRoute.getPosts);
app.use(morgan("dev"));
app.use(myOwnMiddlewre);

app.listen(3000, ()=> {
    console.log("App is litening at port 3000");
});
