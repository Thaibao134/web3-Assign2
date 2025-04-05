const GenreDetails = ({ selectedGenre }) => {

    return (
        <div className="w-2/6 bg-[#333333] flex justify-center text-white text-xl border-4 border-solid border-[#e8a9a0] overflow-y-auto">

            <div>
                {selectedGenre ? (
                    <h5 className="flex justify-center h-full">
                        <div className="">
                            <b>Name:</b> {selectedGenre.GenreName} <br /><br />
                            <b>Description: </b> {selectedGenre.Description} <br /><br />
                            <b>Wiki Link:</b> {selectedGenre.WikiLink} <br /><br />
                        </div>
                    </h5>
                ) : ("Select genre to display further details")}
            </div>
        </div>
    )

}

export default GenreDetails