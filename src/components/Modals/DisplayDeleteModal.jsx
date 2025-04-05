import Button from 'react-bootstrap/Button';
import DisplayDeleteModal from './DisplayDeleteInformation.jsx';
import Modal from 'react-bootstrap/Modal';

function DeleteModalPopup({ show, handleClose, painting, column, onDeleteItem }) {


  return (
    <>
      <Modal show={show} onHide={handleClose}
        size="md">
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete the following?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DisplayDeleteModal painting={painting} column={column} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
          <Button variant="primary" onClick={() => { onDeleteItem(painting, column), handleClose() }}>Yes </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModalPopup;