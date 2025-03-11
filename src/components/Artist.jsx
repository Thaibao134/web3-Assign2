import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


const Artist = () => {    
    const navigate = useNavigate();

    const [artist, setArtist] = useState([]);
    const[selectedArtist, setSelectedArtist] = useState(null)
    const[artistPaintings, setArtistPaintings] = useState([]);

    //TESTING IF ONCLICK USE THE SETTER
    const Col2Update =(singleArtist) => {
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

    const sortedArtist = artist.sort((a, b) => a.LastName.localeCompare(b.LastName));
    const sortedPaintings = artistPaintings.sort((a, b) => a.Title.localeCompare(b.Title));

    return (
        <>
            <div>
                <div Class="bg-gray-800 text-white text-center p-4 text-xl">
                    <div Class="flex flex-row">
                        <div Class="bg-purple-500 basis-xs m-8">Logo</div>
                        <div Class="bg-purple-500 basis-xs m-8">Art DashBoard</div>
                        <div Class="bg-purple-500 basis-xs m-8">Artist</div>
                        <div Class="bg-purple-500 basis-xs m-8">Paintings</div>
                        <div Class="bg-purple-500 basis-xs m-8">Galleries</div>
                        <div Class="bg-purple-500 basis-xs m-8">Genres</div>
                        <div Class="bg-purple-500 basis-xs m-8">Favourites</div>
                        <div Class="bg-purple-500 basis-xs m-8">Above</div>
                    </div>
                </div>
            </div>


            {/* COLUMN 1 */}
            <div Class="flex h-[calc(100vh-4rem)]">
                <div Class="w-1/6 bg-red-400 flex items-center justify-center text-white text-xl overflow-auto " >
                    <div>
                        {sortedArtist.map((art, index) => (
                                <div Class="hover:bg-sky-700 cursor-pointer" key={index} >
                                    <h5  onClick={() => { Col2Update(art)}} >
                                        {art.FirstName}, {art.LastName}
                                    </h5>
                                </div>
                            ))}
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div Class="w-2/6 bg-green-400 flex justify-center text-white text-xl">
                    <div>
                        
                        <div>
                            <div Class="bg-purple-500 basis-xs m-1 text-center">Add To Favourites</div>
                        </div>

                        {selectedArtist ? (
                            <h5 Class="text-black">
                                <b>FirstName:</b> {selectedArtist.FirstName} <br/>
                                <b>LastName: </b> {selectedArtist.museumLinkastName} <br/>
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
                <div Class="w-3/6 bg-blue-400 flex justify-center text-white text-xl">
                    <div>
        
                        <div Class="bg-purple-500 basis-xs m-1 text-center">Add To Favourites</div>

                        <div>
                            <div Class=" basis-xs m-1 text-center">All Paintings of Artist</div> 
                            <br/>
                        </div>

                        {/* SHOULD BRING UP PAINTING MODAL */}
                        <div>

                            {sortedPaintings.map((paintings, index) => (
                                <div Class="hover:bg-sky-700 cursor-pointer" key={index}>
                                    <h3>
                                        {paintings.Title} <br/>
                                    </h3>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            









            

            </div>
            <div Class="bg-gray-800 text-white text-center p-4 text-xl">FOOTSIE STUFF </div>
        </>
    )


}

export default Artist