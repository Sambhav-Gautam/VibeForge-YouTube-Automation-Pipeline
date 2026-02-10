let generationIndex = 0,
    delay = 30000, // 30s between generations
    totalGenerations = 400,
    retryDelay = 5000;

const collageDetails = [
    "torn black and white photographs overlap forming a screaming face",
    "scribbled notes and ripped newspaper clippings form a distorted skull",
    "paint splotches drip like blood across torn paper faces",
    "fragments of childhood photos create a hollow-eyed creature",
    "scribbled symbols and chaotic handwriting merge into a shadowy face",
    "layers of burnt paper and sketches form a twisted mask",
    "fragments of family photos stitched with black thread into a haunting image",
    "dark watercolor stains blend with torn sketches to form a ghostly face",
    "faded love letters and photographs merge into a weeping creature",
    "chaotic handwritten notes and ripped paper layers forming a single eye staring"
];

function getPrompt() {
    const detail = collageDetails[generationIndex % collageDetails.length];
    return `Create a 9:16 vertical mixed-media analog horror illustration with a textured collage aesthetic where ${detail}. Include layered paper, paint splotches, torn edges, scribbled notes, and newspaper clippings to create a chaotic but clear composition forming a single haunting image. The artwork should feel raw, layered, and tactile, like a digital zine spread, with chaotic handwritten elements giving a hidden story puzzle vibe. **Compulsorily include the text at the top in bold yellow with thin black outline: "Every memory is stitched from madness."** integrated seamlessly but clearly visible without blocking the main collage subject. Use dark, eerie colors with gritty analog horror styling for viral Shorts content.`;
}

function pastePromptAutom(promptText) {
    const sel = ['div.ql-editor.textarea.new-input-ui', 'div[contenteditable="true"]', 'textarea', '[role="textbox"]', 'div[contenteditable]', '.ProseMirror'];
    const input = sel.map(s => document.querySelector(s)).find(Boolean);
    if (!input) {
        console.error("Input not found");
        return false;
    }
    input.textContent = promptText;
    ['input', 'change', 'keyup', 'paste'].forEach(e => input.dispatchEvent(new Event(e, { bubbles: true, cancelable: true })));
    input.focus();
    input.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
    return true;
}

function submitPrompt() {
    if (generationIndex >= totalGenerations) {
        return console.log("✅ All 400 mixed-media collage horror prompts generated!");
    }
    const prompt = getPrompt();
    if (!pastePromptAutom(prompt)) {
        return setTimeout(submitPrompt, retryDelay);
    }
    setTimeout(() => {
        const btn = ['button.send-button', 'button[aria-label="Send"]', 'button[type="submit"]', '[data-testid="send-button"]'].map(s => document.querySelector(s)).find(Boolean);
        if (btn && !btn.disabled) btn.click();
        generationIndex++;
        setTimeout(submitPrompt, delay);
    }, 3000);
}

console.log("🚀 Starting 400 mixed-media collage horror prompt automation with CTA overlay...");
submitPrompt();
// This script automates the generation of 400 mixed-media collage horror prompts with a specific call-to-action overlay.
// It uses a delay between generations and retries if the input is not found.