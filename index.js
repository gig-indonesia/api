require("dotenv").config();

const PORT = process.env.PORT;
const express = require("express");
const app = express();
const accounts = require("./api/accounts");
// const hosts = require("./api/hosts");
const artists = require("./api/artists");
// const gigApplied = require("./api/gigApplied");
// const gigCreated = require("./api/gigCreated");
// const notification = require("./api/notification");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/products", products);
// app.use("/customers", customers);
app.use("/accounts", accounts);
app.use("/artists", artists);


app.listen(PORT, () => console.log(`App running on port ${PORT}`));
