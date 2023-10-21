import { useState } from "react";
import { Modal } from "../Modal/Modal";
import "./AboutUsModal.css"

const AboutUsModal = (props) => {
    const { closeModal } = props;
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <Modal
            onClose={closeModal}>
                <div
                    className="about-page">

                    <h1>About the App</h1>
                    <p className="app-desc">
                        Across the world, countless animals are in danger of extinction. <br></br>
                        With over 42,000 species listed as endangered on the IUCN Red List,<br></br>
                        it can be difficult to determine how to help. <br></br> 
                        {/* That’s where WildWatch comes in – clicking on any of the continents on our interactive globe 
                        will open a window that displays three of the most endangered animals 
                        on that continent. <br></br> */}
                        Links to species-specific charities are listed underneath each animal, <br></br>
                        helping animal lovers around the world better focus their conservation efforts. <br></br>
                        All charities are verified for legitimacy and impact using Charity Navigator <br></br>
                        (https://www.charitynavigator.org / https://www.charitynavigator.org) <br></br>
                        so you can be assured that your contribution will go to the animals in need!</p>
                    <h1>About the Team</h1>
                    <div 
                        className="info-container">
                        <div id="individual-info">
                            <img className="michelle" src="/michelle.png"/>
                            <div id="individual-subinfo">
                                <h2>Michelle Li</h2>
                                <div id="social-links">
                                    <a href="https://github.com/michelleeli"><i className="fa-brands fa-github fa-2xl" style={{color: "#000000"}}></i></a>
                                    <a href="https://www.linkedin.com/in/michelle-li-040922288/"><i className="fa-brands fa-linkedin fa-2xl" style={{color: "#0a66c2"}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div id="individual-info">
                            <img className="viktoria" src="/viktoria.png"/>
                            <div id="individual-subinfo">
                                <h2>Viktoria Czaran</h2>
                                <div id="social-links">
                                    <a href="https://github.com/vczaran"><i className="fa-brands fa-github fa-2xl" style={{color: "#000000"}}></i></a>
                                    <a href="https://www.linkedin.com/in/viktoria-czaran-4688ab284/"><i className="fa-brands fa-linkedin fa-2xl" style={{color: "#0a66c2"}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div id="individual-info">
                            <img className="ashley" src="/ashley.png"/>
                            <div id="individual-subinfo">
                                <h2>Ashley Kim</h2>
                                <div id="social-links">
                                    <a href="https://github.com/ashleyjek"><i className="fa-brands fa-github fa-2xl" style={{color: "#000000"}}></i></a>
                                    <a href="https://www.linkedin.com/in/ashleyjek/"><i className="fa-brands fa-linkedin fa-2xl" style={{color: "#0a66c2"}}></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Modal>
    )
}

export default AboutUsModal;