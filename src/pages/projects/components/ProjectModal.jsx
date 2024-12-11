export const ProjectModal = ({ project, closeModal }) => {
    const { information } = project;

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

                {information && (
                    <div className="py-4">
                        {information.roles && information.roles.length > 0 && (
                            <div className="mb-4">
                                <h4 className="font-semibold">Roles desempeñados:</h4>
                                <ul className="list-disc ml-5">
                                    {information.roles.map((role, index) => (
                                        <li key={index}>{role}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {information.features && information.features.length > 0 && (
                            <div className="mb-4">
                                <h4 className="font-semibold">Características principales:</h4>
                                <ul className="list-disc ml-5">
                                    {information.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {information.challenges && information.challenges.length > 0 && (
                            <div className="mb-4">
                                <h4 className="font-semibold">Retos enfrentados:</h4>
                                <ul className="list-disc ml-5">
                                    {information.challenges.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                <div className="modal-actions">
                    <button className="btn" onClick={() => closeModal(project.id)}>
                        Cerrar
                    </button>
                </div>
            </div>
        </dialog>
    );
};
