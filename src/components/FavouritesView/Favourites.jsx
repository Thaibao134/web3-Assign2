import NavBar from "../Commons/NavBar";
import Footer from "../Commons/Footer";
import DeleteModalPopup from "../Modals/DisplayDeleteModal";
import { useState } from 'react';


const Favourites = ({favouriteArtists, favouriteGallery, favouritePaintings, onDeleteItem}) => {
   
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedColumn, setSelectedColumn] = useState(null);

    // set the favourites as well as name of category
    const handleItemClick = (painting, Column) => {
        setSelectedItem(painting);
        setSelectedColumn(Column);
        setShowModal(true);
      };
      

    return (
        <>
            <NavBar />
            <div className="flex flex-col items-center m-3 gap-3">
                <h2>Favourites</h2>

                {/* Galleries Category */}
                <div className="grid grid-cols-3 gap-5 w-full text-center">
                    <div>
                        <h3 className="font-bold mb-2">Galleries</h3>
                        <div className="border p-2 ">Gallery Names
                            {favouriteGallery.map((paintings, index) => (
                                <div className="cursor-pointer " key={index}>
                                    <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow hover:bg-sky-700"
                                        onClick={() => handleItemClick(paintings, "Gallery")}>
                                        {paintings}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Artist Category */}
                    <div>
                        <h3 className="font-bold mb-2">Artists</h3>
                        <div className="border p-2 ">Artist Names
                            {favouriteArtists.map((paintings, index) => (
                                <div className="cursor-pointer " key={index}>
                                    <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow hover:bg-sky-700"
                                        onClick={() => handleItemClick(paintings, "Artist")}>
                                        {paintings}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Paintings Category */}
                    <div>
                        <h3 className="font-bold mb-2">Paintings</h3>
                        <div className="border p-2 ">Painting Titles
                            {favouritePaintings.map((paintings, index) => (
                                <div className="cursor-pointer " key={index}>
                                    <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow hover:bg-sky-700"
                                        onClick={() => handleItemClick(paintings, "Painting")}>
                                        {paintings}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Display the delete popup */}
                    {showModal && (<DeleteModalPopup show={showModal} handleClose={() => setShowModal(false)} painting={selectedItem} column={selectedColumn} onDeleteItem={onDeleteItem} />)}
                </div>
            </div>
            <Footer />
        </>

    );
}
export default Favourites