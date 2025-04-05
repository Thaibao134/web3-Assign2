import { useState, useEffect } from 'react';
import NavBar from "../Commons/NavBar";
import ArtistList from "./ArtistList"
import ArtistDetails from "./ArtistDetails";
import PaintingList from "../Commons/PaintingList";
import Footer from "../Commons/Footer";


const Artist = ({onAddFavArtist, onAddFavPainting}) => {
    
    // Filter title, year, or paintingID
    const handleFilterChange = (filterType) => {
        setFilterOption(filterType);
    };


    const [artist, setArtist] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [artistPaintings, setArtistPaintings] = useState([]);
    const [filterOption, setFilterOption] = useState("Title");


    //When entering page, pull up entire artist List
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/artists");
                const data = await response.json();

                const ArtistData = data.map((item) => ({
                    ArtistID: item.artistId,
                    FirstName: item.firstName,
                    LastName: item.lastName,
                    Nationality: item.nationality,
                    Gender: item.gender,
                    YearOfBirth: item.yearOfBirth,
                    YearOfDeath: item.yearOfDeath,
                    Details: item.details,
                    ArtistLink: item.artistLink
                }));
                setArtist(ArtistData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    // If an artist name was clicked, set that selected artist
    const onSelectedArtist = (singleArtist) => {
        setSelectedArtist(singleArtist)
    }


    //Runs if a selected SelectedArtist has been updated
    useEffect(() => {
        if (selectedArtist) {
            fetchPaintings(selectedArtist.ArtistID);
        }
    }, [selectedArtist]);


    //Retrieve all paintings from the selected artist
    const fetchPaintings = async (artistId) => {
        try {
            const response = await fetch(`/api/paintings/artist/${artistId}`);
            const data = await response.json();
    
            //parse string TO json
            const PaintingData = data.map((item) => {
                const annotations = JSON.parse(item.jsonAnnotations);
    
                return {
                    PaintingID: item.paintingId,
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
    
            setArtistPaintings(PaintingData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    return (
        <>
            <NavBar/>

            <div className="bg-[#e8a9a0] py-4">
                <div className="flex h-screen m-16 ">
                    <ArtistList artists={artist} onSelectedArtist={onSelectedArtist}/>
                    <ArtistDetails selectedArtist={selectedArtist} onAddFavArtist={onAddFavArtist}/>
                    <PaintingList view="Artist" Paintings={artistPaintings } filterOption={filterOption} handleFilterChange={handleFilterChange} 
                    onAddFavPainting={onAddFavPainting}/>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Artist