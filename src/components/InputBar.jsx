import { Send } from "lucide-react";

function InputBar({ message, setMessage, sendMessage }) {

    return (

        <div className="border-t border-slate-800 p-5">

            <div className="flex gap-3">

                <input

                    value={message}

                    onChange={(e)=>setMessage(e.target.value)}

                    onKeyDown={(e)=>{

                        if(e.key==="Enter"){

                            sendMessage();

                        }

                    }}

                    className="flex-1 bg-slate-800 rounded-xl p-4 text-white outline-none"

                    placeholder="Type your message..."

                />

                <button

                    onClick={sendMessage}

                    className="bg-blue-600 hover:bg-blue-700 transition px-5 rounded-xl"

                >

                    <Send color="white"/>

                </button>

            </div>

        </div>

    );

}

export default InputBar;