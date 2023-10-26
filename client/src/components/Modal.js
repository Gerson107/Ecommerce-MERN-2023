import React from "react";

const Modal = ({ date, handleDelete }) => {
  return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Warning
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Are you sure you want to delete this category?
            </div>
            <div className="modal-footer">
              
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  handleDelete(date);
                }}
                data-bs-dismiss="modal"

              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Modal;
