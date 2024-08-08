import Frame1 from "../../assets/gallery/Frame 684.svg";
import Frame2 from "../../assets/gallery/Frame 685.svg";
import Frame3 from "../../assets/gallery/Frame 686.svg";
import Frame4 from "../../assets/gallery/Frame 687.svg";

function Galery() {
  return (
    <div className="grid gap-7 ">
      <div className="relative sm:col-start-1 sm:col-end-7 sm:row-start-1 sm:row-end-13 w-full  ">
        <img
          src={Frame1}
          alt="playstasion"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-7 left-10 font-Inter text-textWhite ">
          <h4 className="text-2xl ">PlayStation 5</h4>
          <span className="text-sm font-sans my-4  block">
            Black and White version of the PS5 <br />
            coming out on sale.
          </span>
          <a href="#" className="underline block">Shop New</a>
        </div>
      </div>

      <div className="sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:row-end-7 ">
        <img className="w-full" src={Frame2} alt="product" />
      </div>

      <div className="sm:col-start-7 sm:col-end-10 sm:row-start-7 sm:row-end-13 ">
        <img className="w-full" src={Frame3} alt=" product" />
      </div>

      <div className="sm:col-start-10 sm:col-end-13  sm:row-start-7 sm:row-end-13">
        <img className="w-full" src={Frame4} alt="gucci parfum" />
      </div>
    </div>
  );
}

export default Galery;
