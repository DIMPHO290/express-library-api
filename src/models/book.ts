export interface Book {
  id: number;
  title: string;
  year: number;
}

export const books: Book[] = [
  { id: 1, title: "Coding for Life",  year: 2024 },
  { id: 2, title: "Girls in Tech", year: 2022 },
];
