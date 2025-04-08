const DisplayModal = ({ painting }) => {
    console.log(painting)
    return (
        <>
            <div className="grid grid-cols-2 w-full">
                <div className="flex flex-col items-center w-full">
                    <img
                        src={`https://res.cloudinary.com/funwebdev/image/upload/w_400/art/paintings/square/${painting.ImageFileName}.jpg`}
                        alt={painting.Title}
                        className="mb-2"
                    />
                    <div>
                        <div><b>Medium:</b> {painting.Medium}</div>
                        <div><b>Dimensions:</b> {painting.Width} x {painting.Height} cm</div>
                        <div><b>CopyRightText:</b> {painting.CopyRightText} </div>
                    </div>
                </div>

                <div className="w-full break-words">
                    <i><b>{painting.Title}</b></i>  <br />
                    <b>By {painting.ArtistName}</b> <br />
                    <b>{painting.YearOfWork}</b> <br /><br />
                  

                    <b>More Information:</b> <br />
                    <b>Location:</b> {painting.GalleryName}, {painting.GalleryCity} <br />

                    <a href={painting.MuseumLink} target="_blank">Visit Museum Site</a><br />

                    {/* If available then hyperlink, else N/A */}
                    {painting.WikiLink === "" ? (
                        <div><b>WikiLink:</b> N/A</div>
                    ) : (
                        <a href={painting.WikiLink} target="_blank">View on Wikipedia</a>
                    )}
                    
                    {/* If available then hyperlink, else N/A */}
                    {painting.Description === "" ? (
                        <div><b>Description:</b> N/A</div>
                    ) : (
                        <div><b>Description:</b> {painting.Description}</div>
                    )} <br />


                    <b>Dominant Colours:</b>

                    <div className="flex">
                        {painting.DominantColours.map((colour, index) => (
                            <div key={index} title={colour.ColourName}
                                className="box-border size-12 border-2 m-1 " style={{ backgroundColor: colour.ColourRGB }}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayModal