import { useState } from 'react'
import ContinentModal from '../Continent Modal/ContinentModal'
import './NavBar.css'
import { useHistory } from 'react-router-dom';

export default function NavBar () {
    const [modalOpen, setModalOpen] = useState(false)
    const history = useHistory()

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const redirectSpecies = () => {
        history.push('/species')
    }

    return (
        <>
        <div className="nav-bar">
            <h1 id="nav-logo">
                WILDWATCH
            </h1>
            <div  onClick={redirectSpecies}>
                <i className="fa-solid fa-otter fa-2xl icon" style={{color: "#1f2f4d",}} />
                <h3 id="nav-species">Species List</h3>
            </div>
            <div id="nav-info" onClick={openModal}>
                <i className="fa-solid fa-circle-info fa-2xl icon" style={{color: "#1f2f4d",}} />
                <h3>Info</h3>
            </div>
            {modalOpen && <ContinentModal closeModal={closeModal}/>}   
        </div>
        </>
    )
}