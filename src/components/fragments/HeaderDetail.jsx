const HeaderDetail = () => {
    return (
        <div className="flex pt-6  px-32" style={{ background: "#152A46" }}>
            <div className="flex w-full h-full flex-col space-y-7">
                <h1 className="text-7xl text-white">Programming <br /> Laravel</h1>
                <h1 className="text-5xl text-white">Getting Started with Laravel 9</h1>
                <p className="text-xl text-white text-ellipsis">Tingkatkan Skill dan pengetahuan bersama para mentor <br />terbaik di bidangnya, untuk siapkan karir impian anda.</p>
                <p className="font-400 text-xl text-white mt-6">Mentor</p>
                <div className="flex pb-6">
                    <div className="mr-12">
                        <h2 className="font-700 text-white text-[25px] ">William Hartono</h2>
                        <p className="font-400 text-xl text-white">Developer at Widya Edu</p>
                    </div>
                    <div>
                        <h2 className="font-700 text-white text-[25px] ">Farel Prayoga</h2>
                        <p className="font-400 text-xl text-white">Developer at Widya Edu</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full self-end justify-center hidden lg:flex" >
                <img className="h-160" src="/images/image-1.png" alt="img" />
            </div>
        </div>
    )
}

export default HeaderDetail;