// import "./Header.css";
import header from "../../assets/header.png";
export const Header = () => {
  return (
   <div className="w-full h-52 mb-4">
    <img className= "w-full h-full object-cover" src={header}/>
   </div>
  );
};
