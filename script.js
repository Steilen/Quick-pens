document.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.userSelect = 'none';
    document.body.addEventListener('copy', (e) => {
        e.preventDefault();
    });

    const keyElements = document.querySelectorAll('.key');
    const keyboardContainer = document.querySelector('.keyboard-container');

    document.addEventListener('keydown', (e) => {
        keyElements.forEach(key => {
            if (key.dataset.key === e.code) {
                key.classList.add('pressed');
            }
        });
    });

    document.addEventListener('keyup', (e) => {
        keyElements.forEach(key => {
            if (key.dataset.key === e.code) {
                key.classList.remove('pressed');
            }
        });
    });

    // Toggle backlight on sun key click
    const sunKey = document.querySelector('.key[data-key="MetaRight"] img[alt="SPI"]').parentNode;
    sunKey.addEventListener('click', () => {
        keyboardContainer.classList.toggle('red-backlight');
        const winKey = document.querySelector('.key[data-key="MetaLeft"] img');
        const sunKeyImg = sunKey.querySelector('img');
        if (keyboardContainer.classList.contains('red-backlight')) {
            winKey.src = 'windows2.png';
            sunKeyImg.src = 'sun2.png';
        } else {
            winKey.src = 'windows.png';
            sunKeyImg.src = 'sun.png';
        }
    });
});