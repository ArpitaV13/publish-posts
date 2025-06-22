import useLiveTime from "../hooks/useLiveTime"

type PostItemProps = {
    name: string
    time: number
    content: string
  }
 function formatPostTime(timestamp: number): string {
    const now = Date.now()
    const diffMs = now - timestamp
    const diffMins = Math.floor(diffMs / (1000 * 60))
  
    if (diffMins < 1) {
      return "Just now"
    }
  
    if (diffMins < 55) {
      return `${diffMins} min${diffMins === 1 ? "" : "s"} ago`
    }
  
    const date = new Date(timestamp)
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }
  
    return date.toLocaleString("en-US", options)
  }
  
  
  export default function PostItem({ name, time, content }: PostItemProps) {
    useLiveTime();
    const alertNotImplemented = () => alert("Function not implemented")
  
    return (
      <div className="mb-4 rounded-xl shadow bg-gray-200 p-1">
        <div className="bg-white p-4 rounded-xl">
          <div className="flex items-center mb-2 ">
            <img
              src="/person.svg"
              alt="avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-xs text-gray-500">{formatPostTime(time)}</p>
            </div>
          </div>
          <p className="text-base text-left my-3">{content}</p>
        </div>
        <div className="flex space-x-4 py-1 px-2 text-gray-500 text-base bg-gray-200">
          <button onClick={alertNotImplemented}>
            <img src="/heart.png" alt="avatar" className="w-5 h-5" />
          </button>
          <button onClick={alertNotImplemented}>
            <img src="/chat.png" alt="avatar" className="w-8 h-8" />
          </button>
          <button onClick={alertNotImplemented}>
            <img src="/send-item.png" alt="avatar" className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }
  