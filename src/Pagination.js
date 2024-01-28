import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Pagination = () => {
    let [num,setNum] = useState(1)

    const pages =[
        {page: num},
        {page: num + 1},
        {page: num + 2},
        {page: num + 3},
    ]
    function Next() {
        setNum(++num)
    }
    function Back() {
       num > 1 && setNum(--num)
    }
    return ( 
        <div className="flex justify-center py-4">
           <div className='bg-transparent rounded-xl text-white flex gap-2'>
           <button onClick={Back} className="h-8 border-2 w-8 rounded-full border-yellow-400 duration-300">
                <i className="fa-solid fa-angle-left"></i>
            </button>
            {
                pages.map((pg, i) => (
                    <button key={i} className="h-8 hover:border-2 hover:border-yellow-400 rounded-full w-8 duration-300">{pg.page}</button>
                ))

            }
            <button onClick={Next} className="h-8 border-2 w-8 border-yellow-400 rounded-full duration-300">
                <i className="fa-solid fa-angle-right"></i>
            </button>
           </div>
        </div>
     );
}
 
export default Pagination;