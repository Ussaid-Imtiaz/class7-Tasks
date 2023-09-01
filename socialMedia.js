// +++++++++++++++Implementation of Above Code+++++++++++++++++++++++++
const user1 = { id: 1, name: "U1" };
const user2 = { id: 2, name: "U2" };
const user3 = { id: 3, name: "U3" };
const user4 = { id: 4, name: "U4" };
//=======Profile 1 ========================//
const post1 = {
    id: 101,
    content: "This is Post 1 by Profile 1",
    postMaker: user3,
    timestamp: 5487962,
    likes: [
        { user: user1, timestamp: 154786 },
        { user: user2, timestamp: 1545787 },
        { user: user4, timestamp: 123687 }
    ],
    comments: [
        { user: user1, content: "good", timestamp: 148786 },
        { user: user2, content: "ok", timestamp: 154876 }
    ]
};
const post2 = {
    id: 102,
    content: "This is Post 2 by Profile 1",
    postMaker: user4,
    timestamp: 1234578,
    likes: [
        { user: user2, timestamp: 1234578 },
        { user: user3, timestamp: 1545787 },
    ],
    comments: [
        { user: user3, content: "very nice", timestamp: 148786 },
        { user: user1, content: "what?", timestamp: 154876 }
    ]
};
const profile1 = {
    id: 1,
    username: "P1",
    bio: "ABC",
    posts: [post1, post2]
};
//========Profile 2==========================================//
const post3 = {
    id: 201,
    content: "This is Post 3 by Profile 2",
    postMaker: user1,
    timestamp: 5487962,
    likes: [
        { user: user1, timestamp: 154786 },
        { user: user2, timestamp: 1545787 },
        { user: user3, timestamp: 123687 },
        { user: user4, timestamp: 123687 }
    ],
    comments: [
        { user: user2, content: "Excellent", timestamp: 148786 },
        { user: user4, content: "wow", timestamp: 154876 }
    ]
};
const post4 = {
    id: 202,
    content: "This is Post 4 by Profile 2",
    postMaker: user2,
    timestamp: 1234578,
    likes: [
        { user: user1, timestamp: 1234578 },
    ],
    comments: [
        { user: user3, content: "hunh!", timestamp: 154876 }
    ]
};
const profile2 = {
    id: 2,
    username: "P2",
    bio: "XYZ",
    posts: [post3, post4]
};
//=============Function============================//
const profiles = [profile1, profile2];
function findMostLikedPost(profiles) {
    let mostLikedPost = null;
    let maxLikes = 0;
    for (let profile of profiles) {
        for (let post of profile.posts) {
            if (post.likes.length > maxLikes) {
                mostLikedPost = post;
                maxLikes = post.likes.length;
            }
        }
    }
    return mostLikedPost;
}
const mostLikedPost = findMostLikedPost(profiles);
console.log(mostLikedPost?.content);
console.log(mostLikedPost?.postMaker.name);
export {};
