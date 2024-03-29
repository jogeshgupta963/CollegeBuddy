const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const path = require("path");

const dbConnect = require("./server/dbConnect/connect");

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(
//   "/css",
//   express.static(
//     "C:\\Users\\JOGESH\\OneDrive\\Documents\\GitHub\\hackTu\\client\\components\\css"
//   )
// );
app.use(
  "/css",
  express.static(
    path.join(__dirname, "/client/components/css")
  )
);
app.use(
  "/js",
  express.static(
    path.join(__dirname, "/client/components/js")
  )
);
// app.use(
//   "/js",
//   express.static(
//     "C:\\Users\\JOGESH\\OneDrive\\Documents\\GitHub\\hackTu\\client\\components\\js"
//   )
// );
// app.use(
//   "/img",
//   express.static(
//     "C:\\Users\\JOGESH\\OneDrive\\Documents\\GitHub\\hackTu\\client\\images"
//   )
// );
app.use(
  "/img",
  express.static(
    path.join(__dirname, "/client/images")
  )
);

//routes
const userRouter = require("./server/routes/user");
const homeRouter = require("./server/routes/home");
const authRouter = require("./server/routes/auth");
const profileRouter = require("./server/routes/profile");
const nameRouter = require("./server/routes/getName");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/home", homeRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/getname", nameRouter);


app.get('/', (req, res) => {
  res.redirect('/api/v1/user');
});
//connecting database
(async function () {
  try {
    await dbConnect(process.env.mongoUri);
    console.log("db Connected");
    app.listen(process.env.PORT || 80, () => console.log("server Started"));
  } catch (error) {
    console.log(error.message);
  }
})();
