import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import ArtistList from "./ArtistList"


const Artist = () => {    
    const navigate = useNavigate();

    const handleSignintoLoginScreen = (event) => {
        event.preventDefault();
        navigate("/");
    };

    const [artist, setArtist] = useState([]);
    const[selectedArtist, setSelectedArtist] = useState(null)
    const[artistPaintings, setArtistPaintings] = useState([]);


    const onSelectedArtist =(singleArtist) => {
        console.log(singleArtist);
        setSelectedArtist(singleArtist)
    }


    //Run if a selected painting has been changed
    useEffect(() => {
        if (selectedArtist) {
            fetchPaintings(selectedArtist.ArtistID);
        }    }, [selectedArtist]);


    const fetchPaintings = async (artistId) => {
        try {
            const response = await fetch(`/api/paintings/artist/${artistId}`);
            const data = await response.json();

            const PaintingData = data.map((item) => ({
                Title: item.title,
                ArtistName: `${item.artists.firstName} ${item.artists.lastName}`,
                YearofWork: item.yearOfWork,
                Medium: item.medium,
                Width: item.width,
                Height: item.height,
                GalleryName: item.galleries.galleryName,
                GaleryCity: item.galleries.galleryCity,
                MuseumLink: item.museumLink,
                WikiLink: item.wikiLink,
                Description: item.description,
                CopyrightText: item.copyrightText,
            }));
            setArtistPaintings(PaintingData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    //POPULATE ON PAGE
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

   
    const sortedPaintings = artistPaintings.sort((a, b) => a.Title.localeCompare(b.Title));

    return (
        <>

            {/* DISPLAY NAV BAR */}
            <NavBar/>

            {/* COLUMN 1 THAT DISPLAYS THE ARTIST LIST */}
            <div className="flex h-[calc(100vh-4rem)]">
                <ArtistList artists={artist} onSelectedArtist={onSelectedArtist}/>


                {/* COLUMN 2 */}
                <div className="w-2/6 bg-green-400 flex justify-center text-white text-xl">
                    <div>
                        
                        <div>
                            <div className="bg-purple-500 basis-xs m-1 text-center">Add To Favourites</div>
                        </div>

                        {selectedArtist ? (
                            <h5 className="text-black">
                                <b>FirstName:</b> {selectedArtist.FirstName} <br/>
                                <b>LastName: </b> {selectedArtist.LastName} <br/>
                                <b>Nationality:</b> {selectedArtist.Nationality} <br/>
                                <b>Gender:</b> {selectedArtist.Gender} <br/>
                                <b>YearOfBirth:</b> {selectedArtist.YearOfBirth}<br/>
                                <b>YearOfDeath:</b> {selectedArtist.YearOfDeath} <br/>
                                <b>Details:</b> {selectedArtist.Details}<br/>
                                <b>ArtistLink:</b> {selectedArtist.ArtistLink} <br/>
                            </h5>
                        ) : ("SELECT ARTIST TO DISPLAY DETAILS")}
                    </div>
                </div>



                {/* COLUM<N3 */}
                <div className="w-3/6 bg-blue-400 flex justify-center text-white text-xl">
                    <div>
        
                        <div className="bg-purple-500 basis-xs m-1 text-center">Add To Favourites</div>

                        <div>
                            <div className=" basis-xs m-1 text-center">All Paintings of Artist</div> 
                            <br/>
                        </div>

                        {/* SHOULD BRING UP PAINTING MODAL */}
                        <div>

                            {sortedPaintings.map((paintings, index) => (
                                <div className="hover:bg-sky-700 cursor-pointer" key={index}>
                                    <h3>
                                        {paintings.Title} <br/>
                                    </h3>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            









            
                </div>

            <div className="bg-gray-800 text-white text-center p-4 text-xl">FOOTSIE STUFF </div>

        </>
    )


}

export default Artist