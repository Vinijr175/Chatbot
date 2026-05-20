# AI Chatbot Project

A fully functional interactive chatbot built using React, TypeScript, and Vite.

##  Daily Development Log

### Day 1: Project Setup & Baseline
* Bootstrapped the react-chatbot app using Vite, React, and TypeScript.
* Configured the standard project structure and environment dependencies.



    ### Day 2: Building the Chat UI Layout
* I built the main chat interface from scratch and styled the layout using Tailwind CSS.
* Set up the text input area so messages send when hitting the "Enter" key or clicking the button.
* Added the message bubble layout so user texts float to the right (blue) and bot texts go to the left (gray).
* Integrated react-markdown so the app can render clean text formatting from the AI responses.
* Tossed in react-icons  LuBot and LuSendHorizontal to give the header and send button a cleaner look.




### Day 3: Building the Logic Layer (Custom Hooks & API)
* I created useChatbot.ts to manage the app state and handle the connection to the AI backend.
* Integrated **Axios** to make POST requests to the OpenRouter API using the `google/gemma-3-12b-it` model.
* Map-sorted the messages array dynamically to match the API's required structure (`user` to `user`, `bot` to `assistant`).
* Secured my secret OpenRouter API credentials by moving them into an environment variable (`import.meta.env`).
* Developed useChatScroll.ts using a generic TypeScript template to force the message window to auto-scroll down whenever new texts arrive.


### Day 4: Wiring the App and Final Container Layout
* I updated App.tsx to act as the main entry point, importing and rendering the ChatComponent cleanly.
* Wrapped the chatbot interface inside a responsive, max-width wrapper (max-w-lg) so it centers nicely on desktop screens.
* Styled the main container with a drop shadow (shadow-md) and rounded corners (rounded-lg) to make it look like a modern web application.
* Ran local tests to ensure the components, Axios API hooks, and auto-scrolling logic communicate flawlessly without structural crashes.














