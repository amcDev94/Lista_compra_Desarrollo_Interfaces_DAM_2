import { useState } from "react";

const AddInput = ({ onAddClick }) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text.trim() != "") {
      onAddClick(text);
      setText("");
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  return (
    <div className="flex align-middle gap-2">
      <input
        className="border p-1.5"
        onChange={handleTextChange}
        value={text}
      />
      <button onClick={handleClick}>Añadir</button>
    </div>
  );
};

export default AddInput;
