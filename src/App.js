import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { useGlobalContext } from "./context";

function App() {
  const { isModalOpen, openModal } = useGlobalContext();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Modal />
      {!isModalOpen && (
        <main className="modal-controller">
          <button className="btn btn-selector" onClick={openModal}>
            Apri Modal
          </button>
        </main>
      )}
    </div>
  );
}

export default App;
