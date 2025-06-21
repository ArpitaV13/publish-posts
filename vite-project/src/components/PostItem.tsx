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
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex items-center mb-2">
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
        <p className="text-base mb-2 text-left">{content}</p>
        <div className="flex space-x-4 text-gray-500 text-base">
          <button onClick={alertNotImplemented}>🤍</button>
          <button onClick={alertNotImplemented}>💬</button>
          <button onClick={alertNotImplemented}>🔗</button>
        </div>
      </div>
    )
  }
  