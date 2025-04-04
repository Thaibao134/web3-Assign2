import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DisplayModal from './DisplayModal.jsx';
import Modal from 'react-bootstrap/Modal';
import Favourites from './Favourites.jsx';

function ModalPopup({show, handleClose, painting, onAddFavPainting}) {




  return (


    <>
    
      <Modal show={show} onHide={handleClose}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Painting Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DisplayModal painting={painting}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
          <Button variant="primary" onClick={() => {onAddFavPainting(painting.Title), handleClose()}}>Add To Favourites </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopup;