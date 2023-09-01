interface Profile {
    id: number,
    username: string,
    bio: string,
    posts: Post[]
}

interface Post {
    id: number,
    content: string,
    postMaker : User,
    timestamp: number,
    likes: Like[],
    comments: Comment[]
}

interface User {
    id: number,
    name: string
}

type Like = {
    user : User,
    timestamp : number
}

interface Comment {
    user: User,
    content: string,
    timestamp : number
}

// +++++++++++++++Implementation of Above Code+++++++++++++++++++++++++

const user1 : User = {id: 1, name: "U1"};
const user2 : User = {id: 2, name: "U2"};
const user3 : User = {id: 3, name: "U3"};
const user4 : User = {id: 4, name: "U4"};

//=======Profile 1 has 2 posts========================//

const post1 : Post = {
    id: 101,
    content: "This is Post 1 by Profile 1",
    postMaker: user3,
    timestamp: 5487962,
    likes: [
        {user : user1, timestamp : 154786},
        {user : user2, timestamp : 1545787},
        {user : user4, timestamp : 123687}
    ],
    comments: [
        {user: user1, content: "good", timestamp : 148786},
        {user: user2, content: "ok", timestamp : 154876}
    ]
}

const post2 : Post = {
    id: 102,
    content: "This is Post 2 by Profile 1",
    postMaker: user4,
    timestamp: 1234578,
    likes: [
        {user : user2, timestamp : 1234578},
        {user : user3, timestamp : 1545787},
    ],
    comments: [
        {user: user3, content: "very nice", timestamp : 148786},
        {user: user1, content: "what?", timestamp : 154876}
    ]
}

const profile1 : Profile = {
    id: 1,
    username: "P1",
    bio: "ABC",
    posts : [post1, post2]
}
//========Profile 2 has 2 posts==========================================//

const post3 : Post = {
    id: 201,
    content: "This is Post 3 by Profile 2",
    postMaker: user1,
    timestamp: 5487962,
    likes: [
        {user : user1, timestamp : 154786},
        {user : user2, timestamp : 1545787},
        {user : user3, timestamp : 123687},
        {user : user4, timestamp : 123687}
    ],
    comments: [
        {user: user2, content: "Excellent", timestamp : 148786},
        {user: user4, content: "wow", timestamp : 154876}
    ]
}

const post4 : Post = {
    id: 202,
    content: "This is Post 4 by Profile 2",
    postMaker: user2,
    timestamp: 1234578,
    likes: [
        {user : user1, timestamp : 1234578},
    ],
    comments: [
        {user: user3, content: "hunh!", timestamp : 154876}
    ]
}

const profile2 : Profile = {
    id: 2,
    username: "P2",
    bio: "XYZ",
    posts : [post3, post4]
}

//=============Function============================//

const profiles : Profile[] = [profile1, profile2]

function findMostLikedPost (profiles : Profile[]) {
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













