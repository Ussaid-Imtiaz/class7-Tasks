interface Author {
  id: number;
  name: string;
  bio: string;
}

type Comment = {
  author: Author;
  content: string;
  timestamp: number;
};

interface Post {
  id: number;
  title: string;
  content: string;
  author: Author;
  comments: Comment[];
}

type arrPost = Post[];

const posts : arrPost= [
  {
    id: 1001,
    title: "Global Warming",
    content:
      "Global warming refers to the long-term increase in Earth's average surface temperature due to human activities, primarily the emission of greenhouse gases such as carbon dioxide, methane, and nitrous oxide. These gases trap heat in the Earth's atmosphere, leading to the greenhouse effect, where the planet warms up beyond its natural equilibrium.",
    author: {
      id: 1001101,
      name: "ChatGPT",
      bio: "Blog Writer 01",
      },
    comments: [
      {
        author: {
          id: 10011,
          name: "Mr. A",
          bio: "Blog User 01",
        },
        content: "Such a Wonderful Definition",
        timestamp: 1045,
      },
    ],
  },
  {
    id: 1002,
    title: "International Economics",
    content:
      "International economics is a branch of economics that studies the interactions between different countries' economies. It analyzes trade, investment, and financial flows across borders. Key topics include exchange rates, trade agreements, and global economic cooperation. International economics helps understand how nations' decisions impact each other's economic well-being and shape the global economic landscape.",
      author: {
        id: 1001102,
        name: "Ussaid",
        bio: "Blog Writer 02",
      },
    comments: [
      {
        author: {
          id: 10012,
          name: "Mr. B",
          bio: "Blog User 02",
        },
        content: "What a great explaination",
        timestamp: 1356,
      },
      {
        author: {
          id: 100201,
          name: "Mr. X",
          bio: "Blog User 03",
        },
        content: "What is this?",
        timestamp: 1554,
      },
      {
        author: {
          id: 10012,
          name: "Mr. Y",
          bio: "Blog User 04",
        },
        content: "I don't understand a word.",
        timestamp: 1254,
      },
    ],
  },
];

posts.sort((a, b) => b.comments.length - a.comments.length);

for (const post of posts) {
console.log(post.title);
};

