import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Gallery = () => {    
    const navigate = useNavigate();

    const handleRedirectTest = () => {
        navigate("/");
    }



    const [data, setData] = useState(null);
      
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/paintings");
                const data = await response.json();

                const PaintingData = data.map((item) => ({
                    Title: item.title,
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
        <div>
            <h1>PaintingView</h1>
            <button onClick={handleRedirectTest}>Click Me to Main Menu</button>
            <h1>{data?.length || 0}</h1>

            <h2>Seasons Data:</h2>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
}

export default Gallery;
