const {books, authors}  = require('./static')
const resolvers = {
    
    Query: {
        books: () => books,
        book: (parent, args) => books.find(e => e.id == args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(e => e.id == args.id)
    },

    Book: {
        author: (parent, args) => {
            console.log(authors.find(author => author.id == parent.authorId));
            return authors.find(author => author.id == parent.authorId)
        }
    },
    
    Author: {
        books: (parent, args) => {
            return books.filter(book => book.authorId == parent.id)
        }
    },

    Mutation: {
        createAuthor: (parent, args) => args
    }
}

module.exports = resolvers