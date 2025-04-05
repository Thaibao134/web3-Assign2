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
        <div className="bg-[#333333] text-white text-center">

            <div className="flex justify-center items-center"> 
                <img src="../src/assets/test111.png" className="max-w-[350px] mt-4"></img>
            </div>

            <div className="flex justify-center items-center p-4">
            {["Artist", "Gallery", "Genres", "Paintings", "Favourites", "Logout"].map((item, index) => (
                    <div key={index} className="mx-4 cursor-pointer text-2xl" onClick={() =>handleNavigations(item) }>{item}</div>
                ))}
            </div>
            
        </div>
        



    )




}

export default NavBar