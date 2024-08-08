import TomImg from "../../assets/about/Frame 874.svg"
import EmmaImg from "../../assets/about/Frame 875.svg"
import WillImg from "../../assets/about/Frame 876.svg"


function Team() {
    return (
        <div className="font-Inter grid grid-cols-responsive-xl gap-12 my-24 justify-items-center">

            <div >
                <img src={TomImg} alt="" />
                <h3 className="text-3xl font-bold mt-4">Tom Cruise</h3>
                <span>Founder & Chairman</span>
            </div>

            <div >
                <img src={EmmaImg} alt="" />
                <h3 className="text-3xl font-bold mt-4">Emma Watson</h3>
                <span>Managing Director</span>
            </div>

            <div >
                <img src={WillImg} alt="" />
                <h3 className="text-3xl font-bold mt-4">Will Smith</h3>
                <span>Product Designer</span>
            </div>

        </div>
    );
}

export default Team;
