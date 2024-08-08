import Shop from '../../assets/about/Services.svg';
import Basket from '../../assets/about/Services (1).svg';
import Service from '../../assets/about/Services (2).svg';

function AboutSercives() {
    return (
        <div className="grid grid-cols-responsive gap-8 mt-16   justify-items-center">
            <div className="justify-ceter flex max-w-[240px] flex-col items-center rounded border border-stone-400 p-10 ">
                <img src={Shop} alt="services img" />
                <h3 className="font-Inter text-4xl font-bold mt-2">10.5k</h3>
                <span className="font-Inter text-center">Sallers active our site</span>
            </div>
            <div className="justify-ceter flex max-w-[240px] flex-col items-center rounded border border-stone-400 p-10 ">
                <img src={Basket} alt="services img" />
                <h3 className="font-Inter text-4xl font-bold mt-2">16.1k</h3>
                <span className="font-Inter text-center">Lorem, ipsum dolor.</span>
            </div>
            <div className="justify-ceter flex max-w-[240px] flex-col items-center rounded border border-stone-400 p-10 ">
                <img src={Service} alt="services img" />
                <h3 className="font-Inter text-4xl font-bold mt-2">20.8k</h3>
                <span className="font-Inter text-center">sit amet consectetur.</span>
            </div>
        </div>
    );
}

export default AboutSercives;
