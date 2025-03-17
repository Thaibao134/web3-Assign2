import { useState } from "react";
import Favourites from "./Favourites";

const ArtistDetails = ({selectedArtist, onAddFavArtist}) => {

    return (
        <div className="w-2/6 bg-green-400 flex justify-center text-white text-xl">
            <div>
                <div>
                    <div className="bg-purple-500 basis-xs m-1 text-center">
                        <button onClick={() => onAddFavArtist(selectedArtist)}> Add To Favourites</button>
                    </div>
                </div>

                {selectedArtist ? (
                    <h5 className="text-black">
                        <b>FirstName:</b> {selectedArtist.FirstName} <br />
                        <b>LastName: </b> {selectedArtist.LastName} <br />
                        <b>Nationality:</b> {selectedArtist.Nationality} <br />
                        <b>Gender:</b> {selectedArtist.Gender} <br />
                        <b>YearOfBirth:</b> {selectedArtist.YearOfBirth}<br />
                        <b>YearOfDeath:</b> {selectedArtist.YearOfDeath} <br />
                        <b>Details:</b> {selectedArtist.Details}<br />
                        <b>ArtistLink:</b> {selectedArtist.ArtistLink} <br />
                    </h5>
                ) : ("SELECT ARTIST TO DISPLAY DETAILS")}


            </div>
        </div>
    )
}

export default ArtistDetails