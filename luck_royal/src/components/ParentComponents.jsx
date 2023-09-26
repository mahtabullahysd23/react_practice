import { useState } from "react";
import ChildComponent from "./ChildComponent";
import Button from "./Button";
function ParentComponent({ onChildSelected }) {
  const [children, setChildren] = useState([]);
  const [childName, setChildName] = useState("");
  const [choise, setChoise] = useState("");
  const [selectedChildIndex, setSelectedChildIndex] = useState(null);

  const addChild = (childName, e) => {
    e.preventDefault();
    if(childName === "") {
        alert("Please enter a name");
        return;
    }
    if (children.includes(childName)) {
      alert("Name already exists");
      return;
    }
    if (children.length >= 12) {
      alert("You can't add more than 12 children");
      return;
    }
    if(childName.length > 5) {
        alert("Name can't be more than 5 characters");
        return;
    }
    setChildren([...children, childName]);
  };

  const removeChild = () => {
    if (children.length > 0) {
      const newChildren = [...children];
      newChildren.pop();
      setChildren(newChildren);
    }
  };
  const spin = () => {
    if(choise === "") {
        alert("Please select your choise");
        return;
    }
    if (children.length > 0) {
      const randomIndex = Math.floor(Math.random() * children.length);
      const randomChild = children[randomIndex];
      setSelectedChildIndex(randomIndex);
      if (randomChild === choise) {
        onChildSelected("You won");
      } else {
        onChildSelected("Better luck next time");
      }
    }
  };
  return (
    <div className="container">
      <div onClick={()=>{alert(`You can add ${12-children.length} more Items`)}} className="parent">
        {children.map((child, index) => (
          <ChildComponent key={index} label={`${child}`} isSelected={index === selectedChildIndex}/>
        ))}
        {children.length === 0 && <p>No children</p>}
      </div>
      <div className="buttons">
        <p>Add Item</p>
        <form className="form-div">
          <input
            onChange={(e) => {
              setChildName(e.target.value);
            }}
            type="text"
            placeholder="Child Name"
            value={childName}
          />
          <input
            onClick={(e) => {
              addChild(childName, e);
              setChildName("");
            }}
            type="submit"
            value="Submit"
          />
        </form>
        <p>choose your option: </p>
        <div className="btn-group">
          <select value={choise} onChange={(e) => setChoise(e.target.value)}>
            <option value="">Select a child</option>
            {children.map((child, index) => (
              <option key={index} value={child}>
                {child}
              </option>
            ))}
          </select>
          <Button handleclick={spin} label="Spin" />
        </div>
        <div className="btn-group">
          <p>Remove Item</p>
          <Button handleclick={removeChild} label="Remove" />
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;
