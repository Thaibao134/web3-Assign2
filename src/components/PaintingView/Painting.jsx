import { useState, useEffect } from 'react';
import NavBar from "../Commons/NavBar";
import Footer from "../Commons/Footer";
import ModalPopup from '../Modals/DisplayPaintingModal';


const Paintings = ({onAddFavPainting}) => {    


    const [data, setData] = useState([]); //contains all paintings
    const [showModal, setShowModal] = useState(false);
    const [FavouritePopup, setFavouritePopup] = useState(false)

      // popup to show favourite has been added
    const handleAddToFavourites = () => {
        setFavouritePopup(true);

        setTimeout(() => {
            setFavouritePopup(false);
        }, 2000);
    };

    // If a painting has been clicked, then set the painting and show popup
    const [selectedPainting, setSelectedPainting] = useState(null);
    const handleImageClick = (painting) => {
        setSelectedPainting(painting);
        setShowModal(true);
    };

    // set the value based on what is inputted
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedArtist, setSelectedArtist] = useState("");
    const [selectedGallery, setSelectedGallery] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedYear2, setSelectedYear2] = useState("");



    //holds name of filter
    const [selectedFilter, setSelectedFilter] = useState("");
    //set the filter name
    const handleFilterChange = (props) => {
        console.log(props.target.value)
        setSelectedFilter(props.target.value)

    }


    
    const [hasClickedSort, setHasClickedSort] = useState(false);
    const [FilteredPaintings, setFilteredPaintings] = useState([]) //Holds the new array of filtered paintings

    
    // sort all paintings based on the filters
    const filterPaintings = (props) => {
        setHasClickedSort(true)
        if (props == "Title") {
            const filtered = data.filter(p => p.Title.toLowerCase().includes(selectedTitle.toLowerCase()));
            setFilteredPaintings(filtered)

        } else if (props == "Year") {
            const filtered = data.filter(p => {
                return (
                    (selectedYear ? p.YearOfWork <= selectedYear : true) &&
                    (selectedYear2 ? p.YearOfWork >= selectedYear2 : true)
                );
            });
            setFilteredPaintings(filtered)

        } else if (props == "Artist") {
            const filtered = data.filter(p => p.ArtistName.toLowerCase().includes(selectedArtist.toLowerCase()));
            setFilteredPaintings(filtered)

        }  else if (props == "Gallery") {
            const filtered = data.filter(p => p.GalleryName.toLowerCase().includes(selectedGallery.toLowerCase()));
            setFilteredPaintings(filtered)
        }
    }

    //clear all filters
    const clearAll = () => {
        setSelectedTitle("")
        setSelectedGallery("")
        setSelectedArtist("")
        setSelectedYear("")
        setSelectedYear2("")
        setFilteredPaintings([]); 
        setHasClickedSort(false);
    }

    //When entering page, pull up entire paintings List
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://web3-assignment1.onrender.com/api/paintings");
                const data = await response.json();

                const PaintingData = data.map((item) => {
                    const annotations = JSON.parse(item.jsonAnnotations);

                    return {
                        Title: item.title,
                        ImageFileName: `${item.imageFileName}`.padStart(6, 0),
                        ArtistName: `${item.artists.firstName} ${item.artists.lastName}`,
                        YearOfWork: item.yearOfWork,
                        Medium: item.medium,
                        Width: item.width,
                        Height: item.height,
                        GalleryName: item.galleries.galleryName,
                        GalleryCity: item.galleries.galleryCity,
                        MuseumLink: item.museumLink,
                        WikiLink: item.wikiLink,
                        Description: item.description,
                        CopyRightText: item.copyrightText,

                        DominantColours: annotations.dominantColors.map(colorObj => ({
                            ColourRGB: `rgb(${colorObj.color.red}, ${colorObj.color.green}, ${colorObj.color.blue})`,
                            ColourName: colorObj.name
                        }))

                    };
                });

                setData(PaintingData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
      
    return (
        <>
            <NavBar />
            <div className="grid grid-cols-5">

                <h1 className="col-span-2 border-solid border-2 ">
                    <div className="flex justify-center m-3 border-solid border-2 ">Painting Filter</div>

                    <fieldset className="">

                        <div className='flex items-center justify-center'>
                            <input className="w-10 h-6" type="radio" id="Title" name="filter" value="Title" onChange={handleFilterChange} />
                            <label htmlFor="Title" className='w-35'>Title: </label>
                            <input className={`border-solid border-black border-2 m-2 ${selectedFilter !== "Title" ? "bg-gray-200" : " "}`} type="text" id="Title" name="filter" disabled={selectedFilter !== "Title"} value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)} />
                        </div>


                        <div className='flex items-center justify-center'>
                            <input className="w-10 h-6" type="radio" id="Artist" name="filter" value="Artist" onChange={handleFilterChange} />
                            <label htmlFor="Artist" className='w-35'>Artist: </label>
                            <input className={`border-solid border-black border-2 m-2 ${selectedFilter !== "Artist" ? "bg-gray-200" : " "}`} type="text" id="Artist" name="filter" disabled={selectedFilter !== "Artist"} value={selectedArtist} onChange={(e) => setSelectedArtist(e.target.value)} />
                        </div>


                        <div className='flex items-center justify-center'>
                            <input className="w-10 h-6" type="radio" id="Gallery" name="filter" value="Gallery" onChange={handleFilterChange} />
                            <label htmlFor="Gallery" className='w-35'>Gallery:</label>
                            <input className={`border-solid border-black border-2 m-2 ${selectedFilter !== "Gallery" ? "bg-gray-200" : " "}`} type="text" id="Year" name="filter" disabled={selectedFilter !== "Gallery"} value={selectedGallery} onChange={(e) => setSelectedGallery(e.target.value)} />
                        </div>


                        <div className="flex items-center justify-center flex-o">
                            <input className="w-10 h-6" type="radio" id="YearRadio" name="filter" value="Year" onChange={handleFilterChange} />
                            <label htmlFor="YearRadio" className="w-35">Year:</label>

                            <div className="flex flex-col items-center">
                                <label htmlFor="YearRadio" className="">Greater Than But Equal To:</label>
                                <input
                                    className={`border-solid border-black border-2 m-2 ${selectedFilter !== "Year" ? "bg-gray-200" : ""}`}
                                    type="text"
                                    id="Year2"
                                    name="filter"
                                    disabled={selectedFilter !== "Year"}
                                    value={selectedYear2}
                                    onChange={(e) => setSelectedYear2(e.target.value)}
                                />

                                <label htmlFor="YearRadio" className="">Less Than But Equal To:</label>
                                <input
                                    className={`border-solid border-black border-2 m-2 ${selectedFilter !== "Year" ? "bg-gray-200" : ""}`}
                                    type="text"
                                    id="Year"
                                    name="filter"
                                    disabled={selectedFilter !== "Year"}
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* CLEAR AND FILTER */}
                        <div className='flex justify-center'>
                            <button className="border-solid border-2 m-2 p-2" onClick={clearAll}>Clear</button>
                            <button className="border-solid border-2 m-2 p-2" onClick={() => filterPaintings(selectedFilter)}>Filter</button>
                        </div>
                    </fieldset>
                </h1>


                {/* Display Data base filters and no filters */}
                <h1 className="col-span-3 border-solid border-black border-2">
                    <div className="grid grid-cols-4 max-h-screen overflow-y-auto" >
                        {hasClickedSort && FilteredPaintings.length === 0 ? (
                            <div className="col-span-4 text-center text-red-500 font-bold"> No search results found. </div>
                        ) :
                            (FilteredPaintings.length > 0 ? FilteredPaintings : data).map((paintings, index) => (
                                <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                                    <div className="m-1 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                        <div className="flex justify-center max-w-full h-auto ">
                                            <img src={`https://res.cloudinary.com/funwebdev/image/upload/w_400/art/paintings/square/${paintings.ImageFileName}.jpg`} onClick={() => handleImageClick(paintings)}></img>
                                        </div>
                                        {paintings.Title} <br />
                                        {paintings.YearOfWork} <br />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </h1>

                {showModal && <ModalPopup show={showModal} handleClose={() => setShowModal(false)} painting={selectedPainting} 
                onAddFavPainting={onAddFavPainting} handleAddToFavourites={handleAddToFavourites}/>}

            </div>

            {FavouritePopup && (
                    <div className="popup-message">
                        Added to Favourites!
                    </div>
                )}

            <Footer />
        </>

    );
}

export default Paintings;
