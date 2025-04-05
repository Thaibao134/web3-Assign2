import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './components/LoginView/LoginScreen';
import Gallery from './components/GalleryView/Gallery'
import Painting from './components/PaintingView/Painting'
import Artist from './components/ArtistView/Artist'
import Genres from './components/GenreView/Genres';
import Favourites from './components/FavouritesView/Favourites';


function App() {

  // Holds the favourite categories
  const [favouriteArtists, setFavouriteArtists] = useState([]);
  const [favouriteGalleries, setFavouriteGalleries] = useState([]);
  const [favouritePaintings, setFavouritePaintings] = useState([]);
  

  // If artist is not already in list, then add
  const handleAddFavArtist = (artist) => {
    console.log(`APP SENDING: ${artist}`)
    setFavouriteArtists(prevState =>
      prevState.includes(artist) ? prevState : [...prevState, artist]
    );
  };
  

  // If gallery is not already in list, then add
  const handleAddFavGallery = (gallery) => {
    console.log(`APP SENDING: ${gallery}`)
    setFavouriteGalleries(prevState => 
      prevState.includes(gallery) ? prevState : [...prevState, gallery]);
  };


  // If painting is not already in list, then add
  const handleAddFavPaintings = (painting) => {
    console.log(`APP SENDING: ${painting}`)
    setFavouritePaintings(prevState => 
      prevState.includes(painting) ? prevState : [...prevState, painting]);
  };

  // Remove the favourites from the specfic columns
  const onDeleteItem = (item, column) => {
    if (column === "Artist") {
      setFavouriteArtists(prevArtists => prevArtists.filter(artist => artist !== item));
    } else if (column === "Gallery") {
      setFavouriteGalleries(prevGallery => prevGallery.filter(gallery => gallery !== item));
    } else {
      setFavouritePaintings(prevPainting => prevPainting.filter(painting => painting !== item));
    }
    
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/Artist" element={<Artist onAddFavArtist={handleAddFavArtist} onAddFavPainting={handleAddFavPaintings} />} />
        <Route path="/Paintings" element={<Painting onAddFavPainting={handleAddFavPaintings} />} />
        <Route path="/Gallery" element={<Gallery onAddFavGallery={handleAddFavGallery} onAddFavPainting={handleAddFavPaintings}/>} />
        <Route path="/Genres" element={<Genres onAddFavPainting={handleAddFavPaintings} />} />
        <Route path="/Favourites" element={<Favourites favouriteArtists={favouriteArtists} favouriteGallery={favouriteGalleries} favouritePaintings={favouritePaintings} onDeleteItem={onDeleteItem}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
