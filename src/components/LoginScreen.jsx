import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const navigate = useNavigate();

    const handleSignin = (event) => {
        event.preventDefault();
        navigate("/Painting");
    };
    
    
    const handleSignintoGallery = (event) => {
        event.preventDefault();
        navigate("/Gallery");
    };


    const handleSignintoArtist = (event) => {
        event.preventDefault();
        navigate("/Artist");
    };
    
    return (
        <div className="h-screen w-screen bg-[url('../src/assets/bharath-kumar-cA9HLrY2FC8-unsplash.jpg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
            <button onClick={handleSignintoGallery} className="mb-2 p-2 bg-white rounded">Gallery</button>
            <button onClick={handleSignintoArtist} className="mb-2 p-2 bg-white rounded">Artist</button>
            <button onClick={handleSignin} className="mb-2 p-2 bg-white rounded">Paintings</button>
      
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-red-500 rounded-lg p-4">
                <div>TestingUSERNAME</div>
                <div>TestingPASSWORD</div>
                <div>TESTING SOME TYPE OF REGISTER OR SIGN IN</div>
            </div>
        </div>
      );

}

export default LoginScreen

// https://unsplash.com/photos/a-group-of-white-balls-floating-in-the-air-cA9HLrY2FC8 THIS IS THE PHOTO UPDATE LATER