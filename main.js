const textToCopy = document.getElementById("textToCopy");
const copyButton = document.getElementById("copyButton");

function createCopyTextFunction(sourceElement) {
    return async function callback() {
        const value = sourceElement.value || sourceElement.dataset.value;
        if (value !== "") {
            await window.navigator.clipboard.writeText(value);
        }
    };
}

copyButton.addEventListener(
    "pointerdown", createCopyTextFunction(textToCopy)
);
