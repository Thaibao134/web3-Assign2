import Map from "./Mapping";

const GalleryDetails = ({selectedGallery}) => {
    return (
        <div className="w-2/6 bg-green-400 flex justify-center text-white text-xl">
            <div>
                <div>
                    <div className="bg-purple-500 basis-xs m-1 text-center">Add To Favourites</div>
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
        </div>
    )
}

export default GalleryDetails