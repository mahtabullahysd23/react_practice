function ChildComponent({ label, isSelected }) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        alert(`This is Item ${label}`);
      }}
      className={`child ${isSelected ? "selected" : ""}`}
    >
      {label}
    </div>
  );
}

export default ChildComponent;
