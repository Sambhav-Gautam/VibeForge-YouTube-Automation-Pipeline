// ===== CONFIG ===== //
const PAINTING_PROMPTS = [
  "Generate a 9:16 vertical image of a lone wolf howling in a twilight savanna under a vibrant, textured sky, surrounded by whispering grasses. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
 ];

const PAINTING_CONTEXT = [
  "The wolf’s howl embodies primal solitude, a cry echoing through the vastness of the wild.",
];

const CONFIG = {
  INPUT_SELECTOR: 'div.ql-editor.textarea.new-input-ui',
  SUBMIT_BUTTON_SELECTOR: 'button.send-button',
  DELAY_BETWEEN_SUBMISSIONS_MS: 30000,
  MAX_RETRIES: 5,
  RETRY_DELAY_MS: 1000
};

const MAX_SUBMISSIONS = PAINTING_PROMPTS.length;

// ===== ENGINE ===== //
let submissionCount = 0;
let isPaused = false;

/**
 * Generates a formatted prompt combining painting description and context.
 * @param {number} index - The index of the prompt and context to use.
 * @returns {string} - The formatted prompt string.
 * @throws {Error} - If prompt or context at the index is invalid.
 */
function generatePrompt(index) {
  if (!PAINTING_PROMPTS[index] || !PAINTING_CONTEXT[index]) {
    throw new Error(`Invalid prompt or context at index ${index}`);
  }
  return `${PAINTING_PROMPTS[index]}\n\nStyle: abstract expressionism, acrylic, handmade, palette knife texture\n\nEmotion/Story: ${PAINTING_CONTEXT[index]}\n\nNegative prompt: Do not show any artist signature or watermark on the painting.`;
}

/**
 * Finds a DOM element with retries if not immediately available.
 * @param {string} selector - The CSS selector for the element.
 * @param {number} maxRetries - Maximum number of retries.
 * @param {number} retryDelay - Delay between retries in milliseconds.
 * @returns {Promise<Element>} - The found DOM element.
 * @throws {Error} - If element is not found after max retries.
 */
async function findElement(selector, maxRetries = CONFIG.MAX_RETRIES, retryDelay = CONFIG.RETRY_DELAY_MS) {
  let retries = 0;
  return new Promise((resolve, reject) => {
    const attempt = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(attempt, retryDelay);
      } else {
        reject(new Error(`Element not found: ${selector}`));
      }
    };
    attempt();
  });
}

/**
 * Logs the progress of submissions.
 */
function logProgress() {
  const progress = ((submissionCount / MAX_SUBMISSIONS) * 100).toFixed(2);
  console.log(`📊 Progress: ${submissionCount}/${MAX_SUBMISSIONS} (${progress}%)`);
}

/**
 * Submits a prompt to the input field and triggers the submit button.
 * @param {number} attempt - Current attempt number for retries.
 * @param {number} maxAttempts - Maximum number of retry attempts.
 */
async function submitPrompt(attempt = 1, maxAttempts = 3) {
  if (isPaused || submissionCount >= MAX_SUBMISSIONS) {
    if (submissionCount >= MAX_SUBMISSIONS) {
      console.log("✅ Painting prompt automation complete");
    }
    return;
  }

  try {
    const inputElement = await findElement(CONFIG.INPUT_SELECTOR);
    const prompt = generatePrompt(submissionCount);
    inputElement.innerText = prompt;
    inputElement.dispatchEvent(new Event('input', { bubbles: true }));

    setTimeout(async () => {
      try {
        const submitButton = await findElement(CONFIG.SUBMIT_BUTTON_SELECTOR);
        if (!submitButton.disabled) {
          submitButton.click();
          console.log(`🎨 Submitted painting prompt #${submissionCount + 1}: ${prompt.slice(0, 50)}...`);
          submissionCount++;
          logProgress();
          setTimeout(submitPrompt, CONFIG.DELAY_BETWEEN_SUBMISSIONS_MS);
        } else {
          console.warn("⚠️ Submit button disabled, retrying...");
          if (attempt < maxAttempts) {
            setTimeout(() => submitPrompt(attempt + 1, maxAttempts), CONFIG.RETRY_DELAY_MS * Math.pow(2, attempt));
          } else {
            console.error("❌ Max retry attempts reached");
          }
        }
      } catch (error) {
        console.error(`❌ Error submitting prompt: ${error.message}`);
        if (attempt < maxAttempts) {
          setTimeout(() => submitPrompt(attempt + 1, maxAttempts), CONFIG.RETRY_DELAY_MS * Math.pow(2, attempt));
        } else {
          console.error("❌ Max retry attempts reached");
        }
      }
    }, 1000);
  } catch (error) {
    console.error(`❌ Error finding input element: ${error.message}`);
    if (attempt < maxAttempts) {
      setTimeout(() => submitPrompt(attempt + 1, maxAttempts), CONFIG.RETRY_DELAY_MS * Math.pow(2, attempt));
    } else {
      console.error("❌ Max retry attempts reached");
    }
  }
}

/**
 * Pauses the automation script.
 */
function pauseAutomation() {
  isPaused = true;
  console.log("⏸️ Automation paused");
}

/**
 * Resumes the automation script if paused.
 */
function resumeAutomation() {
  if (isPaused) {
    isPaused = false;
    console.log("▶️ Automation resumed");
    submitPrompt();
  }
}

// Expose controls globally
window.pauseAutomation = pauseAutomation;
window.resumeAutomation = resumeAutomation;

// ===== START ===== //
submitPrompt();