import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const reloadAllItem = () => {
    setPeople(data);
  };

  const removeItem = (id) => {
    setPeople((oldValue) => oldValue.filter((el) => el.id !== id));
  };

  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue" }}>Prossimi Incontri</h2>
        <div className="people-list">
          <List data={people} removeItem={removeItem} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={reloadAllItem}>
            Reload
          </button>
          <button className="btn btn-delete" onClick={() => setPeople([])}>
            Delete All
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
