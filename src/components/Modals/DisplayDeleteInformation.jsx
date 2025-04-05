const DisplayDeleteModal = ({painting, column}) => {
    return (
        <>
            <div className=" w-full" >
                <div className="w-full break-words">
                    <b>Favourite {column}</b>: {painting} 
                </div>
            </div> 
        </>
    )
}

export default DisplayDeleteModal