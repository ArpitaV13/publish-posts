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
    <div className="bg-gray-100 p-2 rounded-lg mb-6">
      <div className="bg-white rounded-lg shadow">
        <div className="flex items-start space-x-2 p-4">
          <div className="flex-1">
            <div className="flex flex-row gap-x-5 bg-gray-100 p-2 rounded-lg max-w-84">
              <select
                className="border px-1 py-0.5 text-sm rounded"
                onClick={alertNotImplemented}
              >
                <option>Paragraph</option>
                <option>Essay</option>
              </select>
              <button
                onClick={alertNotImplemented}
                className="text-gray-600 font-bold text-base bg-white px-2 rounded-md"
              >
                <img
                  src="/bold-text.png"
                  alt="bold"
                  className="w-3 h-3"
                />
              </button>
              <button
                onClick={alertNotImplemented}
                className="text-gray-600 italic text-base"
              >
                <img
                  src="italic-font.png"
                  alt="italics"
                  className="w-3 h-3"
                />
              </button>
              <button
                onClick={alertNotImplemented}
                className="text-gray-600 underline text-base"
              >
                <img
                  src="underline.png"
                  alt="underline"
                  className="w-3 h-3"
                />
              </button>
              <button
                onClick={alertNotImplemented}
                className="text-gray-600 text-base"
              >
                <img
                  src="align-left.png"
                  alt="left-align"
                  className="w-3 h-3"
                />
              </button>
              <button
                onClick={alertNotImplemented}
                className="text-gray-600 text-base"
              >
                <img
                  src="format.png"
                  alt="center-align"
                  className="w-3 h-3"
                />
              </button>
              <button
                onClick={alertNotImplemented}
                className="text-gray-600 text-base"
              >
                <img
                  src="align-right.png"
                  alt="right-align"
                  className="w-3 h-3"
                />
              </button>
            </div>

            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="w-full p-2 border-none outline-none focus:outline-none focus:border-transparent resize-none"
              rows={3}
              placeholder="How are you feeling today?"
            />
          </div>
          <button
            onClick={alertNotImplemented}
            className="bg-red-100 p-2 rounded-lg cursor-pointer"
            title="Delete"
          >
            <img
              src="/delete.svg"
              alt="delete"
              className="w-5 h-5"
            />
          </button>
        </div>
        <hr className="border-t border-gray-200" />
        <div className="flex items-center justify-between px-3 py-3">
          <div className="space-x-2 text-gray-500 text-xl">
            <button className="cursor-pointer" onClick={alertNotImplemented}>
              ➕
            </button>
            <button className="cursor-pointer" onClick={alertNotImplemented}>
              💬
            </button>
            <button className="cursor-pointer" onClick={alertNotImplemented}>
              ⚙️
            </button>
          </div>
          <button
            onClick={handlePublish}
            className=" hover:bg-blue-100 cursor-pointer px-3 py-1 rounded"
          >
            <img src="/send.png" alt="send" className="w-6 h-6 rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
