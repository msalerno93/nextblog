//TEMP DATA
const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
]

const posts = [
    {
        id: 1,
        title: "Post 1",
        body: "lalalalala",
        userId: 1
    },
    {
        id: 2,
        title: "Post 2",
        body: "lalalalala",
        userId: 2
    },
    {
        id: 3,
        title: "Post 3",
        body: "lalalalala",
        userId: 1
    },
    {
        id: 4,
        title: "Post 4",
        body: "lalalalala",
        userId: 2
    }
]

export const getPosts = async() => {
    return posts
}

export const getPost = async() => {
    return posts.find((post) => {post.id === id})
}

export const getUser = async() => {
    return users.find((user) => {user.id === id})
}