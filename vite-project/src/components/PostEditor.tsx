import { useState, } from "react"

type PostEditorProps = {
  onPublish: (text: string) => void
}


export default function PostEditor({onPublish }: PostEditorProps) {
  const [post, setPost] = useState("")

  const handlePublish = () => {
    if (post.trim()) {
      onPublish(post)
      setPost('')
    }
  }

  const alertNotImplemented = () => alert("Function not implemented")

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="flex items-start space-x-2 p-4">
        <div className="flex-1">
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="w-full p-2 mb-2 resize-none"
            rows={3}
            placeholder="How are you feeling today?"
          />
          
        </div>
        <button
          onClick={alertNotImplemented}
          className="text-red-400 text-2xl font-bold"
          title="Delete"
        >
          🗑
        </button>
      </div>
      <hr className="border-t border-gray-200" />
      <div className="flex items-center justify-between px-3 py-3">
            <div className="space-x-2 text-gray-500 text-xl">
              <button onClick={alertNotImplemented}>➕</button>
              <button onClick={alertNotImplemented}>💬</button>
              <button onClick={alertNotImplemented}>⚙️</button>
            </div>
            <button
              onClick={handlePublish}
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded"
            >
              ➤
            </button>
          </div>
          
    </div>
  )
}
