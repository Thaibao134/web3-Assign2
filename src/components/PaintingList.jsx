import ModalPopup from "./Modal";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const PaintingList = ({view, Paintings,filterOption,handleFilterChange, onAddFavPainting}) => { 

    const [showModal, setShowModal] = useState(false);
    const [selectedPainting, setSelectedPainting] = useState(null);

    const handleImageClick = (painting) => {
        setSelectedPainting(painting);
        setShowModal(true);
    };

    let sortedPaintings = Paintings.sort((a, b) => a.Title.localeCompare(b.Title));

    // ARTIST - TITLE,  YEAR                    (THUMBNAIL, TITLE, YEAR)
    // GALLERY - ARTIST NAME , TITLE, YEAR      (THUMBNAIL, NAME, TITLE, YEAR)
    // GENRE - ARTIST NAME, TITLE, YEAR         (THUMBNAIL,  NAME, TITLE, YEAR)

    if (filterOption) {
        switch (filterOption) {
            case 'Title':
                sortedPaintings = Paintings.sort((a, b) => a.Title.localeCompare(b.Title));
                break;
            case 'Year':
                sortedPaintings = Paintings.sort((a, b) => a.YearOfWork - b.YearOfWork);
                break;
            case 'Name':
                sortedPaintings = Paintings.sort((a, b) => a.ArtistName.localeCompare(b.ArtistName));
                break;
            default:
                break;
        }
    }


    const test = (painting) => {
        if (view !== "Artist") {
            return (
                <>
                {painting.ArtistName} <br />
              </>
            );
        } 
    }

    // YOU NEED TO FIX THE FILTERING AND OTHERS AFTER. GENRE GALLERY ARTIST WILL BE PASSTING TO THIS SINGLEW JSX
    return (
        <div className="w-3/6 bg-[#333333] flex justify-center text-white text-xl border-4 border-solid border-[#e8a9a0] ">
            <div>

                {/* <div className="mb-2 bg-purple-500 basis-xs text-center">Add To Favourites</div> */}

                {/* <div className=" basis-xs text-center">All Paintings of Artist</div> */}

                <div className="flex justify-center gap-15 m-4 ">
                    <button className=" mb-1 p-1 border-black border-2 rounded bg-blue-400" onClick={() => handleFilterChange("Name")}>Artist Name</button>
                    <button className=" mb-1 p-1 border-black border-2 rounded bg-blue-400" onClick={() => handleFilterChange("Title")}>Title</button>
                    <button className=" mb-1 p-1 border-black border-2 rounded bg-blue-400" onClick={() => handleFilterChange("Year")}>Year</button>
                </div>

                <div  className="overflow-y-auto max-h-[calc(100vh-10rem)]">
                    {sortedPaintings.map((paintings, index) => (
                        <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                            <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                <div className="flex justify-center max-w-full h-auto ">
                                    <img src={`https://res.cloudinary.com/funwebdev/image/upload/w_400/art/paintings/square/${paintings.ImageFileName}.jpg`} onClick={() => handleImageClick(paintings)}></img>
                                </div>
                                    {test(paintings)}
                                    
                                {/* {paintings.ArtistName} <br /> */}
                                {paintings.Title} <br />

                                {/* ONLY FOR GALLERY */}
                                {paintings.YearOfWork} <br /> 
                            </div>
                        </div>
                    ))}
                </div>

    
                {showModal && <ModalPopup show={showModal} handleClose={() => setShowModal(false)} painting={selectedPainting} onAddFavPainting={onAddFavPainting}  />}

            </div>
        </div>
    )
}

export default PaintingList