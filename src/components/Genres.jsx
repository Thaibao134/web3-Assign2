import { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import PaintingList from "./PaintingList";
import GenreList from './GenreList';
import GenreDetails from './GenreDetails';
import Footer from "./Footer";


const Genres = ({onAddFavPainting}) => {

    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null)
    const [genrePaintings, setGenrePaintings] = useState([])
    const [filterOption, setFilterOption] = useState("Title")

    const handleFilterChange = (filterType) => {
        setFilterOption(filterType);
    };


    const onSelectedGenre = (selectedGenre) => {
        console.log(selectedGenre);
        setSelectedGenre(selectedGenre)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/genres");
                const data = await response.json();
    
                const GenreData = data.map((item) => ({
                    GenreId: item.genreId,
                    GenreName: item.genreName,
                    Description: item.description,
                    WikiLink: item.wikiLink,
                    EraName: item.eras.eraName,
                    EraYears: item.eras.eraYears,
                }));
    
                setGenres(GenreData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    //Runs if a selected SelectedGenre has been updated
    useEffect(() => {
        if (selectedGenre) {
            fetchPaintings(selectedGenre.GenreId);
        }
    }, [selectedGenre]);


    //Runs based on useEffect to retrieve all paintings from the selected artist
    const fetchPaintings = async (genreId) => {
        try {
            const response = await fetch(`/api/paintings/genre/${genreId}`);
            const data = await response.json();

            const PaintingData = data.map((item) => {
                const annotations = JSON.parse(item.jsonAnnotations);

                return {
                    PaintingID: item.paintingId,
                    Title: item.title,
                    YearOfWork: item.yearOfWork,
                    ArtistName: `${item.artists.firstName} ${item.artists.lastName}`,
                    ImageFileName: `${item.imageFileName}`.padStart(6, 0),
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
            setGenrePaintings(PaintingData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };



    return (
        <>
            <NavBar />

            <div className="bg-[#e8a9a0] py-4">
                <div className="flex h-screen m-16 ">

                <GenreList genres={genres} onSelectedGenre={onSelectedGenre} />

                <GenreDetails selectedGenre={selectedGenre} />

                <PaintingList Paintings={genrePaintings} filterOption={filterOption} handleFilterChange={handleFilterChange} onAddFavPainting={onAddFavPainting}/>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Genres