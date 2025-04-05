import { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import ModalPopup from './Modal';



const Paintings = ({onAddFavPainting}) => {    

    const [data, setData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("");




    const [showModal, setShowModal] = useState(false);
    const [selectedPainting, setSelectedPainting] = useState(null);

    const handleImageClick = (painting) => {
        setSelectedPainting(painting);
        setShowModal(true);
    };


    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedArtist, setSelectedArtist] = useState("");
    const [selectedGallery, setSelectedGallery] = useState("");
    const [selectedYear, setSelectedYear] = useState("");


    const handleFilterChange = (props) => {
        setSelectedFilter(props.target.value)
    }


    const [hasClickedSort, setHasClickedSort] = useState(false);
    const [FilteredPaitnings, setFilteredPaitnings] = useState([])

    
    const filterPaintings = (props) => {
        setHasClickedSort(true)
        if (props == "Title") {
            const filtered = data.filter(p => p.Title.toLowerCase().includes(selectedTitle.toLowerCase()));

            setFilteredPaitnings(filtered)


        } else if (props == "year") {
            console.log("IMA YEASR")

        } else if (props == "Artist") {
            const filtered = data.filter(p => p.ArtistName.toLowerCase().includes(selectedArtist.toLowerCase()));
            console.log(filtered)
            setFilteredPaitnings(filtered)

        }  else if (props == "Gallery") {
            console.log("IMA Gallery")
        }
    }


    const test = () => {
        const allArtistNames = data.map(p => p.ArtistName);
        const uniqueArtistNames = [...new Set(allArtistNames)];
        console.log(uniqueArtistNames)
    }



    const clearAll = () => {
        setSelectedTitle("")
        setSelectedGallery("")
        setSelectedArtist("")
        setSelectedYear("")

    }

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/paintings");
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
            <NavBar/>
            <div className="grid grid-cols-5">  


                <h1 className="col-span-2 border-solid border-2 ">
                    <div className="flex justify-center m-3 border-solid border-2 ">Painting Filter</div>

                        <fieldset className="">

                            <div className='flex items-center justify-center'>
                                <input className="w-10 h-6" type="radio" id="Title" name="filter" value="Title" onChange={handleFilterChange}/>
                                <label htmlFor="Title" className='w-35'>Title: </label>
                                <input className={`border-solid border-black border-2 m-2 ${selectedFilter !== "Title" ? "bg-gray-200" : " "}`} htmlFor="Title" type="text" id="Title" name="filter" disabled={selectedFilter !== "Title"} value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)}/>
                            </div>

                            <div className='flex items-center justify-center '>
                                <input  className="w-10 h-6"type="radio" id="Year" name="filter" value="Year" onChange={handleFilterChange} />
                                <label htmlFor="Year" className='w-35'>Year:</label>
                                <input className={`border-solid bolrder-black border-2 m-2 ${selectedFilter !== "Year" ? "bg-gray-200" : " "}`} type="text" id="Year" name="filter" disabled={selectedFilter !== "Year"} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}/>
                            </div>

                            <div className='flex items-center justify-center'>
                                <input  className="w-10 h-6"type="radio" id="Gallery" name="filter" value="Gallery" onChange={handleFilterChange} />
                                <label htmlFor="Gallery" className='w-35'>Gallery:</label>
                                <input className={`border-solid bolrder-black border-2 m-2 ${selectedFilter !== "Gallery" ? "bg-gray-200" : " "}`} type="text" id="Year" name="filter" disabled={selectedFilter !== "Gallery"} value={selectedGallery} onChange={(e) => setSelectedGallery(e.target.value)}/>
                            </div>

                            <div className='flex items-center justify-center'>
                                <input className="w-10 h-6" type="radio" id="Artist" name="filter" value="Artist" onChange={handleFilterChange}/>
                                <label htmlFor="Artist" className='w-35'>Artist: </label>
                                
                                
                                <input className={`border-solid border-black border-2 m-2 ${selectedFilter !== "Artist" ? "bg-gray-200" : " "}`} type="text" id="Artist" name="filter" disabled={selectedFilter !== "Artist"} value={selectedArtist} onChange={(e) => setSelectedArtist(e.target.value)}/>
                                
                            </div>

                            <div className='flex justify-center'>
                                    <button className="border-solid border-2 m-2 p-2" onClick={clearAll}>Clear</button>


                                    <button className="border-solid border-2 m-2 p-2" onClick={() => filterPaintings(selectedFilter)}>Sort By</button>
                            </div>
                        </fieldset>
                </h1>








                <h1 className="col-span-3  border-solid bolrder-black border-2">

                    <div className="grid grid-cols-4 max-h-screen overflow-y-auto" >



                        {hasClickedSort && FilteredPaitnings.length === 0 ? (
                                    <div className="col-span-4 text-center text-red-500 font-bold">
                                        No search results found.
                                    </div>
                            ):

                            (FilteredPaitnings.length > 0 ? FilteredPaitnings : data).map((paintings, index) => (
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
                {showModal && <ModalPopup show={showModal} handleClose={() => setShowModal(false)} painting={selectedPainting} onAddFavPainting={onAddFavPainting}/>}

            </div>
            <Footer/>
        </>

    );
}

export default Paintings;
