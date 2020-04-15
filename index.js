const express = require('express');
const path = require('path');
const todoItemRoutes = require('./server/todoItem/todoItem.route');
const {logErrors, clientErrorHandler, errorHandler} = require('./server/services/errorHandling');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname + '/client/build/static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use('/api/todo_item', todoItemRoutes);
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));