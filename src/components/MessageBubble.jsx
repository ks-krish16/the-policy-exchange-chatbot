import { Send } from "lucide-react";

function MessageBubble({ message }) {
    const isUser = message.sender === "user";

    return (
        <div
            className={`flex mb-5 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >
            <div
                className={`max-w-[75%] rounded-2xl px-5 py-3 ${
                    isUser
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black border border-gray-200"
                }`}
            >
                <p className="whitespace-pre-wrap">
                    {message.text}
                </p>

                <p className="text-xs text-gray-500 mt-2 text-right">
                    {message.time}
                </p>
            </div>
        </div>
    );
}

export default MessageBubble;

