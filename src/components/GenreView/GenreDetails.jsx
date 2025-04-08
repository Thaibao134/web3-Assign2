const GenreDetails = ({ selectedGenre }) => {

    return (
        <div className="w-2/6 bg-[#333333] flex justify-center text-white text-xl border-4 border-solid border-[#e8a9a0] overflow-y-auto">

            <div>
                {selectedGenre ? (
                    <h5 className="flex justify-center h-full">
                        <div className="">
                            <b>Name:</b> {selectedGenre.GenreName} <br /><br />
                            <b>Description: </b> {selectedGenre.Description} <br /><br />


                            {/* If available then hyperlink, else N/A */}
                            {selectedGenre.WikiLink === "" ? (
                                <div className="text-white"><b>WikiLink:</b> N/A</div>
                            ) : (
                                <a href={selectedGenre.WikiLink} target="_blank" className="text-white">View on Wikipedia</a>
                            )}










                        
                        </div>
                    </h5>
                ) : ("Select genre to display further details")}
            </div>
        </div>
    )

}

export default GenreDetails