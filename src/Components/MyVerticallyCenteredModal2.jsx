import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:'#000'}}>
          Product Enquiry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='flex2'>
          {/* <h4>Select Options</h4> */}
          <button>Microsoft 365</button>
          <button>Dynamics 365</button>
          <button>On-Premise Solutions</button>
          <button>Azure Services</button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal2