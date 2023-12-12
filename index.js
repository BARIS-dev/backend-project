import express from "express";
import {
  mongoCloseListener,
  mongoConnect,
  mongoConnectionListener,
  mongoDisconnectListener,
  mongoErrorListener,
  mongoReconnectListener,
} from "./config/db.connect.js";

mongoErrorListener();
mongoCloseListener();
mongoConnectionListener();
mongoDisconnectListener();
mongoReconnectListener();
await mongoConnect();

const app = express();
app.use(express.json());

app.all("*", (req, res, next) => {
  res.status(404).json({ message: "Not found" });
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
