import React from "react";

const Header = () => {
    return (
        <>
        <div className="flex justify-between bg-emerald-700">
            <h1 className="font-serif text-4xl mr-5 p-3">NIKE</h1>
            <div className="flex justify-between gap-6 items-center">
                <h2 className="text-xl font-sans hover:font-black">MENUE</h2>
                <h2 className="text-xl font-sans hover:font-black">LOCATION</h2>
                <h2 className="text-xl font-sans hover:font-black">ABOUT</h2>
                <h2 className="text-xl font-sans hover:font-black">CONTACT</h2>
            </div>
            <button className="bg-red-600 w-16 h-12 mr-3 items-center mt-2 hover:marker: hover:bg-slate-400" >Login</button>
        </div>
        </>
    );
}

export default Header;