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
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const navigate = useNavigate();

  const handlePublish = (text: string) => {
    if (!isAuthenticated) {
      setShowAuthPrompt(true);
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
    <div className="max-w-xl mx-auto p-4">
      <PostEditor onPublish={handlePublish} />

      {showAuthPrompt && (
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-3 mb-4 rounded">
          Please sign in or sign up to publish a post.
        </div>
      )}

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
