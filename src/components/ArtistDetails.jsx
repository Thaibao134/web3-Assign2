import { useState } from "react";
import Favourites from "./Favourites";

const ArtistDetails = ({ selectedArtist, onAddFavArtist }) => {

    const [FavouritePopup, setFavouritePopup] = useState(false)

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
                            <b>FirstName:</b> {selectedArtist.FirstName} <br />
                            <b>LastName: </b> {selectedArtist.LastName} <br />
                            <b>Nationality:</b> {selectedArtist.Nationality} <br />
                            <b>Gender:</b> {selectedArtist.Gender} <br />
                            <b>YearOfBirth:</b> {selectedArtist.YearOfBirth}<br />
                            <b>YearOfDeath:</b> {selectedArtist.YearOfDeath} <br />
                            <b>Details:</b> {selectedArtist.Details}<br />
                            <b>ArtistLink:</b> {selectedArtist.ArtistLink} <br />
                            
                            
                     
                            <img src={"src/assets/artists/full/" + selectedArtist.ArtistID + ".jpg"} className="mx-auto w-36 h-auto"/>

                      

                        </div>
                    </h5>
                ) : ("SELECT ARTIST TO DISPLAY DETAILS")}

                
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