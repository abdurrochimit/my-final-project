const Header = () => {
    return (
        <div className="flex h-90 pt-6  px-32" style={{ background: "#152A46" }}>
            <div className="flex w-full h-full flex-col space-y-7">
                <p className="text-6xl text-white">Jasi expert bersama <br /> edspert.id</p>
                <p className="text-xl text-white text-ellipsis">Tingkatkan Skill dan pengetahuan bersama para mentor <br />terbaik di bidangnya, untuk siapkan karir impian anda.</p>
            </div>
            <div className="w-full h-full justify-center hidden lg:flex" >
                <img className="h-100" src="/images/image-1.png" alt="img" />
            </div>
        </div>
    )
}

export default Header;