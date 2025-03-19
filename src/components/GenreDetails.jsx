const GenreDetails = ({selectedGenre}) => {

    return (
        <div className="w-2/6 bg-green-400 flex justify-center text-white text-xl">
        <div>
            <div>
                <div className="bg-purple-500 basis-xs m-1 text-center">Add To Favourites</div>
            </div>

            {selectedGenre ? (
                <h5 className="text-black">
                    <b>Name:</b> {selectedGenre.GenreName} <br />
                    <b>Description: </b> {selectedGenre.Description} <br />
                    <b>Wiki Link:</b> {selectedGenre.WikiLink} <br />
     
                </h5>
            ) : ("SELECT GENRE TO DISPLAY DETAILS")}
        </div>
    </div>
    )

}

export default GenreDetails