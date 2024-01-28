import { Link } from "react-router-dom";

const Landingpage = () => {
    return ( 
        <div className="">
    <section className="bg-[url('/img/bg.svg')] w-full bg-no-repeat md:bg-cover h-[50vh] md:h-screen bg-fixed z-[1] mb-0">
        <div className="text-center pt-[10%]">
            <h1 className="text-xl md:text-7xl text-white font-bold">Watch <Link to="/article">Movie</Link> Online</h1>
            <h1 className="text-xl md:text-7xl text-white font-bold">in High Definition for Free!</h1>
            <p className="text-[11px] md:text-md text-white mt-10">ReacherThe MarvelsPercy Jackson and the OlympiansPower Book III: Raising
                KananHazbin HotelLiftZorroAquaman and the Lost KingdomLaw & Order: Special Victims UnitTrue Detective
            </p>
            <p className="text-[11px] md:text-md text-white">and the Lost KingdomLaw & Order: Special Victims UnitTrue Detective</p>
            <Link to="/home"><button className="outline-none font-semibold font-mono border-0 rounded-xl border-black px-3 bg-slate-800 text-white h-[40px] md:text-2xl text-sm hover:bg-white hover:text-slate-800 duration-300 hover:scale-105 mt-10">Open
                home page</button></Link>
        </div>
    </section>
    <main className="grow flex flex-col pt-[10vh] relative bg-[#C55900] z-[2] pb-40 top-0 transition-all ease-in duration-500">
        <img src="./img/bg.png" alt="" className="absolute -top-[3%] w-screen md:-top-[20%]" />
        <section className="flex flex-col pl-[25vw] pr-[25vw] pt-[10vh] gap-4 text-left">
            <div className="pt-20 ">
                <h1 className="text-white md:text-2xl text-lg font-medium">Watch Free Movies Online on FlixFlare</h1>
                <p className="text-white text-[12px] md:text-sm">Stop dealing with ads and pop-ups when watching your favorite content.
                    FlixFlare is an ad-free site
                    that provides seamless <Link to="/article">movie</Link> streaming. Say goodbye to interruptions, ad breaks, and intrusive
                    pop-ups. If you're already paying to watch movies, consider embracing free entertainment with
                    FlixFlare. Access a vast library of high-quality films from various genres without any
                    subscription fees. From action-packed blockbusters to heartwarming dramas and thrilling suspense,
                    FlixFlare has it all.</p>
            </div>
            <div>
                <h1 className="text-white md:text-2xl text-lg font-medium">What is FlixFlare?</h1>
                <p className="text-white text-[12px] md:text-sm">FlixFlare the cutting-edge free <Link to="/article">movie</Link> streaming website. Enjoy thousands of
                    movies and TV shows in HD, all for free. FlixFlare breaks stereotypes by providing an enhanced
                    and refined <Link to="/article">movie</Link> streaming experience. It improves upon the strengths of traditional sites while
                    leaving behind their flaws and inconveniences. With a user-friendly interface, an extensive <Link to="/article">movie</Link>
                    library, and seamless streaming capabilities, FlixFlare leads the way in the evolving landscape
                    of free <Link to="/article">movie</Link> sites.</p>
            </div>
            <div>
                <h1 className="text-white md:text-2xl text-lg font-medium">What you can watch on FlixFlare?</h1>
                <p className="text-white text-[12px] md:text-sm">
                    Discover the incredible variety of movies available on FlixFlare. With a vast and diverse range of films, there's something for every taste and preference. Explore the extensive content library, offering an impressive selection of titles spanning various genres. From action-packed thrillers and heartwarming romances to
                    captivating dramas and hilarious comedies, FlixFlare has it all. Whether you crave the latest blockbusters or timeless classics, our high-quality <Link to="/article">movie</Link> collection will keep you entertained for hours on end.</p>
            </div>
            <div>
                <h1 className="text-white md:text-2xl text-lg font-medium">Is it Legal to Watch Movies Online on FlixFlare?</h1>
                <p className="text-white text-[12px] md:text-sm">Watching movies online on platforms like FlixFlare is generally considered legal, as per copyright attorneys. Streaming movies usually does not violate copyright laws. However,
                    it is crucial to understand that sharing or downloading copyrighted content without proper authorization is illegal and infringes upon intellectual property rights. To maintain anonymity and security while engaging in online activities, it is highly recommended to use a Virtual Private Network (VPN).</p>
            </div>
            <div>
                <h1 className="text-white md:text-2xl text-lg font-medium">What Are The Features Of FlixFlare?</h1>
                <ul className="text-white list-disc pl-10 text-[12px] md:text-sm">
                    <li>FlixFlare offers a freemium <Link to="/article">movie</Link> streaming experience with premium features, allowing you to watch movies online for free without registration.</li>
                    <li>Extensive content library with a wide selection of movies spanning various genres.</li>
                    <li>HD definition for an immersive viewing experience.</li>
                    <li>User-friendly UI & UX for easy navigation and seamless browsing.</li>
                    <li>Ad-free and pop-up-free environment ensures uninterrupted <Link to="/article">movie</Link> streaming.</li>
                    <li>Ad-free and pop-up-free environment ensures uninterrupted <Link to="/article">movie</Link> streaming.</li>
                    <li>Multi-subtitles support for enhanced accessibility.</li>
                    <li>Chromecast compatibility enables streaming on your TV.</li>
                    <li>Mobile-friendly design for convenient on-the-go entertainment.</li>
                    <li>No registration required to access and start watching movies.</li>
                    <li>Personalized watch list feature to keep track of your favorite movies.</li>
                    <li>Download button available for offline viewing.</li>
                    <li>Excellent customer service to address any inquiries or concerns.</li>
                </ul>
                <p className="text-white text-[12px] md:text-sm">With these top-notch features, FlixFlare undoubtedly ranks among the best free online <Link to="/article">movie</Link> sites.</p>
            </div>
        </section>
    </main>
        </div>
     );
}
 
export default Landingpage;