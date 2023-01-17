window.onload = () => {
    const mainContent = document.getElementById('main-content');
    const bgSelect = document.getElementById('bg-color');
    const textSelect = document.getElementById('text-color');
    const fontSizeSelect = document.getElementById('font-size');
    const lineHeightSelect = document.getElementById('line-height');
    const fontSelect = document.getElementById('font'); 

    const changeBg = () => {
        let selected = bgSelect.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;
    }
    bgSelect.addEventListener('change', changeBg);


}