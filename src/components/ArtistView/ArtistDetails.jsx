import { useState } from "react";

const ArtistDetails = ({ selectedArtist, onAddFavArtist }) => {

    const [FavouritePopup, setFavouritePopup] = useState(false)

    //Create a popup when added to favourites with timer
    const handleAddFavArtist = () => {
        onAddFavArtist(`${selectedArtist.FirstName} ${selectedArtist.LastName}`)
        setFavouritePopup(true)
        setTimeout(() => {
            setFavouritePopup(false);
        }, 2000);
    }


    return (
        <div className="w-2/6 bg-[#333333] flex justify-center text-white text-xl border-4 border-solid border-[#e8a9a0] overflow-y-auto">
            <div>
                <div>
                    <div className="bg-blue-400 m-2 text-center w-auto py-2 m-4 rounded">
                        <button onClick={handleAddFavArtist}> Add To Favourites</button>
                    </div>
                </div>

                {selectedArtist ? (
                    <h5 className="flex justify-center h-full">
                        <div className="">
                            <b>FirstName:</b> {selectedArtist.FirstName} <br /><br />
                            <b>LastName: </b> {selectedArtist.LastName} <br /><br />
                            <b>Nationality:</b> {selectedArtist.Nationality} <br /><br />
                            <b>Gender:</b> {selectedArtist.Gender} <br /><br />
                            <b>YearOfBirth:</b> {selectedArtist.YearOfBirth}<br /><br />
                            <b>YearOfDeath:</b> {selectedArtist.YearOfDeath} <br /><br />
                            <b>Details:</b> {selectedArtist.Details}<br /><br />

                            {/* If available then hyperlink, else N/A */}
                            {selectedArtist.ArtistLink === "" ? (
                                <div className="text-white"><b>View Artist On Wikipedia:</b> N/A</div>
                            ) : (
                                <a href={selectedArtist.ArtistLink} target="_blank" className="text-white">View Artist On Wikipedia</a>
                            )} <br /><br />
                           
                            <img src={"src/assets/artists/full/" + selectedArtist.ArtistID + ".jpg"} className="mx-auto w-36 h-auto"/>
                        </div>
                    </h5>
                ) : ("Select artist to display further details")}

                
                {FavouritePopup && (
                    <div className="popup-message">
                        Added to Favourites!
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArtistDetails