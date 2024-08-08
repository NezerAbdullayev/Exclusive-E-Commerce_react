import Button from '../../ui/Button';

function Trending() {
    const src = '/src/assets/hero/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg';

    return (
        <div className="trending mb-14 mt-40 grid justify-center gap-8 bg-black  px-10 py-20 sm:py-28">
            <div className="flex flex-col justify-evenly ">
                <div className="text-base text-newGreen">Categories</div>
                <h3 className="my-5 text-4xl text-stone-50 lg:text-5xl">
                    Enhance Your <br /> Music Experience
                </h3>
                <Button type="green">Buy New!</Button>
            </div>
            <img
                src={src}
                alt="cart"
                className="justify-self-center  md:max-w-72 lg:max-w-80"
            />
        </div>
    );
}

export default Trending;
