
const Button = ({handleclick,label}) => {
    let myclass = "btn-class";
    if (label === "Spin") {
        myclass = "btn-class spin-class";
    }
    if (label === "Remove") {
        myclass = "btn-class remove";
    }
  return (
    <button className={myclass} onClick={handleclick}>
        {label}
    </button>
  )
}

export default Button