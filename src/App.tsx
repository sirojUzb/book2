import BooksSection from "./components/books-section";
import Flayer from "./components/flayer";
import MobileApp from "./components/mobile-app";
import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/sonner";
import Statistics from "./components/statistics";
import News from "./components/news";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Flayer />
      <BooksSection />
      <MobileApp />
      <Statistics />
      <News />
    </div>
  );
}

export default App;
