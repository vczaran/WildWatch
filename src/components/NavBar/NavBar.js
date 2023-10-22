import { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import TutorialModal from '../TutorialModal/TutorialModal';
import AboutUsModal from '../AboutUsModal/AboutUsModal';

export default function NavBar () {
    const [modalOpen, setModalOpen] = useState(true);
    const [modalType, setModalType] = useState("tutorial");

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <>
        <div 
            className="nav-bar">
            <Link 
                to='/' 
                className='nav-link'>
                <h1 
                    id="nav-logo">
                        WILDWATCH
                </h1>
            </Link>
            <Link 
                to="/species" 
                className="nav-link">
                <i 
                    className="fa-solid fa-otter fa-2xl icon" 
                    style={{ color: "#1f2f4d" }} />
                    &nbsp; Species List
            </Link>

            <div 
                id="nav-tutorial" 
                onClick={() => {
                    setModalType("tutorial");
                    setModalOpen(true);
                }}>
                <i 
                    className="fa-solid fa-circle-info fa-2xl icon" 
                    style={{color: "#1f2f4d"}} />
                    &nbsp; Tutorial
            </div>
            {modalOpen && modalType === "tutorial" &&
                <TutorialModal
                    closeModal={closeModal}/>}   
            <div 
                id="nav-about-us" 
                onClick={() => {
                    setModalOpen(true);
                    setModalType("about-us")
                }}>
                <i 
                    className="fa-solid fa-user"
                    style={{ color: "#1f2f4d" }} />
                    &nbsp; About
            </div>
            {modalOpen && modalType === "about-us" &&
                <AboutUsModal 
                    closeModal={closeModal}/>}   
        </div>
        </>
    )
}