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
            <button id="nav-species" onClick={redirectSpecies}>
                Species List
            </button>
            <h1 id="nav-logo">
                WildWatch
            </h1>
            <button id="nav-info" onClick={openModal}>
                info/login
            </button>
            {modalOpen && <ContinentModal closeModal={closeModal}/>}   
        </div>
        </>
    )
}