# Guidelines for Agentic Development

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

Building agents is less about writing the perfect prompt and more about engineering a resilient system that can recover from failure and navigate complexity.
