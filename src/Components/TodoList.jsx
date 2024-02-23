import React from "react";
import "./TodoList.css";
function TodoList({ item, currentPage }) {
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const paginatedItems = item.slice(startIndex, endIndex);

  return (
    <div>
      <ul className="item-list">
        {paginatedItems.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
