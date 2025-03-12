import { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import GalleryList from "./GalleryList.jsx";
import GalleryDetails from "./GalleryDetails.jsx";
import PaintingList from "./PaintingList.jsx";


const Gallery = () => {    

    const handleFilterChange = (filterType) => {
        setFilterOption(filterType);
    };

    const [galleries, setGalleries] = useState([]);
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [galleryPaintings, setGalleryPaintings] = useState([])
    const [filterOption, setFilterOption] = useState("Title");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/galleries");
                const data = await response.json();

                const GalleriesData = data.map((item) => ({
                    GalleryId: item.galleryId,
                    Name: item.galleryName,
                    NativeName: item.galleryNativeName,
                    City: item.galleryCity,
                    Address: item.galleryAddress,
                    Country: item.galleryCountry,
                    GalleryUrl: item.galleryWebSite,
                    Latitude: item.latitude,
                    Longitude: item.longitude
                }));

                setGalleries(GalleriesData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    const onSelectedGallery = (singleGallery) => {
        console.log(singleGallery)
        setSelectedGallery(singleGallery)   
    }


    useEffect(() => {
        if (selectedGallery) {
            fetchGallery(selectedGallery.GalleryId)
        }
    }, [selectedGallery])


    

    //Runs based on useEffect to retrieve all paintings from the selected artist
    const fetchGallery = async (GalleryId) => {
        try {
            const response = await fetch(`/api/paintings/galleries/${GalleryId}`);
            const data = await response.json();

            const galleryPaintings = data.map((item) => ({
                PaintingId: item.paintingId,
                Title: item.title,
                ImageFileName: `${item.imageFileName}`.padStart(6,0),
                ArtistName: `${item.artists.firstName} ${item.artists.lastName}`,
                YearofWork: item.yearOfWork
            }));
            setGalleryPaintings(galleryPaintings);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    return (
        <>
            {/* DISPLAY NAV BAR */}
            <NavBar/>
            
            <div className="flex h-[calc(100vh-4rem)]">
                {/* Column1 */}
                <GalleryList galleries={galleries} onSelectedGallery={onSelectedGallery}/>

                {/* Column 2 */}
                <GalleryDetails selectedGallery={selectedGallery}/>

                {/* Column 3 */}
                <PaintingList Paintings={galleryPaintings} filterOption={filterOption} handleFilterChange={handleFilterChange}/>
            </div>

            <Footer/>
        </>
    )


}

export default Gallery