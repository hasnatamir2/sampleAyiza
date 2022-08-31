import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

function ConfirmModal({ show, onCancel, onOk, warningText }: any) {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>{warningText}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Close
        </Button>
        <Button variant="primary" onClick={onOk}>
          Im sure
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal
