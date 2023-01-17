window.onload = () => {
    const mainContent = document.getElementById('main-content');
    const bgSelect = document.getElementById('bg-color');

    const changeBg = () => {
        let selected = bgSelect.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;
    }
    bgSelect.addEventListener('change', changeBg);
}