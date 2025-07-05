 What is Virtual DOM?

The Virtual DOM (VDOM) is a lightweight JavaScript representation of the real DOM.

It acts as a copy of the real DOM kept in memory.

When state or props change, React first updates the Virtual DOM.

Then, React compares it with the previous version using a process called diffing.

After diffing, React updates only the changed parts in the real DOM — this is much faster than re-rendering the entire DOM.

Think of it as a "draft" version of the webpage where React tests and figures out changes before making them live.

⚙️ What is Reconciliation?

Reconciliation is the process of comparing the new Virtual DOM with the old one.

React uses a diffing algorithm to find changes.

It then applies those minimal changes to the real DOM.

This makes UI updates efficient and smooth.

Example: If a button text changes, React will only update that button’s text node, not the whole UI.

🔁 What is React Fiber?

Fiber is React’s new architecture (since React 16) for rendering and updating the Virtual DOM.

It improves performance and provides fine-grained control over rendering.

Fiber allows React to pause, abort, and resume rendering — helpful for apps with heavy UI or animations.

Key Features of Fiber:

Incremental rendering: Breaks rendering into chunks so UI stays responsive.

Priority-based updates: Important updates (like input typing) happen faster.

Concurrency: Helps React prepare updates in the background before committing them to the DOM.

Think of Fiber like a smart manager that breaks tasks into smaller parts and handles them based on urgency.