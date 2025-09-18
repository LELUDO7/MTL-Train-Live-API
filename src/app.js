import express from "express";
import { notFound, errorHandler } from "./middlewares/error.js";
import routes from "./routes/route.js";
import cors from "cors";


const app = express();

// middlewares globaux
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://127.0.0.1:5500" }));

// routes
app.use("/api/", routes);

// 404 & erreurs
app.use(notFound);
app.use(errorHandler);

export default app;