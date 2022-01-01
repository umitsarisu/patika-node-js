"use strict";
/* global alert, confirm, console, prompt, setTimeout */
let postNo = 0;
const posts = [
    { title: "Post " + (postNo += 1), message: "Lorem ipsum dolor sit amet." },
    { title: "Post " + (postNo += 1), message: "Mollitia natus libero voluptatum nemo." },
    { title: "Post " + (postNo += 1), message: "Nostrum, pariatur doloremque sunt." },
    { title: "Post " + (postNo += 1), message: "Magni fugiat possimus quidem numquam" },
];

const listPosts = () => {
    posts.map((post) => {
        console.log(`${post.title}\n    ${post.message}`);
    });
};

const addPost = ((newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        reject("Post eklenemedi.");
    });
    return promise1;
})

addPost({ title: "Post " + (postNo += 1), message: "Molestias atque quo eligendi ipsum quidem officia." })
    .then(() => {
        console.log("Post Eklendi.");
        listPosts()
    }).catch((err) => {
        console.log(err);
    });