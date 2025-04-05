import { useState, useEffect } from 'react';
import NavBar from "../Commons/NavBar.jsx";
import Footer from "../Commons/Footer.jsx";
import GalleryList from "./GalleryList.jsx";
import GalleryDetails from "./GalleryDetails.jsx";
import PaintingList from "../Commons/PaintingList.jsx";

const Gallery = ({onAddFavGallery, onAddFavPainting}) => {    

    const handleFilterChange = (filterType) => {
        setFilterOption(filterType);
    };

    const [galleries, setGalleries] = useState([]);
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [galleryPaintings, setGalleryPaintings] = useState([])
    const [filterOption, setFilterOption] = useState("Title");

    //When entering page, pull up entire galleries List
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


    // If an gallery name was clicked, set that selected gallery
    const onSelectedGallery = (singleGallery) => {
        console.log(singleGallery)
        setSelectedGallery(singleGallery)   
    }


    //Runs if a selected SelectedGallery has been updated
    useEffect(() => {
        if (selectedGallery) {
            fetchGallery(selectedGallery.GalleryId)
        }
    }, [selectedGallery])


    
    //Retrieve all paintings from the selected gallery
    const fetchGallery = async (GalleryId) => {
        try {
            const response = await fetch(`/api/paintings/galleries/${GalleryId}`);
            const data = await response.json();
    
            const galleryPaintings = data.map((item) => {
                const annotations = JSON.parse(item.jsonAnnotations);
    
                return {
                    PaintingId: item.paintingId,
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
            setGalleryPaintings(galleryPaintings);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    return (
        <>
            <NavBar />

            <div className="bg-[#e8a9a0] py-4">
                <div className="flex h-screen m-16 ">
                    <GalleryList galleries={galleries} onSelectedGallery={onSelectedGallery} />
                    <GalleryDetails selectedGallery={selectedGallery} onAddFavGallery={onAddFavGallery} />
                    <PaintingList Paintings={galleryPaintings} filterOption={filterOption} handleFilterChange={handleFilterChange} onAddFavPainting={onAddFavPainting} />
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Gallery