import './SpeciesList.css'

export default function SpeciesItem ({animal}) {
    const name = animal.species
    const continent = animal.continent
    const foundation = animal.foundation

    return(
        <>
        <div className="animal-item">
            <div>
                Name: {name}
            </div>
            <div>
                Continent:{continent}
            </div>
            <div>
                Foundation: {foundation}
            </div>
        </div>
        </>
    )
}