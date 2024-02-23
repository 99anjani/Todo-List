import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChanges = (event) => {
    setText(event.target.value);
  };

  const handleAddItem = () => {
    if (text) {
      setItem([...item, text]);
      setText("");
    }
    if (item.length === 5 * currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleAddItem();
    }
  };
  const handleClearItem = () => {
    if (setItem) {
      setItem([]);
      setText("");
    }
  };

  return (
    <div className="App">
      <div>
        <input
          className="text-box"
          type="text"
          value={text}
          onChange={handleInputChanges}
          onKeyPress={handleEnterKey}
        />
        <button className="add-btn" onClick={handleAddItem}>
          Add
        </button>

        <div className="item-box">
          <TodoList item={item} currentPage={currentPage} />
        </div>
        <button
          className="prev-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="next-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={item.length <= 5 * currentPage}
        >
          Next
        </button>
        <button className="clear-btn" onClick={handleClearItem}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
