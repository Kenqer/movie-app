import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Navbar = () => {
    let [open,setOpen]=useState(false);
    return ( 
        <header className="shadow-md w-full top-0 left-0" id="top">
        <nav className="static z-50 bg-slate-900 flex flex-row py-[5px] w-full justify-between items-center">
            <div className="">
                <Link to="/" className="text-xl text-yellow-400 ml-10 font-serif font-semibold">Flix Flare.</Link>
            </div>
            <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 text-yellow-400 cursor-pointer md:hidden">
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <div className="flex flex-row gap-x-10 pr-10">
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
                md:z-auto -z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
                duration-500 ease-in md:flex-row md:gap-10 bg-slate-900 flex-col flex gap-5 pt-10 md:pt-0 ${open ? 'top-9 transition-all ease-in duration-500':'top-[-490px]'}`}>
                    <li>
                    <Link className="text-yellow-400 text-xl font-medium hover:opacity-50 hover:scale-110 duration-300" to="/home">Home</Link>
                    </li>
                    <li>
                    <Link className="text-yellow-400 text-xl font-medium hover:opacity-50 hover:scale-110 duration-300" to="/movie">Movie</Link>
                    </li>
                    <li>
                    <Link className="text-yellow-400 text-xl font-medium hover:opacity-50 hover:scale-110 duration-300" to="/tv">TV-Series</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
     );
}
 
export default Navbar;