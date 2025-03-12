import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        navigate("/Artist");
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
      
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-lg p-4">
                
              
                <div className="flex flex-col items-center justify-center bg-gray-100">
                    <img src="../src/assets/logoipsum-338.svg" alt="Logo" className="w-24 h-auto mb-6"/>
                </div>

                <div className="flex flex-col text-center mb-4">
                    <label className="text-lg font-semibold">Welcome back!</label>
                    <label className="text-gray-600">Please enter your details to sign in</label>
                </div>


                <div>
                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="text" id="username" className="border border-gray-300 rounded-lg p-2 w-full focus:ring-blue-500 focus:border-blue-500"  placeholder="Username"/>
                </div>
                    
                    <br/>

                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="text" id="password" className="border border-gray-300 rounded-lg p-2 w-full focus:ring-blue-500 focus:border-blue-500"  placeholder="Password"/>
                </div>   
                
                    <br/>

                <div className="flex justify-center">
                    <button className="bg-gray-400 p-1 rounded-lg w-full max-w-xs font-bold font-white" onClick={handleSignIn}>Sign In</button>
                </div>

                <div className="flex items-center my-4">
                    <div className="w-full border-t border-gray-300"></div>
                        <span className="px-4 text-gray-500">OR</span>
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                    
                <div className="flex justify-center">
                    <button className="bg-blue-300 p-1 rounded-lg w-full max-w-xs font-bold font-white ">Register Now</button>
                </div>
            
            </div>
        </div>
      );

}

export default LoginScreen

// https://unsplash.com/photos/a-group-of-white-balls-floating-in-the-air-cA9HLrY2FC8 THIS IS THE PHOTO UPDATE LATER
// https://logoipsum.com/artwork/338 CAAT