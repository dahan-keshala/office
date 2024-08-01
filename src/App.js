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
      <main>
        <Button onclick={handleButtonCLick} label="Click Me" />
      </main>
      <Footer />
    </>
  );
}

export default App;
