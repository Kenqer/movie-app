import {data} from "./mockData";
import {ban} from "./mockBan";
import { Link } from "react-router-dom/cjs/react-router-dom.min";



const Home = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider1')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider1')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const slideLeftt = () => {
        var slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRightt = () => {
        var slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const slideLefttt = () => {
        var slider = document.getElementById('slider3')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRighttt = () => {
        var slider = document.getElementById('slider3')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return ( 
        <div>
            

<div className="">
    <div className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <section className="py-40">
            <div className="flex flex-row justify-center gap-20">
                <div className="text-left pl-10 flex flex-col gap-4">
                <span className="bg-yellow-400 w-10 rounded-xl py-0 px-2 font-semibold">HD</span>
                <h1 className="text-white text-5xl font-semibold">Joker</h1>
                <p className="text-white text-lg w-[500px]">
                The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gotham's clown prince and leader of the revolution.
                </p>
                </div>
                <div className="w-[500px] rounded-3xl shadow-md relative overflow-hidden">
                    <Link to="/video">
                    <img src="./img/joker2.jpg" alt="" className="cursor-pointer hover:scale-105 duration-300"/>

                    </Link>
                </div>

            </div>
            <div>

            </div>
        </section>
    </div>
    
    <section className="flow flow-col mt-10 px-20">
        <div className="text-3xl font-bold text-white text-left pb-3">
            <h1>Movies</h1>
        </div>
        <div className="relative flex items-center rounded-2xl">
            <i onClick={slideLeft} className="fa-solid fa-caret-left text-[50px] text-white opacity-50 cursor-pointer hover:opacity-100 hover:scale-150 duration-300" aria-hidden="true"></i>
            <div id="slider1" className="overflow-x-hidden overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide">
            {data.map((item)=>(
              <Link to="/video">
              <img className="w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl" src={item.img} alt="poster" />
              </Link>
            ))}
            </div>
            <i onClick={slideRight} className="fa fa-caret-right text-[50px] text-white opacity-50 cursor-pointer hover:opacity-100 hover:scale-150 duration-300" aria-hidden="true"></i>

        </div>
    </section>
    <section className="flex flex-col pt-20 pb-40 px-20">
    <div className="text-3xl font-bold text-white text-left pb-3">
            <h1>TV Series</h1>
        </div>
        <div className="relative flex items-center rounded-2xl">
            <i onClick={slideLeftt} className="fa-solid fa-caret-left text-[50px] text-white opacity-50 cursor-pointer hover:opacity-100 hover:scale-150 duration-300" aria-hidden="true"></i>
            <div id="slider2" className="overflow-x-hidden overflow-y-hidden over whitespace-nowrap scroll-smooth scrollbar-hide">
            {data.map((item)=>(
                    <Link to="/video">
                    <img className="w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl" src={item.img} alt="poster" /></Link>
        
            ))}
            </div>
            <i onClick={slideRightt} className="fa fa-caret-right text-[50px] text-white opacity-50 cursor-pointer hover:opacity-100 hover:scale-150 duration-300" aria-hidden="true"></i>

        </div>
    </section>
    </div>

        </div>
     );
}
 
export default Home;