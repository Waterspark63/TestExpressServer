import mongoose from 'mongoose';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";

import { config } from "./config.js";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

mongoose
    .connect(config.mongoUri)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error: ", err));

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api", (req, res) => res.json({ message: "API is running"}));
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server online http://localhost:${PORT}`));
