import books from "../infrastructure/inMemoryBooksData.ts";

const getBooks = ({ response }: { response: any }) => {
    response.body = books;
}

export { getBooks }