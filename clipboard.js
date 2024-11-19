function copyTextToClipboard(sourceElement) {
    return async function callback() {
        const value = sourceElement.value || sourceElement.dataset.value || sourceElement.textContent;

        if (!value) {
            return console.error("No text found to copy.");
        }

        try {
            await window.navigator.clipboard.writeText(value);
        } catch (error) {
            console.error("Failed to copy text:", error);
        }
    };
}

function blockClipboardEvents() {
    document.addEventListener('copy', (event) => {
        event.preventDefault();
        console.warn("Copy action blocked.");
    });

    document.addEventListener('cut', (event) => {
        event.preventDefault();
        console.warn("Cut action blocked.");
    });

    document.addEventListener('paste', (event) => {
        event.preventDefault();
        console.warn("Paste action blocked.");
    });
}

export {
    copyTextToClipboard,
    blockClipboardEvents,
}
