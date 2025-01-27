import React from "react";



const Box = ()=>{

    return(
        <>
        
        <div className="h-[100%] w-[100%] p-10">
            <div className="flex justify-between ">
                <div className="bg-white w-1/2">
                    <h1 className="px-12 py-2 text-9xl font-bold">YOUR FEET DESERVE THE BEST</h1>
                    <p className="align-middle justify-center text-xl mx-12 px-4 mt-5">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE 
                        HERE TO HELP YOU WITH OUR <br /> SHOES.</p>

                        <div className="flex gap-10 px-16 mt-10">
                            <button className="bg-red-600 p-3 w-32 font-bold rounded-sm hover:marker: hover:bg-slate-500">Shop Now</button>
                            <button className="bg-slate-500 border-x-black p-4 w-32 rounded-sm hover:marker hover:bg-gray-300 font-bold">Category</button>
                        </div> 
                </div>
                <div className="w-1/2 h-[700px] mx-5 bg-white ">
                    <img className="py-10 " src="shows.png" alt="" />
                

                </div>
            </div>
        </div>
        
        </>
    )

}
export default Box