import { useState } from "react";
import PostEditor from "../components/PostEditor";
import PostItem from "../components/PostItem";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

type Post = {
  content: string;
  name: string;
  time: number;
};

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handlePublish = (text: string) => {
    if (!isAuthenticated) {
      navigate("/signin");
      return;
    }

    const newPost: Post = {
      content: text,
      name: "You",
      time: new Date().getTime(),
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-xl mx-auto p-4 my-8">
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
