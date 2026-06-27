import { ShieldCheck } from "lucide-react";

function Header() {
    return (
        <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">

            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                    <ShieldCheck size={24} color="white" />
                </div>

                <div>

                    <h1 className="text-xl font-semibold text-black">
                        The Policy Exchange
                    </h1>


                </div>

            </div>

          

        </header>
    );
}

export default Header;