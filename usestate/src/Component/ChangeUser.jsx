import { useState } from "react"

const ChangeUser = () => {

    const [Data, setData] = useState({
        username: "Jr.Panda Devloper ",
        role: "Devloper",
        photo: "https://i.pinimg.com/736x/5d/cd/7d/5dcd7dbdb143d7a8cb62767fe842420f.jpg",
        background: "bg-white",
    });

    function Change() {
        let o = {...Data };
        o.username = "Sr.Panda Devloper";
        o.photo = "https://i.pinimg.com/1200x/2b/81/f8/2b81f83e4d34fd91ed311bd51a7a20cb.jpg";
        o.background = "bg-green-200";
        setData(o);
    }

    return (
        <>
            <section className="flex items-center justify-center   mt-20 select-none">
                <div
                    className={`w-full h-auto max-w-sm p-4 rounded-4xl  ${Data.background}`}
                >
                    {/* photo */}
                    <div className="relative flex justify-center">
                        <img
                            src={Data.photo}
                            alt="photo"
                            className="rounded-4xl 
                        object-cover"
                        />
                        <h1 className="text-2xl font-bold text-center absolute z-10 top-4   bg-white/20 rounded-full px-4 py-1">
                            {Data.username}
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="flex items-center justify-between  mt-4">
                        <div className=" flex items-center gap-x-2 text-black">
                            <img
                                src={Data.photo}
                                alt="photo"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold">@{Data.role}</p>
                                <p className="text-gray-400">32 min ago</p>
                            </div>
                        </div>
                        <button className="bg-black py-2 px-6 rounded-xl active:bg-black/50 active:scale-95" onClick={Change}>Upgrade Devloper</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChangeUser