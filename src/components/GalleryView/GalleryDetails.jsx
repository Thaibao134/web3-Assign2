import Map from "../Commons/Mapping";
import { useState } from "react";

const GalleryDetails = ({selectedGallery, onAddFavGallery}) => {

    const [FavouritePopup, setFavouritePopup] = useState(false)

    //Create a popup when added to favourites with timer
    const handleAddFavGallery = () => {
        onAddFavGallery(selectedGallery.Name)
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
                        <button onClick={handleAddFavGallery}>Add To Favourites</button>
                    </div>
                </div>

                {selectedGallery ? (
                    <h5 className="flex justify-center h-full">
                        <div className="">
                            <b>Gallery Name:</b> {selectedGallery.Name} <br /><br />
                            <b>Local Name: </b> {selectedGallery.NativeName} <br /><br />
                            <b>Full Address: </b> {selectedGallery.Address} {selectedGallery.City} {selectedGallery.Country} <br /><br />


                            {/* If available then hyperlink, else N/A */}
                            {selectedGallery.GalleryUrl === "" ? (
                                <div className="text-white"><b>View Official Site:</b> N/A</div>
                            ) : (
                                <a href={selectedGallery.GalleryUrl} target="_blank" className="text-white">View Official Site</a>
                            )} <br /><br />


                            <Map longitude={selectedGallery.Longitude} latitude={selectedGallery.Latitude} />
                            <b>Coordinates:</b> {selectedGallery.Latitude}, {selectedGallery.Longitude} <br /><br />
                        </div>
                    </h5>
                ) : ("Select gallery to display further details")}
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