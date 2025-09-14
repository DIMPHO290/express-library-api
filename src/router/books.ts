import { Router, Request, Response } from "express";
import { books, Book } from "../models/book";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Books fetched successfully", books });
});

router.get("/:id", (req: Request, res: Response) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json({ message: "Book fetched successfully", book });
});

router.post("/", (req: Request, res: Response) => {
  const { title, authorId, year } = req.body;

  if (!title || !authorId || !year) {
    return res
      .status(400)
      .json({ error: "Title, authorId and year are required" });
  }

  const newBook: Book = {
    id: books.length + 1,
    title,

    year,
  };

  books.push(newBook);
  res.status(201).json({ message: "Book created successfully", book: newBook });
});

router.put("/:id", (req: Request, res: Response) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  const { title, authorId, year } = req.body;
  book.title = title ?? book.title;

  book.year = year ?? book.year;

  res.status(200).json({ message: "Book updated successfully", book });
});

router.delete("/:id", (req: Request, res: Response) => {
  const index = books.findIndex((b) => b.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const deleted = books.splice(index, 1);
  res
    .status(200)
    .json({ message: "Book deleted successfully", book: deleted[0] });
});

export default router;
