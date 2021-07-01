import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => 
    (
        <Modal
        ariaHideApp={false}
        isOpen={!!props.selectedOption}
        contentLabel="selected option"
        onRequestClose = {props.handelClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
        >
            <h3 className="modal__title">selected option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handelClearSelectedOption}>Okay</button>
        </Modal>
      
    )

export default OptionModal