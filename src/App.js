import "./App.css";
import AddWilderForm from "./components/AddWilderForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WildersGrid from "./components/WildersGrid";
import { WildersProvider } from "./contexts/WildersContext";

function App() {
  return (
    <div>
      <Header />
      <WildersProvider>
        <AddWilderForm />
        <WildersGrid />
      </WildersProvider>
      <Footer />
    </div>
  );
}

export default App;
