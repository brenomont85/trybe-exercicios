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

        localStorage.setItem('bg-color', selected.value);
    }
    bgSelect.addEventListener('change', changeBg);

    const changeFontColor = () => {
        let selected = textSelect.selectedOptions[0];
        mainContent.style.color = selected.value;
        
        localStorage.setItem('text-color', selected.value);
    }
    textSelect.addEventListener('change', changeFontColor);

    const changeFontSize = () => {
        let selected = fontSizeSelect.selectedOptions[0];
        mainContent.style.fontSize = selected.value;

        localStorage.setItem('font-size', selected.value);
    }
    fontSizeSelect.addEventListener('change', changeFontSize);

    const changeLineHeight = () => {
        let selected = lineHeightSelect.selectedOptions[0];
        mainContent.style.lineHeight = selected.value;

        localStorage.setItem('line-height', selected.value);
    }
    lineHeightSelect.addEventListener('change', changeLineHeight);

    const changeFont = () => {
        let selected = fontSelect.selectedOptions[0];
        mainContent.style.fontFamily = selected.value;

        localStorage.setItem('font', selected.value);
    }
    fontSelect.addEventListener('change', changeFont);

    const savedBackground = localStorage.getItem('bg-color');
    const savedTextColor = localStorage.getItem('text-color');
    const savedFontSize = localStorage.getItem('font-size');
    const savedLineHeight = localStorage.getItem('line-height');
    const savedFont = localStorage.getItem('font'); 

}