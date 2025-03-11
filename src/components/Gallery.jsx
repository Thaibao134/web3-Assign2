import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Gallery = () => {    
    const navigate = useNavigate();
    
    const handleRedirectTest = () => {
        navigate("/");
    }

 const [galleries, setGalleries] = useState(null);
      
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/galleries");
                const data = await response.json();

                const GalleriesData = data.map((item) => ({
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

    return (
        <div>
            <h1>GalleryView</h1>
            <button onClick={handleRedirectTest}>Click Me to Main Menu</button>
            {galleries ? <pre>{JSON.stringify(galleries, null, 2)}</pre> : 'Loading...'}
        </div>
    )


}

export default Gallery