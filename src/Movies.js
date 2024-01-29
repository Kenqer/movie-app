import { data } from "./mockData";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Movies = () => {
    return (
        <section className="bg-slate-900 w-full ">
            <div className="flex flex-col pt-10">
                <span className="text-white text-3xl font-semibold text-left pl-10">
                    Movies
                </span>
                <div className="flex flex-row pt-5 pl-7 gap-3">
                    <input type="search" name="" id="" placeholder="Search..." className="rounded-3xl h-6 w-40 bg-yellow-500 text-black font-thin py-[13px] bg-opacity-40 focus:border-yellow-500 border-yellow-500" />
                    <select id="countries" class="bg-yellow-500 border border-yellow-400 px-2 text-black text-sm rounded-3xl w-[130px] bg-opacity-40 hover:text-yellow-500 duration-300 cursor-pointer">
                        <option selected>Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="countries" class="bg-yellow-500 border border-yellow-400 px-2 text-black text-sm rounded-3xl w-[130px] bg-opacity-40 hover:text-yellow-500 duration-300 cursor-pointer">
                        <option selected>Genre</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="countries" class="bg-yellow-500 border border-yellow-400 px-2 text-black text-sm rounded-3xl w-[130px] bg-opacity-40 hover:text-yellow-500 duration-300 cursor-pointer">
                        <option selected>Year</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="countries" class="bg-yellow-500 border border-yellow-400 px-2 text-black text-sm rounded-3xl w-[130px] bg-opacity-40 hover:text-yellow-500 duration-300 cursor-pointer">
                        <option selected>Rating</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="countries" class="bg-yellow-500 border border-yellow-400 px-2 text-black text-sm rounded-3xl w-[130px] bg-opacity-40 hover:text-yellow-500 duration-300 cursor-pointer">
                        <option selected>Quality</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="countries" class="bg-yellow-500 border border-yellow-400 px-2 text-black text-sm rounded-3xl w-[130px] bg-opacity-40 hover:text-yellow-500 duration-300 cursor-pointer">
                        <option selected>Type</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <button className="bg-yellow-400 rounded-3xl px-8 flex flex-row gap-2 hover:text-yellow-400 hover:bg-black">
                        <h1 className="text-md font-semibold ">Filter</h1>
                        <i className="fa-solid fa-filter pt-1">
                        </i>
                    </button>

                </div>
                
                    <div className="grid grid-cols-8 mt-6 gap-6 mx-7">
                        {data.slice(0,24).map((item) => (
                            <div className="w-[200px] overflow-hidden relative rounded-xl ">
                                <Link to="/video">
                                <img className=" cursor-pointer hover:scale-105 ease-in-out duration-300 shadow-xl hover:border-yellow-500" src={item.img} alt="poster" />
                                </Link>
                            </div>
                        ))}
                    </div>
            
            </div>

        </section>
    );
}

export default Movies;