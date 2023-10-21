const SpeciesItemModal = ({species}) => {
    const name = species.species;
    const foundation = species.foundation;
    const link = species.url;
    const photo = species.photo;

    return (
        <>
            <div 
                className='species-item'>
                <img 
                    className='species-image'
                    src={photo}/>
                <div 
                    className='species-desc'>
                        <h2> {name} </h2>
                        <h2> Foundation: <br></br>
                            <a 
                                className='species-link'
                                href={link} 
                                target='_blank'>
                                    {foundation}
                            </a> 
                        </h2>
                    </div>
            </div>
        </>
    )
}

export default SpeciesItemModal;