const NavBar = () => {
    return(
        <div className="bg-gray-800 text-white text-center p-4 text-xl">
            <div className="flex flex-row">
            {["Art Dashboard", "Artist", "Paintings", "Galleries", "Genres", "Favourites", "About"].map((item, index) => (
                    <div key={index} className="bg-purple-500 basis-xs m-8">{item}</div>
                ))}
            </div>
        </div>
    )

}

export default NavBar