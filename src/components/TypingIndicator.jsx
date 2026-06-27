function TypingIndicator() {

    return (

        <div className="flex justify-start mb-5">

            <div className="bg-slate-800 rounded-2xl px-5 py-4 flex gap-2">

                <span className="w-2 h-2 rounded-full bg-white animate-bounce"></span>

                <span className="w-2 h-2 rounded-full bg-white animate-bounce delay-100"></span>

                <span className="w-2 h-2 rounded-full bg-white animate-bounce delay-200"></span>

            </div>

        </div>

    );

}

export default TypingIndicator;