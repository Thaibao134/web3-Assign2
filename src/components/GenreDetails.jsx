const GenreDetails = ({selectedGenre}) => {

    return (
        <div className="w-2/6 bg-[#333333] flex justify-center text-white text-xl border-4 border-solid border-[#e8a9a0]">

            <div>



                {selectedGenre ? (
                    <h5 className="flex justify-center items-center h-full text-center">
                        <div className="">
                            <b>Name:</b> {selectedGenre.GenreName} <br />
                            <b>Description: </b> {selectedGenre.Description} <br />
                            <b>Wiki Link:</b> {selectedGenre.WikiLink} <br />
                        </div>
                    </h5>
                ) : ("SELECT GENRE TO DISPLAY DETAILS")}





            </div>
        </div>
    )

}

export default GenreDetails