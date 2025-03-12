const ArtistList = ({artists, onSelectedArtist}) => {

    const sortedArtist = artists.sort((a, b) => a.LastName.localeCompare(b.LastName));
    return (

            <div className="w-1/6 bg-red-400 flex items-center justify-center text-white text-xl overflow-auto " >
                <div>
                    {sortedArtist.map((Artist, index) => (
                        <div className="hover:bg-sky-700 cursor-pointer" key={index} >
                            <h5 onClick={() => { onSelectedArtist(Artist) }} >
                                {Artist.FirstName}, {Artist.LastName}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default ArtistList