import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:'#9c3233'}}>
          Support Request
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='flex'>
          {/* <h4>Select Options</h4> */}
          <button>Azure Active Directory</button>
          <button>Azure Infastructure</button>
          <button>Microsoft 365 (Exchange Online,OneDrive, Teams)</button>
          <button>On-Premise (Active Directory, Exchange Server)</button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal