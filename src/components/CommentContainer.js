import React from "react";


// Sample comment data with nested replies
const commentData = [
  {
    id: 1,
    name: "Shristy Keshri",
    text: "This is the first comment",
    replies: [
      {
        id: 2,
        name: "John Doe",
        text: "This is a reply to first comment",
        replies: [
          {
            id: 3,
            name: "Jane Smith",
            text: "This is a nested reply",
            replies: [],
          },
        ],
      },
    ],
  },
   {
    id: 2,
    name: "Ashish Keshri",
    text: "This is the first comment",
    replies: [
      {
        id: 2,
        name: "John Doe",
        text: "This is a reply to first comment",
        replies: [
          {
            id: 3,
            name: "Jane Smith",
            text: "This is a nested reply",
            replies: [],
          },
        ],
      },
    ],
  },
  
  {
    id: 5,
    name: "Alice",
    text: "This is another main comment",
    replies: [{
        id: 2,
        name: "John Doe",
        text: "This is a reply to first comment",
        replies: [
          {
            id: 3,
            name: "Jane Smith",
            text: "This is a nested reply",
            replies: [],
          },
        ],
      },],
  },
  {
    id: 7,
    name: "Alice",
    text: "This is another main comment",
    replies: [{
        id: 2,
        name: "John Doe",
        text: "This is a reply to first comment",
        replies: [
          {
            id: 3,
            name: "Jane Smith",
            text: "This is a nested reply",
            replies: [],
          },
        ],
      },],
  },
  {
    id: 8,
    name: "Alice",
    text: "This is another main comment",
    replies: [{
        id: 2,
        name: "John Doe",
        text: "This is a reply to first comment",
        replies: [
          {
            id: 3,
            name: "Jane Smith",
            text: "This is a nested reply",
            replies: [],
          },
        ],
      },],
  },
  {
    id: 9,
    name: "Alice",
    text: "This is another main comment",
    replies: [{
        id: 2,
        name: "John Doe",
        text: "This is a reply to first comment",
        replies: [
          {
            id: 3,
            name: "Jane Smith",
            text: "This is a nested reply",
            replies: [],
          },
        ],
      },],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-4 rounded-lg my-2 gap-3 w-full max-w-xl">
      {/* User Avatar */}
      <img
        className="w-12 h-12 rounded-full"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      />

      {/* Comment Content */}
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-gray-800">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) return null;

  return comments.map((comment) => (
    <div key={comment.id || comment.text}>
      {/* Render main comment */}
      <Comment data={comment} />

      {/* Render replies recursively */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-6 border-l border-gray-300 ml-6">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};



const CommentContainer = () => {
  return (
    <div className="m-5 p-2 px-3">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
