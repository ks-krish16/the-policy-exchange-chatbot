import {
    Plus,
    MessageSquare,
    Building2,
    UserCircle2
} from "lucide-react";

function Sidebar({ setMessages }) {
    return (
        <aside className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col">

            {/* Company */}

            <div className="px-6 py-7 border-b border-gray-200">

                <div className="flex items-center gap-3">

                    <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center">

                        <Building2 color="white" size={22} />

                    </div>

                    <div>

                        <h1 className="text-lg font-semibold text-black">
                            The Policy Exchange
                        </h1>

                        <p className="text-sm text-gray-500">
                            AI Policy Assistant
                        </p>

                    </div>

                </div>

            </div>

            {/* New Conversation */}

            <div className="p-5">

               <button
    onClick={() => setMessages([])}
    className="w-full rounded-xl bg-black text-white py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition"
>
    <Plus size={18} />
    New Conversation
</button>

            </div>

            {/* History */}

            <div className="flex-1 px-4">

                <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                    Recent Conversations
                </p>

                <button className="w-full flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100 transition text-gray-700">

                    <MessageSquare size={18} />

                    Policy Query

                </button>

                <button className="w-full flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100 transition text-gray-700">

                    <MessageSquare size={18} />

                    Claim Assistance

                </button>

                <button className="w-full flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100 transition text-gray-700">

                    <MessageSquare size={18} />

                    Coverage Information

                </button>

            </div>

            {/* User */}

            <div className="border-t border-gray-200 p-5">

                <button className="w-full flex items-center gap-3 rounded-xl p-2 hover:bg-gray-100 transition">

                    <UserCircle2 size={42} className="text-gray-500" />

                    <div className="text-left">

                        <p className="text-sm font-medium text-black">
                            Guest User  
                        </p>

                        <p className="text-xs text-gray-500">
                            Secure Access
                        </p>

                    </div>

                </button>

            </div>

        </aside>
    );
}

export default Sidebar;