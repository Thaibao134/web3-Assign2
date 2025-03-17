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

            const PaintingData = data.map((item) => ({
                PaintingID: item.paintingId,
                Title: item.title,
                YearOfWork: item.yearOfWork,
                ArtistName: `${item.artists.firstName} ${item.artists.lastName}`,
                ImageFileName: `${item.imageFileName}`.padStart(6, 0),

            }));
            setGenrePaintings(PaintingData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };





    return (
        <>
            <NavBar />

            {/* THIS CAUSES PROBLEMS */}
            <div className="flex h-screen">

                <GenreList genres={genres} onSelectedGenre={onSelectedGenre} />

                <GenreDetails selectedGenre={selectedGenre} />

                <PaintingList Paintings={genrePaintings} filterOption={filterOption} handleFilterChange={handleFilterChange} onAddFavPainting={onAddFavPainting}/>
            </div>
            <Footer />
        </>
    )
}

export default Genres