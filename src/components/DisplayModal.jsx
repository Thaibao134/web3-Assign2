const DisplayModal = ({painting}) => {
    return (
        <>
            <div className="grid grid-cols-2 w-full">
                
                <div className="flex justify-center items-center w-full ">
                    <img src={`https://res.cloudinary.com/funwebdev/image/upload/w_400/art/paintings/square/${painting.ImageFileName}.jpg`}></img>
                </div>
                
            
                <div className="w-full break-words">
                    <b>Painting Title:</b> {painting.Title} <br />
                    <b>ArtistName:</b> {painting.ArtistName} <br />
                    <b>YearOfWork:</b> {painting.YearOfWork} <br />
                    <b>Medium:</b> {painting.Medium} <br />
                    <b>Width:</b> {painting.Width} <br />
                    <b>Height:</b> {painting.Height} <br />
                    <b>GalleryName:</b> {painting.GalleryName} <br />
                    <b>GalleryCity:</b> {painting.GalleryCity} <br />
                    <b>MuseumLink:</b> {painting.MuseumLink} <br />
                    <b>WikiLink:</b> {painting.WikiLink} <br />
                    <b>Description:</b> {painting.Description} <br />
                    <b>CopyRightText:</b> {painting.CopyRightText} <br />
                </div>



            </div>
           
           
        </>
    )
}

export default DisplayModal