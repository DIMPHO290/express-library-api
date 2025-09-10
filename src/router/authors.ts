import { Router, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";
import { authors, Author } from "../models/author";

const router = Router();


router.get("/", (req: Request, res: Response) => {
  res.status(200).json(authors);
});

router.get(
  "/:id",
  [param("id").isInt().withMessage("ID must be an integer")],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = parseInt(req.params.id);
    const author = authors.find((author) => author.id === id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json(author);
  }
);

router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("author").notEmpty().withMessage("Author name is required"),
    body("year").isInt().withMessage("Year must be an integer"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newAuthor: Author = {
      id: authors.length + 1,
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
    };

    authors.push(newAuthor);
    res.status(201).json(newAuthor);
  }
);

router.put(
  "/:id",
  [
    param("id").isInt().withMessage("ID must be an integer"),
    body("title").optional().isString(),
    body("author").optional().isString(),
    body("year").optional().isInt(),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = parseInt(req.params.id);
    const author = authors.find((a) => a.id === id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    author.title = req.body.title ?? author.title;
    author.author = req.body.author ?? author.author;
    author.year = req.body.year ?? author.year;

    res.status(200).json(author);
  }
);

router.delete(
  "/:id",
  [param("id").isInt().withMessage("ID must be an integer")],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = parseInt(req.params.id);
    const index = authors.findIndex((a) => a.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Author not found" });
    }

    authors.splice(index, 1);
    res.status(204).send();
  }
);

export default router;