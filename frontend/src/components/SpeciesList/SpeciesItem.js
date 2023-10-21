import './SpeciesList.css'

export default function SpeciesItem ({animal}) {
    const name = animal.species
    const continent = animal.continent
    const foundation = animal.foundation
    const link = animal.url
    const photo = animal.photo

    console.log(link)
    return(
        <>
            <div className="animal-item">
                <img className='animal-image' src={photo}/>
                <div className='animal-description'>
                    <h2>
                        {name}
                    </h2>
                    <div>
                        Continent: {continent}
                    </div>
                    <br></br>
                    <div>
                        Foundation: <br></br>
                        <a href={link} target="_blank" >
                            {foundation}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}