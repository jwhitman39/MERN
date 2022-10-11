const express = require("express");
const app = express();
const PORT = 8000;

require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokesRoutes = require('./server/routes/jokes.routes');
AllJokesRoutes(app);

app.listen(PORT, () => console.log(`Server initiated. Listening on port: ${PORT}...`));