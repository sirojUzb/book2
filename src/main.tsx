import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(
  document.getElementById("root") ?? document.createElement("div")
).render(<App />);
// fix "husky"

// dasturchilarning xabarlari "conventional-commits" orqali nazorat qilinadi;
// types other than fix: and feat: are allowed, for example @commitlint/config-conventional
// recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
