import express  from "express";
import db from "./config/Database.js";
import dotenv from "dotenv"
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import cors from "cors"
import AdminRoute from "./routes/AdminRoute.js"
import AuthRoute from "./routes/AuthRoute.js"
import KuiRoute from "./routes/KuiRoute.js"

dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});
(async()=>{
    await db.sync();
})(); 

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json()) ;
app.use(AdminRoute);
app.use(AuthRoute)
app.use(KuiRoute);







// store.sync();
app.listen(process.env.APP_PORT, () => {
  console.log("server run " + process.env.APP_PORT);
});