import Map from "./Mapping";
import { useState } from "react";

const GalleryDetails = ({selectedGallery, onAddFavGallery}) => {

    const [FavouritePopup, setFavouritePopup] = useState(false)

    const handleAddFavGallery = () => {
        onAddFavGallery(selectedGallery.Name)
        setFavouritePopup(true)
        setTimeout(() => {
            setFavouritePopup(false);
        }, 2000);
    }

    return (
        <div className="w-2/6 bg-[#333333] flex justify-center text-white text-xl border-4 border-solid border-[#e8a9a0]">
            <div>
                <div>
                <div className="bg-blue-400 m-2 text-center w-auto py-2 m-4 rounded">
                        <button onClick={handleAddFavGallery}>Add To Favourites</button>
                    </div>
                </div>

                {selectedGallery ? (
                    <h5 className="flex justify-center items-center text-center">
                        <div className="">
                            <b>GalleryName:</b> {selectedGallery.Name} <br />
                            <b>NativeName: </b> {selectedGallery.NativeName} <br />
                            <b>City:</b> {selectedGallery.City} <br />
                            <b>Address:</b> {selectedGallery.Address} <br />
                            <b>Country:</b> {selectedGallery.Country}<br />
                            <b>GalleryUrl:</b> {selectedGallery.GalleryUrl} <br />
                            <b>latitude:</b> {selectedGallery.Latitude}<br />
                            <b>longitude:</b> {selectedGallery.Longitude} <br />
                            <Map longitude={selectedGallery.Longitude} latitude={selectedGallery.Latitude}/>
                        </div>
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