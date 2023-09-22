import Button from "./button";
const Header = ({onLinkClick}) => {
  const handleClick = (linkClicked) => {
    onLinkClick(linkClicked);
  }
  return (
    <>
      <div
        style={{
          height:"40px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor:"black",
          color:"white"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width:"20%"
          }}
        >
            <Button text = "Home" link="#home" onLinkClick={handleClick}/>
            <Button text = "Contact" link="#contact" onLinkClick={handleClick}/>
            <Button text = "About" link="#about" onLinkClick={handleClick}/>
        </div>
        <div style={{
            display: "flex",
            justifyContent:"end"
          }}>
        <Button text = "Sign Up"  link="#signup" onLinkClick={handleClick}/>
        </div>
     
      </div>
    </>
  );
};
export default Header;
