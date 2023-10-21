import { useState } from "react";
import { Modal } from "../Modal/Modal";
import "./TutorialModal.css";
import gif from "../../assets/tutorial.gif"

const TutorialModal = (props) => {
    const { closeModal } = props;
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <Modal
            onClose={closeModal}>
                <h1>Tutorial:</h1>
                <img src={gif} alt="gif"/>
                <p>1. Click and hold the cursor to rotate the globe</p>
                <p>2. Release and click on desired continent to view three of the most endangered species</p>
                <p>3. Click foundation links to be redirected</p>
                <p>4. Click anywhere outside of the modal to close</p>

        </Modal>
    )
}

export default TutorialModal;