import { useState } from "react";
import { Modal } from "../Modal/Modal";

const AboutUsModal = (props) => {
    const { closeModal } = props;
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <Modal
            onClose={closeModal}>
                <h1>About Us:</h1>

        </Modal>
    )
}

export default AboutUsModal;