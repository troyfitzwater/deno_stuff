import { Router } from "https://deno.land/x/oak/mod.ts";
import { getBooks/*, getBook, addBook, updateBook, deleteBook */} from "./controllers/bookController.ts";

const router = new Router();

router.get("/books", getBooks);
// router.get("/books/:isbn", getBook);
// router.post("/books", addBook);
// router.put("/books/:isbn", updateBook);
// router.delete("/books/:isbn", deleteBook);

export default router;
