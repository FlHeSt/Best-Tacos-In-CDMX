import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Orientation from "./components/Orientation";
import Filter from "./components/Filter";

export default function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <Orientation />
      <p>This is a paragraph</p>
      <p>This is another paragraph</p>
      <button>this is a button</button>
      <Filter />
      <Footer />
    </div>
  );
}
