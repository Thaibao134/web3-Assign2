const GalleryList = ({galleries, onSelectedGallery}) => {
   
   
    return (
        <div className="w-1/6 bg-red-400 flex justify-center text-white text-xl overflow-auto">
            <div>
                {galleries.map((gallery, index) => (
                    <div className="hover:bg-sky-700 cursor-pointer" key={index}>
                        <h1 onClick={() => { onSelectedGallery(gallery) }}>
                            {gallery.Name}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryList