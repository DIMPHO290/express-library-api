import express, { Express } from "express";
import { loggerMiddleware } from "./middleware/logger";
import authorRoutes from "./router/authors";
import bookRoutes from "./router/books";

const app: Express = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(loggerMiddleware);

app.use("/v1/author", authorRoutes);
app.use("/v1/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

