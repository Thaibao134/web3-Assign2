import { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import Gallery from './components/Gallery'
import Painting from './components/Painting'
import Artist from './components/Artist'
import Genres from './components/Genres';
import Favourites from './components/Favourites';
import ModalPopup from './components/Modal';


function App() {

  const [favouriteArtists, setFavouriteArtists] = useState([]);
  const [favouriteGalleries, setFavouriteGalleries] = useState([]);
  const [favouritePaintings, setFavouritePaintings] = useState([]);
  

  const handleAddFavArtist = (artist) => {
    setFavouriteArtists(prevState => [...prevState, artist]);
  };


  const handleAddFavGallery = (gallery) => {
    setFavouriteGalleries(prevState => [...prevState, gallery]);
  };


  const handleAddFavPaintings = (painting) => {
    setFavouritePaintings(prevState => [...prevState, painting]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/Artist" element={<Artist onAddFavArtist={handleAddFavArtist} onAddFavPainting={handleAddFavPaintings} />} />
        <Route path="/Paintings" element={<Painting onAddFavPainting={handleAddFavPaintings} />} />
        <Route path="/Gallery" element={<Gallery onAddFavGallery={handleAddFavGallery} onAddFavPainting={handleAddFavPaintings}/>} />
        <Route path="/Genres" element={<Genres onAddFavPainting={handleAddFavPaintings} />} />

        <Route path="/Favourites" element={<Favourites favouriteArtists={favouriteArtists} favouriteGallery={favouriteGalleries} favouritePaintings={favouritePaintings}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
