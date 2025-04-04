const GalleryList = ({galleries, onSelectedGallery}) => {
   
    galleries.sort((a, b) => a.Name.localeCompare(b.Name));
    return (

        <div className="w-1/6 bg-[#333333] flex flex-col items-center text-white text-xl overflow-hidden border-4 border-solid border-[#e8a9a0]">
            <div className="w-full overflow-y-auto h-full p-2">
                {galleries.map((gallery, index) => (
                    <div className="hover:bg-sky-700 cursor-pointer" key={index}>
                        <h5 className="text-center" onClick={() => { onSelectedGallery(gallery) }}>
                            {gallery.Name}
                        </h5>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default GalleryList