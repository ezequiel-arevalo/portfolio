export const ProjectModal = ({ project, closeModal }) => {
    return (
        <dialog
            id={`modal_${project.id}`}
            className="modal"
            onClick={(e) => {
                const dialogBox = document.querySelector(`#modal_${project.id} .modal-box`);
                if (dialogBox && !dialogBox.contains(e.target)) {
                    closeModal(project.id);
                }
            }}
        >
            <div className="modal-box">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="py-4">{project.description}</p>
                <button className="btn" onClick={() => closeModal(project.id)}>
                    Close
                </button>
            </div>
        </dialog>
    );
};