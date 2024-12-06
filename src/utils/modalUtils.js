export const openModal = (projectId) => {
    const modal = document.getElementById(`modal_${projectId}`);
    if (modal) modal.showModal();
};

export const closeModal = (projectId) => {
    const modal = document.getElementById(`modal_${projectId}`);
    if (modal) modal.close();
};
