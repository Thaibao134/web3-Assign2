import { useNavigate } from "react-router-dom";
const NavBar = () => {

    const navigate = useNavigate();

    const handleNavigations = (page) => {
        if (page === "Logout") {
            navigate(`/`);
        } else {
            navigate(`/${page}`);
        }
    };

    return(
        <div className="bg-gray-800 text-white text-center p-4 text-xl">
            <div className="flex flex-row">
            {["Art Dashboard", "Artist", "Paintings", "Gallery", "Genres", "Favourites", "Logout"].map((item, index) => (
                    <div key={index} className="bg-purple-500 basis-xs m-8" onClick={() =>handleNavigations(item) }>{item}</div>
                ))}
            </div>
        </div>
    )




}

export default NavBar