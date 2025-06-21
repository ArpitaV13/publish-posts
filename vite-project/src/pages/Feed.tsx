import { useState } from "react";
import PostEditor from "../components/PostEditor";
import PostItem from "../components/PostItem";

type Post = {
  content: string;
  name: string;
  time: number;
};

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePublish = (text: string) => {
    const newPost: Post = {
      content: text,
      name: "You",
      time: Date.now(),
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <PostEditor onPublish={handlePublish} />

      {posts.map((post, index) => (
        <PostItem
          key={index}
          name={post.name}
          time={post.time}
          content={post.content}
        />
      ))}
    </div>
  );
}
