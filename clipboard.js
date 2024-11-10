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

export {
    copyTextToClipboard,
}
