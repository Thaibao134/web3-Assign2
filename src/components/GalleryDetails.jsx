import Map from "./Mapping";
import { useState } from "react";

const GalleryDetails = ({selectedGallery, onAddFavGallery}) => {

    const [FavouritePopup, setFavouritePopup] = useState(false)

    const handleAddFavGallery = () => {
        onAddFavGallery(selectedGallery)
        setFavouritePopup(true)
        setTimeout(() => {
            setFavouritePopup(false);
        }, 2500);
    }

    return (
        <div className="w-2/6 bg-green-400 flex justify-center text-white text-xl">
            <div>
                <div>
                    <div className="bg-purple-500 basis-xs m-1 text-center">
                        <button onClick={handleAddFavGallery}>Add To Favourites</button>
                    </div>
                </div>

                {selectedGallery ? (
                    <h5 className="text-black">
                        <b>GalleryName:</b> {selectedGallery.Name} <br />
                        <b>NativeName: </b> {selectedGallery.NativeName} <br />
                        <b>City:</b> {selectedGallery.City} <br />
                        <b>Address:</b> {selectedGallery.Address} <br />
                        <b>Country:</b> {selectedGallery.Country}<br />
                        <b>GalleryUrl:</b> {selectedGallery.GalleryUrl} <br />
                        <b>latitude:</b> {selectedGallery.Latitude}<br />
                        <b>longitude:</b> {selectedGallery.Longitude} <br />
                        <Map longitude={selectedGallery.Longitude} latitude={selectedGallery.Latitude}/>
                    </h5>
                ) : ("SELECT ARTIST TO DISPLAY DETAILS")}
            </div>


            {FavouritePopup && (
                    <div className="popup-message">
                        Added to Favourites!
                    </div>
                )}

        </div>
    )
}

export default GalleryDetails