import books from "../infrastructure/inMemoryBooksData";

const getBooks = ({ response }: { response: any }) => {
    response.body = books;
}

export { getBooks }