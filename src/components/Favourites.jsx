import NavBar from "./NavBar";
import Footer from "./Footer";

const Favourites = ({favouriteArtists, favouriteGallery, favouritePaintings}) => {
   
    return (
        <>
           {(console.log(favouriteArtists))}
        {(console.log(favouriteGallery))}
            {/* {(console.log(favouritePaintings))} */}
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
                        <div className="border p-2 ">Gallery names
                            {favouriteGallery.map((paintings, index) => (
                                <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                                    <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                        {paintings.Name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h3 className="font-bold mb-2">Artists</h3>
                        <div className="border p-2 ">artist names
                            {favouriteArtists.map((paintings, index) => (
                                <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                                    <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                        {paintings.FirstName + " " + paintings.LastName}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>





                    <div>
                        <h3 className="font-bold mb-2">Paintings</h3>
                        <div className="border p-2 ">Painting titles
                            {favouritePaintings.map((paintings, index) => (
                                <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                                    <div className="m-3 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                        {paintings.Title}
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