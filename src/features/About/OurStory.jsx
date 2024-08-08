import AboutHero from '../../assets/hero/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.svg';

function OurStory() {
    return (
        <div className="mt-36 grid grid-cols-1 items-center gap-x-7 gap-y-12 sm:grid-cols-2">
            <div>
                <h3 className="mb-10 text-center  text-5xl font-bold sm:text-4xl md:text-5xl">
                    Our Story
                </h3>
                <p>
                    Launced in 2015, Exclusive is South Asia’s premier online
                    shopping makterplace with an active presense in Bangladesh.
                    Supported by wide range of tailored marketing, data and
                    service solutions, Exclusive has 10,500 sallers and 300
                    brands and serves 3 millioons customers across the region.
                    <br /> <br />
                    Exclusive has more than 1 Million products to offer, growing
                    at a very fast. Exclusive offers a diverse assotment in
                    categories ranging from consumer.
                </p>
            </div>
            <div>
                <img src={AboutHero} alt="about img" />
            </div>
        </div>
    );
}

export default OurStory;
