import { useState, useEffect } from 'react';
import NavBar from "../Commons/NavBar";
import PaintingList from "../Commons/PaintingList";
import GenreList from './GenreList';
import GenreDetails from './GenreDetails';
import Footer from "../Commons/Footer";


const Genres = ({onAddFavPainting}) => {

    // Filter title, year, or paintingID
    const handleFilterChange = (filterType) => {
        setFilterOption(filterType);
    };


    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null)
    const [genrePaintings, setGenrePaintings] = useState([])
    const [filterOption, setFilterOption] = useState("Title")
    const [FavouritePopup, setFavouritePopup] = useState(false)

    const handleAddToFavourites = () => {
        setFavouritePopup(true);

        setTimeout(() => {
            setFavouritePopup(false);
        }, 2000);
    };

    //When entering page, pull up entire genres List
    useEffect(() => {

            const fetchData = async () => {
                        // Check if in local storage, else pull from API
        const storedGenres = localStorage.getItem('genreData');

        if (storedGenres) {
            setGenres(JSON.parse(storedGenres));
        } else {

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
                    localStorage.setItem('genreData', JSON.stringify(GenreData));
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };
        fetchData();
    }, []);

    // If an genre name was clicked, set that selected genre
    const onSelectedGenre = (selectedGenre) => {
        console.log(selectedGenre);
        setSelectedGenre(selectedGenre)
    }


    //Runs if a selected SelectedGenre has been updated
    useEffect(() => {
        if (selectedGenre) {
            fetchPaintings(selectedGenre.GenreId);
        }
    }, [selectedGenre]);


    //Retrieve all paintings from the selected genre
    const fetchPaintings = async (genreId) => {

        // Check if in local storage, else pull from API
        const storedPaintings = localStorage.getItem(`Genre_${genreId}_Paintings`);

        if (storedPaintings) {
            setGenresPaintings(JSON.parse(storedPaintings));
        } else {
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
                localStorage.setItem(`Genre_${genreId}_Paintings}`, JSON.stringify(PaintingData));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    };



    return (
        <>
            <NavBar />

            <div className="bg-[#e8a9a0] py-4">
                <div className="flex h-screen m-16 ">
                <GenreList genres={genres} onSelectedGenre={onSelectedGenre} />
                <GenreDetails selectedGenre={selectedGenre} />
                <PaintingList Paintings={genrePaintings} filterOption={filterOption} handleFilterChange={handleFilterChange} 
                onAddFavPainting={onAddFavPainting} handleAddToFavourites={handleAddToFavourites} />
                </div>
            </div>

            {FavouritePopup && (
                    <div className="popup-message">
                        Added to Favourites!
                    </div>
                )}

            <Footer />
        </>
    )
}

export default Genres