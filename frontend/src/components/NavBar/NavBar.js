import { useState } from 'react'
import ContinentModal from '../Continent Modal/ContinentModal'
import './NavBar.css'
import { Link } from 'react-router-dom';

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
            <Link to='/' className='nav-link'>
                <h1 id="nav-logo">
                    WILDWATCH
                </h1>
            </Link>
            <Link to="/species" className="nav-link">
                <i className="fa-solid fa-otter fa-2xl icon" style={{ color: "#1f2f4d" }} />
                &nbsp; Species List
            </Link>

            <div id="nav-info" onClick={openModal}>
                <i className="fa-solid fa-circle-info fa-2xl icon" style={{color: "#1f2f4d",}} />
                &nbsp; About Us
            </div>
            {modalOpen && <ContinentModal closeModal={closeModal}/>}   
        </div>
        </>
    )
}