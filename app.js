const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;

const videosRouter = require("./routes/videos");

const app = express();

app.use(cors());
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", videosRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
