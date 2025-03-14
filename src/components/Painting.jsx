import { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";

const Gallery = () => {    

    const [data, setData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("");



    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedArtist, setSelectedArtist] = useState("");
    const [selectedGallery, setSelectedGallery] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const handleFilterChange = (props) => {
        setSelectedFilter(props.target.value)
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

                const PaintingData = data.map((item) => ({
                    Title: item.title,
                    ImageFileName: `${item.imageFileName}`.padStart(6,0),
                    ArtistName: `${item.artists.firstName} ${item.artists.LastName}`,
                    YearOfWork: item.yearOfWork,
                    Medium: item.medium,
                    Width: item.width,
                    Height: item.height,
                    GalleryName: item.galleries.galleryName,
                    GalleryCity: item.galleries.galleryCity,
                    MuseumLink: item.museumLink,
                    WikiLink: item.wikiLink,
                    Description: item.description,
                    CopyRightText: item.copyrightText
                }));

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
                                <input className={`border-solid bolrder-black border-2 m-2 ${selectedFilter !== "Artist" ? "bg-gray-200" : " "}`} type="text" id="Artist" name="filter" disabled={selectedFilter !== "Artist"} value={selectedArtist} onChange={(e) => setSelectedArtist(e.target.value)}/>
                                
                            </div>

                            <div className='flex justify-center'>
                                    <button className="border-solid border-2 m-2 p-2" onClick={clearAll}>Clear</button>

                                    <button className="border-solid border-2 m-2 p-2">Filter</button>
                            </div>
                        </fieldset>
                </h1>



                <h1 className="col-span-3  border-solid bolrder-black border-2">

                    <div className="grid grid-cols-4 max-h-screen overflow-y-auto" >

                    {data.map((paintings, index) => (
                        <div className="hover:bg-sky-700 cursor-pointer " key={index}>
                            <div className="m-1 p-2 border-black border-2 overflow-auto flex flex-col text-center overflow">
                                <div className="flex justify-center max-w-full h-auto ">
                                    <img src={`https://res.cloudinary.com/funwebdev/image/upload/w_400/art/paintings/square/${paintings.ImageFileName}.jpg`} onClick={() => handleImageClick(paintings)}></img>
                                </div>
    
                                {paintings.Title} <br />

                                {paintings.YearOfWork} <br /> 
                            </div>
                        </div>
                    ))}
                    </div>
                    
                </h1>

            </div>
            <Footer/>
        </>
        // <div>
        //     <h1>PaintingView</h1>
        //     <button onClick={handleRedirectTest}>Click Me to Main Menu</button>
        //     <h1>{data?.length || 0}</h1>

        //     <h2>Seasons Data:</h2>
        //     {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        // </div>
    );
}

export default Gallery;
