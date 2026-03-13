// Source - https://stackoverflow.com/a/73279917
// Modified for efficient updating
const range = document.createRange();

const updateMinWrapWidths = () => {
    const blocks = document.querySelectorAll('.min-wrap-width');
    for (const el of blocks) {
        el.style.width = 'auto';

        const text = el.childNodes[0];
        range.setStartBefore(text);
        range.setEndAfter(text);

        const clientRect = range.getBoundingClientRect();
        el.style.width = `${clientRect.width}px`;
    };
};

// Initial execution
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateMinWrapWidths);
} else {
    updateMinWrapWidths();
}

// Updates all wrap widths only when page resizes happen
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateMinWrapWidths, 50);
});
