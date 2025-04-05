const ArtistList = ({ artists, onSelectedArtist }) => {

    const sortedArtist = artists.sort((a, b) => a.LastName.localeCompare(b.LastName));

    return (
        <div className="w-1/6 bg-[#333333] flex flex-col items-center text-white text-xl overflow-hidden border-4 border-solid border-[#e8a9a0]">
            <div className="w-full overflow-y-auto h-full p-2">
                {sortedArtist.map((Artist, index) => (
                    <div className="hover:bg-sky-700 cursor-pointer" key={index} onClick={() => onSelectedArtist(Artist)}>
                        <h5 className="text-center">
                            {Artist.FirstName} {Artist.LastName}
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArtistList

