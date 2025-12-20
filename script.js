const sideMenu = document.querySelector("#sideMenu");
const html = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');

// Check for saved user preference, if any, on load of the website
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
  updateIcon(true);
} else {
  html.classList.remove('dark');
  updateIcon(false);
}

function toggleTheme() {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        updateIcon(false);
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        updateIcon(true);
    }
}

function updateIcon(isDark) {
    if (!themeToggleIcon) return;
    if (isDark) {
        themeToggleIcon.classList.remove('fa-moon');
        themeToggleIcon.classList.add('fa-sun');
    } else {
        themeToggleIcon.classList.remove('fa-sun');
        themeToggleIcon.classList.add('fa-moon');
    }
}


// Blog Content Data
const blogData = {
    'embedding-models-rag': `# The Crucial Role of Embedding Models in RAG Systems

*December 15, 2025*

Retrieval-Augmented Generation (RAG) has become the de facto standard for building AI applications that require access to private or real-time data. While the Large Language Model (LLM) often gets the spotlight for generating the final answer, the unsung hero of a high-performing RAG system is the **embedding model**.

## Why Embeddings Matter

At its core, a RAG system works by finding the most relevant pieces of information from a knowledge base and feeding them to the LLM. This "finding" process relies heavily on vector similarity search.

1.  **Semantic Understanding**: Unlike keyword search, which looks for exact word matches, embedding models convert text into high-dimensional vectors. These vectors capture the *meaning* of the text. A good embedding model understands that "canine" and "dog" are semantically close, even if they share no letters.
2.  **Retrieval Quality**: The phrase "Garbage In, Garbage Out" applies perfectly here. If your embedding model retrieves irrelevant chunks of text, even the most powerful LLM (like GPT-4 or Gemini Ultra) will fail to answer the user's question correctly. It simply won't have the right context.

## Choosing the Right Model

Not all embedding models are created equal.

*   **General Purpose vs. Domain Specific**: Models like OpenAI's \`text-embedding-3\` are excellent generalists. However, for specialized domains like law, medicine, or finance, fine-tuned models or domain-specific embeddings often yield significantly better retrieval results.
*   **MTEB Leaderboard**: The Massive Text Embedding Benchmark (MTEB) is a great resource for comparing models. It evaluates embeddings across various tasks like classification, clustering, and retrieval.

## The Impact on User Experience

Investing time in selecting and evaluating your embedding model pays dividends:

*   **Reduced Hallucinations**: Better context means the LLM is less likely to make things up.
*   **Faster Responses**: Efficient retrieval allows for smaller context windows, leading to lower latency.
*   **Cost Efficiency**: Better precision means you need to retrieve fewer chunks, saving on token costs.

In conclusion, while the LLM is the brain of your RAG system, the embedding model is its eyes. Without clear vision, even the smartest brain is flying blind.`,

    'reasoning-vs-non-reasoning': `# Reasoning vs. Non-Reasoning Models: A Performance Comparison

*December 10, 2025*

The landscape of Large Language Models (LLMs) is evolving rapidly. A new distinction is emerging that separates models not just by size, but by their cognitive architecture: **Reasoning Models** vs. **Standard (Non-Reasoning) Models**.

## What is a Reasoning Model?

Standard LLMs are essentially advanced pattern matchers. They predict the next token based on statistical likelihood. They are incredibly good at fluency, translation, and recalling facts.

Reasoning models, such as OpenAI's **o1** series or models trained with extensive **Chain-of-Thought (CoT)** data, are designed to "think" before they speak. They generate hidden tokens—internal monologues—where they break down a problem, plan a solution, and critique their own logic before outputting a final answer.

## Performance Benchmarks

Recent evaluations highlight a stark contrast in performance profiles:

### 1. Complex Logic & Math
*   **Reasoning Models**: Excel at multi-step math problems, competitive programming (e.g., Codeforces), and logic puzzles. They can hold a "train of thought" over long horizons without losing coherence.
*   **Standard Models**: Often struggle with problems requiring more than 2-3 steps of logical deduction, frequently hallucinating or taking shortcuts.

### 2. Speed & Cost
*   **Reasoning Models**: Slower and more expensive. The "thinking" process consumes significant compute resources (inference-time compute).
*   **Standard Models**: Fast and efficient. Ideal for chatbots, summarization, and creative writing where immediate response is valued over deep logic.

### 3. Agentic Capabilities
*   **Reasoning Models**: The holy grail for autonomous agents. An agent needs to plan, observe, and correct its course. Reasoning models naturally fit this loop.
*   **Standard Models**: Require heavy prompting engineering (like ReAct) to simulate reasoning, which is often brittle.

## When to Use Which?

*   **Use Standard Models** for: Customer support bots, content generation, translation, and simple data extraction.
*   **Use Reasoning Models** for: Scientific research, complex code generation, legal analysis, and autonomous agent planning.

The future likely holds a hybrid approach, where a "System 1" (fast, intuitive) model handles routine tasks, and hands off difficult problems to a "System 2" (slow, deliberate) reasoning model.`,

    'agentic-development': `# Guidelines for Agentic Development

*November 28, 2025*

We are moving from the era of "Chatbots" to the era of "Agents". While chatbots talk, agents **do**. They use tools, execute code, and interact with the world to achieve goals. Building reliable agents, however, is significantly harder than building reliable chatbots.

Here are key guidelines for effective agentic development.

## 1. Define Clear Tools

An agent is only as good as its tools.
*   **Atomic Functions**: Tools should do one thing well. Avoid "god functions" that try to handle too much logic.
*   **Descriptive Schemas**: The agent understands how to use a tool based on its description. Be verbose and precise in your JSON schemas or docstrings.

## 2. The Loop: Observation, Thought, Action

A robust agent loop is critical:
*   **Thought**: The agent analyzes the current state and decides what to do.
*   **Action**: The agent calls a tool.
*   **Observation**: The output of the tool is fed back to the agent.
*   **Critique**: *Crucially*, the agent should evaluate if the action was successful before moving on.

## 3. Error Handling is Part of the Logic

In traditional software, exceptions crash the program. In agentic systems, exceptions are **feedback**.
*   If a tool fails, feed the error message back to the agent.
*   A good agent will read the error, understand why it failed (e.g., "File not found"), and try a different approach (e.g., "List directory to find the correct filename").

## 4. State Management

Agents need memory.
*   **Short-term Memory**: The immediate context window containing the current conversation and tool outputs.
*   **Long-term Memory**: A vector database or persistent storage to recall user preferences or past tasks.

## 5. Observability

Debugging a probabilistic system is hard. You need to see the "thought process."
*   Log every step of the chain.
*   Use tracing tools (like LangSmith or Arize Phoenix) to visualize the agent's decision tree.

Building agents is less about writing the perfect prompt and more about engineering a resilient system that can recover from failure and navigate complexity.`
};

// Blog Modal Logic
function openBlog(blogId) {
    const modal = document.getElementById('blogModal');
    const contentDiv = document.getElementById('blogContent');
    
    // Show modal
    modal.classList.remove('hidden');
    
    // Get content from data object
    const markdownContent = blogData[blogId];
    
    if (markdownContent) {
        // Parse markdown
        const htmlContent = marked.parse(markdownContent);
        contentDiv.innerHTML = htmlContent;
    } else {
        contentDiv.innerHTML = `<div class="text-center text-red-500 py-10">
            <p class="text-lg font-semibold">Content not found</p>
        </div>`;
    }
}

function closeBlog() {
    const modal = document.getElementById('blogModal');
    modal.classList.add('hidden');
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeBlog();
    }
});


function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button-1');
    const aideticProjectsHidden = document.getElementById('aidetic-hidden');

    toggleButton.addEventListener('click', () => {
        if (aideticProjectsHidden.classList.contains('hidden')) {
            aideticProjectsHidden.classList.remove('hidden');
            toggleButton.textContent = 'View Less';
        } else {
            aideticProjectsHidden.classList.add('hidden');
            toggleButton.textContent = 'View More';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button-2');
    const wowlabzProjectsHidden = document.getElementById('wowlabz-hidden');

    toggleButton.addEventListener('click', () => {
        if (wowlabzProjectsHidden.classList.contains('hidden')) {
            wowlabzProjectsHidden.classList.remove('hidden');
            toggleButton.textContent = 'View Less';
        } else {
            wowlabzProjectsHidden.classList.add('hidden');
            toggleButton.textContent = 'View More';
        }
    });
});

// Background Animation
const canvas = document.getElementById('bg-animation');
const ctx = canvas.getContext('2d');
let particlesArray;

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Handle Theme Colors
let particleColor = 'rgba(0, 0, 0, 0.5)';
let lineColor = 'rgba(0, 0, 0, 0.1)';

function updateAnimationColors() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
        particleColor = 'rgba(255, 255, 255, 0.5)';
        lineColor = 'rgba(255, 255, 255, 0.1)';
    } else {
        particleColor = 'rgba(0, 0, 0, 0.5)';
        lineColor = 'rgba(0, 0, 0, 0.1)';
    }
}

// Initial color set
updateAnimationColors();

// Create Particle Class
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = particleColor;
        ctx.fill();
    }

    // Method to check particle position, check mouse position, move the particle, draw the particle
    update() {
        // Check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;

        // Draw particle
        this.draw();
    }
}

// Create particle array
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = particleColor;

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Check if particles are close enough to draw line between them
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

// Resize event
window.addEventListener('resize',
    function () {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
);

// Initialize
init();
animate();

// Update colors when theme changes
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "class") {
            updateAnimationColors();
        }
    });
});

observer.observe(document.documentElement, {
    attributes: true
});