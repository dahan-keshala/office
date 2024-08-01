import Card from "./components/class/Card";
import Navbar from "./components/class/Navbar";
import Sidebar from "./components/class/Sidebar";
import Button from "./components/functional/Button";
import Footer from "./components/functional/Footer";
import Header from "./components/functional/Header";

function App() {
  const handleButtonCLick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <main>
        <h1> Welcome to My Appilication</h1>
        <Card titel="Card Titel" content="this is a card component." />
        <Button onclick={handleButtonCLick} label="Click Me" />
      </main>
      <Footer />
    </>
  );
}

export default App;
