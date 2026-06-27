import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TypingIndicator from "./TypingIndicator";


import MessageBubble from "./MessageBubble";

import InputBar from "./InputBar";

import { getBotResponse } from "../services/chatService";

function ChatWindow({ messages, setMessages }){

   
const [input, setInput] = useState("");
const [typing, setTyping] = useState(false);

const bottomRef = useRef(null);

 async function sendMessage() {
    if (input.trim() === "") return;

    const now = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const userMessage = {
        text: input,
        sender: "user",
        time: now,
    };

    setMessages((prev) => [...prev, userMessage]);

    const userInput = input;

    setInput("");
    setTyping(true);

    try {
        const response = await getBotResponse(userInput);
        console.log("Response:", response);
console.log("Type:", typeof response);

        const botMessage = {
            text: response,
            sender: "bot",
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };
        console.log(botMessage);
        setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
        setMessages((prev) => [
            ...prev,
            {
                text: "Unable to get a response. Please try again.",
                sender: "bot",
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            },
        ]);
    } finally {
        setTyping(false);
    }
}
    useEffect(() => {

    bottomRef.current?.scrollIntoView({
        behavior: "smooth",
    });

}, [messages, typing]);

    return (

    <div className="flex flex-col flex-1 bg-white text-black">

        <div className="flex-1 overflow-y-auto">

            {messages.length === 0 ? (

                <div className="flex h-full items-center justify-center">

                    <div className="max-w-xl text-center">

                       

                      
                        <p className="mt-2 text-sm text-gray-400">
                            Type your question below to begin.
                        </p>

                    </div>

                </div>

            ) : (

                <div className="max-w-4xl mx-auto px-6 py-8">

                    {messages.map((msg, index) => (

                        <MessageBubble
                            key={index}
                            message={msg}
                        />

                    ))}

                    {typing && <TypingIndicator />}

                    <div ref={bottomRef}></div>

                </div>

            )}

        </div>

        <InputBar
            message={input}
            setMessage={setInput}
            sendMessage={sendMessage}
        />

    </div>
);

  

}


export default ChatWindow;