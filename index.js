require("dotenv").config();

const PORT = process.env.PORT;
const express = require("express");
const app = express();
const accounts = require("./api/accounts");
const hosts = require("./api/hosts");
const artists = require("./api/artists");
const appliedGigs = require("./api/appliedGigs");
const createGigs = require("./api/createGigs");
const notification = require("./api/notification");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/products", products);
<<<<<<< HEAD
// app.use("/customers", customers);
app.use("/hosts", hosts);
app.use("/accounts", accounts);
app.use("/artists", artists);
app.use("/appliedGigs", appliedGigs);
app.use("/createGigs", createGigs);
app.use("/notification", notification);
=======
app.use("/hosts", hosts);
app.use("/accounts", accounts);
app.use("/artists", artists);
app.use("/", (req, res) => {
  res.send("This is API demo");
});
>>>>>>> 418c701b7d3848094a0bed6bcc8d427c1918ddf1

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
