import { data } from "./mockData";

const player = () => {
    return (
        <div id="instructions" className="text-white py-40 text-left m-auto max-w-[1280px] flex flex-col">
            <video id="my_video_1" class="video-js bg-slate-700 w-full h-full" controls preload="none" poster='http://video-js.zencoder.com/oceans-clip.jpg'
                data-setup='{ "aspectRatio":"1280:720", "playbackRates": [1, 1.5, 2] }'>
                <source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
                <source src="https://vjs.zencdn.net/v/oceans.webm" type='video/webm' />
            </video>
            <div className="bg-slate-800 h-14 rounded-b-3xl">
                <div className="flex flex-row justify-between pt-2">
                    <div className="flex flex-row pl-2 gap-2">
                        <button className="flex flex-row items-center gap-1 text-sm border border-gray-600 rounded-xl p-1 px-2">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p>Button</p>
                        </button>
                        <button className="flex flex-row items-center gap-1 text-sm border border-gray-600 rounded-xl p-1 px-2">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p>Button</p>
                        </button>
                        <button className="flex flex-row items-center gap-1 text-sm border border-gray-600 rounded-xl p-1 px-2">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p>Button</p>
                        </button>
                    </div>
                    <div className="flex flex-row pr-2 gap-2">
                        <button className="flex flex-row items-center gap-1 text-sm border border-gray-600 rounded-xl p-1 px-2">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p>Button</p>
                        </button>
                        <button className="flex flex-row items-center gap-1 text-sm border border-gray-600 rounded-xl p-1 px-2">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p>Button</p>
                        </button>
                        <button className="flex flex-row items-center gap-1 text-sm border border-gray-600 rounded-xl p-1 px-2">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p>Report</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-col flex mt-20 rounded">
                <section className="flex flex-row py-10 pl-10 bg-slate-800 rounded-3xl">
                    <span className="">
                        <img className="w-[250px] border-none rounded shadow-xl" src="https://cdn.cgv.id/uploads/movie/pictures/19029600.jpg" alt="joker" />
                    </span>
                    <div className="pl-10">
                        <h1 className="text-3xl font-bold">Joker</h1>
                        <div className="pt-1">
                            <ul className="list-disc flex flex-wrap gap-6 text-[13px] text-center">
                                <li className="list-none font-bold border-[2px] rounded-3xl px-2 border-yellow-400 text-blue-300">HD</li>
                                <li>PG</li>
                                <li>2019</li>
                                <li>112 min</li>
                            </ul>
                        </div>
                        <p className="text-sm pt-3">The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gotham's clown prince and leader of the revolution.</p>
                        <table className="text-sm font-light mt-6">
                            <tr>
                                <th>Type:</th>
                                <td>Movie</td>
                            </tr>
                            <tr>
                                <th>Country:</th>
                                <td>United States, Canada</td>
                            </tr>
                            <tr>
                                <th>Genre:</th>
                                <td>Drama, History, Biography</td>
                            </tr>
                            <tr>
                                <th>Releases:</th>
                                <td>Oct 24, 2019</td>
                            </tr>
                            <tr>
                                <th>Director:</th>
                                <td>Todd Phillipa</td>
                            </tr>
                            <tr>
                                <th>Production:</th>
                                <td>Village Roadshow Pictures, Warner Bros.</td>
                            </tr>
                            <tr>
                                <th>Cast:</th>
                                <td>Robert De Niro, Joaquin Phoenix, Zazie Beetz</td>
                            </tr>

                        </table>
                    </div>
                </section>
                <div className="py-10 pl-10">
                    <h1 className="text-3xl font-semibold text-white pb-5">Recomended</h1>
                    <div className="grid grid-cols-6 mt-6 gap-6 mx-7">
                        {data.slice(0, 12).map((item) => (
                            <div className="w-[180px] overflow-hidden relative rounded-xl ">
                                <img className=" cursor-pointer hover:scale-105 ease-in-out duration-300 shadow-xl hover:border-yellow-500" src={item.img} alt="poster" />
                            </div>
                        ))}
                    </div>


                </div>
            </div>

        </div>
    );
}

export default player;