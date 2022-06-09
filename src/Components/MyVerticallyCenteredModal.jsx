import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

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
          <button><Link to="/aad">Azure Active Directory</Link></button>
          <button><Link to="/email">Azure Infrastructure</Link></button>
          <button><Link to="/m365">Microsoft 365 (Exchange Online,OneDrive, Teams)</Link></button>
          <button><Link to="/onPrem">On-Premise (Active Directory, Exchange Server)</Link></button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal