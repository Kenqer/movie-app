import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="bg-slate-900 w-full static">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between mb-0">
            <span className="text-sm text-white sm:text-center ">© 2024 <Link to="/" className="hover:underline">Legoin</Link> | All Rights Reserved.
            </span>
            <span className="text-sm text-white flex items-center gap-3 font-semibold">
                Powered by
                <i className="fa-brands fa-react text-3xl text-blue-400"></i>
                <i><svg className='w-[35px] h-[35px] fill-blue-400' height="24" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"/></svg></i>
            </span>
        </div>
        <section className="bg-cover h-[70vh] flex flex-col items-center justify-center gap-5 bg-[url('./img/bgmovie.jpg')] bg-blend-screen">
            <span className="text-5xl text-yellow-400 ml-10 font-serif font-semibold">Flix Flare.</span>
            <span className="text-center text-white px-60 max-w-[90rem] md:max-w-full m-[10rem 10em] md:m-0 text-sm md:text-lg">
                FlixFlare is the leading free movie streaming website that allows you to watch movies online without the need for registration. With an extensive database and impressive features, FlixFlare stands out as the ultimate destination for free online movie streaming.
                Don't overlook FlixFlare, as it unquestionably reigns as the premier platform in this realm!
            </span>
            <a href="#top" className="outline-none font-semibold font-mono border-0 rounded-xl border-black p-3 bg-slate-800 text-white h-[40px] text-2xl hover:bg-white hover:text-slate-800 duration-300 hover:scale-105 mt-10 flex items-center">Top page</a>
        </section>
         </footer>
     );
}
 
export default Footer;