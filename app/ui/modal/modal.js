export default function Modal({title, confirmButtonName, discardButtonName, modalText, onConfirm}) {
    return (
        <div
            class="modal fade w-100 p-0 m-0"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                            {title}
                        </h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    {/* <div class="modal-body">{modalText}</div> */}
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            {discardButtonName}
                        </button>
                        <button type="button" class="btn btn-primary" onClick={onConfirm}>
                            {confirmButtonName}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
