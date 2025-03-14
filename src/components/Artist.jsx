import { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import ArtistList from "./ArtistList"
import ArtistDetails from "./ArtistDetails";
import PaintingList from "./PaintingList";
import Footer from "./Footer";


const Artist = () => {
    // Filter title, year, or paintingID
    const handleFilterChange = (filterType) => {
        setFilterOption(filterType);
    };


    const [artist, setArtist] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [artistPaintings, setArtistPaintings] = useState([]);
    const [filterOption, setFilterOption] = useState("Title");


    //When entering page, it will pull up entire artist List
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
        console.log(singleArtist);
        setSelectedArtist(singleArtist)
    }


    //Runs if a selected SelectedArtist has been updated
    useEffect(() => {
        if (selectedArtist) {
            fetchPaintings(selectedArtist.ArtistID);
        }
    }, [selectedArtist]);


    //Runs based on useEffect to retrieve all paintings from the selected artist
    const fetchPaintings = async (artistId) => {
        try {
            const response = await fetch(`/api/paintings/artist/${artistId}`);
            const data = await response.json();

            const PaintingData = data.map((item) => ({
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
            }));
            setArtistPaintings(PaintingData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };



    return (
        <>
            {/* DISPLAY NAV BAR */}
            <NavBar/>
            {/* <div className="flex h-[calc(100vh-4rem)]"> */}

            
            <div className="flex h-screen">
                {/* COLUMN 1 THAT DISPLAYS THE ARTIST LIST */}
                <ArtistList artists={artist} onSelectedArtist={onSelectedArtist}/>

                {/* COLUMN 2 THAT DISPLAYS THE ARTIST DETAILS */}
                <ArtistDetails selectedArtist={selectedArtist}/>

                {/* COLUMN 3 THAT DISPLAYS ALL ARTIST PAINTINGS */}
                <PaintingList view="Artist" Paintings={artistPaintings } filterOption={filterOption} handleFilterChange={handleFilterChange}/>
            </div>

            <Footer/>
        </>
    )
}

export default Artist