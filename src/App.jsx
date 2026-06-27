import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";

function App() {
    const [messages, setMessages] = useState([]);

    return (
        <div className="flex h-screen">
            <Sidebar setMessages={setMessages} />

            <div className="flex flex-col flex-1">
                <Header />
                <ChatWindow
                    messages={messages}
                    setMessages={setMessages}
                />
            </div>
        </div>
    );
}

export default App;