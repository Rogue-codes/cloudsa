import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal3(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:'green'}}>
          Solution Assessment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='flex3'>
          <button>Cybersecurity</button>
          <button>Infrastructure Optimization (Azure Migration)</button>
          <button>Cloud Readiness</button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal3