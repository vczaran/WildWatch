import { useState } from 'react'
import ContinentModal from '../Continent Modal/ContinentModal'
import './NavBar.css'

export default function NavBar () {
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <>
        <div className="nav-bar">
            <button id="nav-species">
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