const GenreList = ({genres, onSelectedGenre}) => {
        const sortedGenre = genres.sort((a, b) => a.GenreName.localeCompare(b.GenreName));
        return (
    
            <div className="w-1/6 bg-red-400 flex flex-col items-center text-white text-xl overflow-hidden">
    
            <div className="w-full overflow-y-auto h-full p-2">
                {sortedGenre.map((Genre, index) => (
                    <div className="hover:bg-sky-700 cursor-pointer" key={index} onClick={() => {onSelectedGenre(Genre)}}>
                        <h5 className="text-center">
                            {Genre.GenreName}
                        </h5>
                    </div>
                ))}
            </div>
        </div>
        )
    }

export default GenreList

