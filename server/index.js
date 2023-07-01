import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connections from "./database/db.js";
import router from "./router/routes.js";

dotenv.config();

const PORT = process.env.PORT || 2000;

const app = express();

//To allow cross-origin requests -> occurs as backend runs in different port than the frontend
//can only be handled in backend
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json({ extended: true }));

app.use("/", router);
app.use("/api2", router);

Connections();

app.listen(PORT, () => {
  console.log(`Server is running at @ http://localhost:${PORT}`);
});
