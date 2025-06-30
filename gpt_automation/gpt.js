// Your list of prompts
const prompts = [
    "Give me a dark motivational quote for reels",
    "Write a 7-frame Hinglish storyboard about a penguin underdog",
    "Suggest 5 niches for automated YouTube shorts",
    // add more here...
];

const delayBetweenPrompts = 12000; // 12 seconds between sends

async function submitPrompt(prompt) {
    const editor = document.querySelector('#prompt-textarea');
    if (!editor) {
        console.error('Prompt editor not found.');
        return;
    }

    // Clear previous content
    editor.focus();
    document.getSelection().selectAllChildren(editor);
    document.execCommand("delete");

    // Insert the new prompt
    editor.focus();
    document.execCommand('insertText', false, prompt);

    // Dispatch input event for React update
    const inputEvent = new Event('input', { bubbles: true });
    editor.dispatchEvent(inputEvent);

    // Click the send button
    const sendButton = document.querySelector('#composer-submit-button');
    if (sendButton) {
        sendButton.click();
        console.log(`✅ Sent prompt: "${prompt}"`);
    } else {
        console.error('Send button not found.');
    }
}

async function runPromptQueue() {
    for (let i = 0; i < prompts.length; i++) {
        console.log(`⏳ Submitting prompt ${i + 1}/${prompts.length}...`);
        await submitPrompt(prompts[i]);
        await new Promise(resolve => setTimeout(resolve, delayBetweenPrompts));
    }
    console.log('✅ All prompts submitted.');
}

runPromptQueue();
