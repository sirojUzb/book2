import BooksSection from "./components/books-section";
import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Flayer />
      <BooksSection />
    </div>
  );
}

export default App;
