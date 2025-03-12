
const PaintingList = ({artistPaintings,filterOption,handleFilterChange}) => {
    let sortedPaintings = artistPaintings.sort((a, b) => a.Title.localeCompare(b.Title));


    if (filterOption) {
        switch (filterOption) {
            case 'Title':
                sortedPaintings = artistPaintings.sort((a, b) => a.Title.localeCompare(b.Title));
                break;
            case 'Year':
                sortedPaintings = artistPaintings.sort((a, b) => a.YearofWork - b.YearofWork);
                break;
            case 'PaintingID':
                sortedPaintings = artistPaintings.sort((a, b) => a.ImageFileName.localeCompare(b.ImageFileName));
                break;
            default:
                break;
        }
    }


    return (
        <div className="w-3/6 bg-blue-400 flex justify-center text-white text-xl">
            <div>

                <div className="mb-2 bg-purple-500 basis-xs text-center">Add To Favourites</div>

                {/* <div className=" basis-xs text-center">All Paintings of Artist</div> */}

                <div className="flex justify-center gap-15">
                    <button className=" mb-1 p-1 border-black border-2 rounded bg-gray-400" onClick={() => handleFilterChange("Title")}>Title</button>
                    <button className=" mb-1 p-1 border-black border-2 rounded bg-gray-400" onClick={() => handleFilterChange("Year")}>Year</button>
                    <button className=" mb-1 p-1 border-black border-2 rounded bg-gray-400" onClick={() => handleFilterChange("PaintingID")}>PaintingID</button>
                </div>

                <div  className="overflow-y-auto max-h-[calc(100vh-10rem)]">
                    {sortedPaintings.map((paintings, index) => (
                        <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                            <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                <div className="flex justify-center max-w-full h-auto ">
                                    <img src={`https://res.cloudinary.com/funwebdev/image/upload/w_400/art/paintings/square/${paintings.ImageFileName}.jpg`}></img>
                                </div>
                                {paintings.Title} <br />
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