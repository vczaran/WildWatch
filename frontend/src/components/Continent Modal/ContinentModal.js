import { Modal } from "../Modal/Modal";
import "./ContinentModal.css"

export default function ContinentModal ({closeModal}) {
    return (
        <Modal onClose={closeModal}>
            <h2 id="continent-title">Continent</h2>
            <div id="species-grid">
                <div>Species1</div>
                <div>Foundation 1</div>
                <div>Species2</div>
                <div>Foundation 2</div>
                <div>Species3</div>
                <div>Foundation 3</div>
            </div>
        </Modal>
    )
}