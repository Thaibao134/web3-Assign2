import NavBar from "./NavBar";
import Footer from "./Footer";

const Favourites = ({favouriteArtists, favouriteGallery, favouritePaintings}) => {
   
    return (
        <>
           {/* {(console.log(`SENDING FAVOURTES: ${favouriteArtists}`))}
           {(console.log(`SENDING FAVOURTES: ${favouriteGallery}`))} */}
           {(console.log(`SENDING FAVOURTES: ${favouritePaintings}`))}
            <NavBar />
            <div className="flex flex-col items-center">
                <h2>Favourites</h2>
                
                <div className="flex m-3 gap-3">
                    <button className="p-2 bg-gray-300 rounded">Delete Favourites</button>
                    <button className="p-2 bg-gray-300 rounded">Close</button>
                </div>
                
                <div className="grid grid-cols-3 gap-5 w-full text-center">
                    
                    <div>
                        <h3 className="font-bold mb-2">Galleries</h3>
                        <div className="border p-2 ">Gallery Names
                            {favouriteGallery.map((paintings, index) => (
                                <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                                    <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                        {paintings}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h3 className="font-bold mb-2">Artists</h3>
                        <div className="border p-2 ">Artist Names
                            {favouriteArtists.map((paintings, index) => (
                                <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                                    <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                        {paintings}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>





                    <div>
                        <h3 className="font-bold mb-2">Paintings</h3>
                        <div className="border p-2 ">Painting Titles
                            {favouritePaintings.map((paintings, index) => (
                                <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                                    <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                        {paintings}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>





                </div>
            </div>
            <Footer />
        </>

    );
}
export default Favourites