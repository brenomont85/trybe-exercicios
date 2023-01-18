const handleSubmit = (event) => {
    event.preventDefault();
};

window.onload = () => {
    const submitBtn = document.getElementById('submit-btn')
    submitBtn.addEventListener('click', handleSubmit);
};
