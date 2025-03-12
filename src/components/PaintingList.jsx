
const PaintingList = ({Paintings,filterOption,handleFilterChange}) => { //ARTIST

    let sortedPaintings = Paintings.sort((a, b) => a.Title.localeCompare(b.Title));

    // ARTIST - TITLE,  YEAR                    (THUMBNAIL, TITLE, YEAR)
    // GALLERY - ARTIST NAME , TITLE, YEAR      (THUMBNAIL, NAME, TITLE, YEAR)
    // GENRE - ARTIST NAME, TITLE, YEAR         (THUMBNAIL,  NAME, TITLE, YEAR)

    if (filterOption) {
        switch (filterOption) {
            case 'Title':
                sortedPaintings = Paintings.sort((a, b) => a.Title.localeCompare(b.Title));
                break;
            case 'Year':
                sortedPaintings = Paintings.sort((a, b) => a.YearofWork - b.YearofWork);
                break;
            case 'Name':
                sortedPaintings = Paintings.sort((a, b) => a.ArtistName.localeCompare(b.ArtistName));
                break;
            default:
                break;
        }
    }


    // YOU NEED TO FIX THE FILTERING AND OTHERS AFTER. GENRE GALLERY ARTIST WILL BE PASSTING TO THIS SINGLEW JSX
    return (
        <div className="w-3/6 bg-blue-400 flex justify-center text-white text-xl">
            <div>

                <div className="mb-2 bg-purple-500 basis-xs text-center">Add To Favourites</div>

                {/* <div className=" basis-xs text-center">All Paintings of Artist</div> */}

                <div className="flex justify-center gap-15">
                    <button className=" mb-1 p-1 border-black border-2 rounded bg-gray-400" onClick={() => handleFilterChange("Name")}>Artist Name</button>
                    <button className=" mb-1 p-1 border-black border-2 rounded bg-gray-400" onClick={() => handleFilterChange("Title")}>Title</button>
                    <button className=" mb-1 p-1 border-black border-2 rounded bg-gray-400" onClick={() => handleFilterChange("Year")}>Year</button>
                </div>

                <div  className="overflow-y-auto max-h-[calc(100vh-10rem)]">
                    {sortedPaintings.map((paintings, index) => (
                        <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                            <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                <div className="flex justify-center max-w-full h-auto ">
                                    <img src={`https://res.cloudinary.com/funwebdev/image/upload/w_400/art/paintings/square/${paintings.ImageFileName}.jpg`}></img>
                                </div>
                                {paintings.ArtistName} <br />
                                {paintings.Title} <br />

                                {/* ONLY FOR GALLERY */}
                                {paintings.YearofWork} <br /> 
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default PaintingList