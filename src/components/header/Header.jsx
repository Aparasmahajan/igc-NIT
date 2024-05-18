
import Banner from "./banner/Banner";
import header from "../../assets/header.png";
export const Header = () => {
  return (<>
   <div className="w-full h-full my-2">
  <img className="w-full h-full object-cover object-center" src={header} alt="Header Image" />
</div>
{/* < Banner/> */}
</>
  );
};
