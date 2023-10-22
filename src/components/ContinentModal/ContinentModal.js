import { Modal } from "../Modal/Modal";
import "./ContinentModal.css"
import SpeciesItemModal from "./SpeciesItemModal";
import { useEffect, useState } from "react";

export default function ContinentModal (props) {
    const { closeModal, continent } = props;
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('/SpeciesByCont.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function(resp) {
            return resp.json();
        }).then((myJson) => {
            let data = myJson.filter((species) => species.continent === continent)
            setData(data)
        });
    };

    useEffect(() => {
        getData(continent);
    }, continent);

    return (
        <Modal onClose={closeModal}>
            <h2 id="continent-title">{continent}</h2>
            <div id="species-grid">
                { data.map((species) => {
                    return (
                        <SpeciesItemModal species={species}/>
                    )
                })}
            </div>
        </Modal>
    )
}