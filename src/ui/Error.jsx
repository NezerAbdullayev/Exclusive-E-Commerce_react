import Button from "../ui/Button"

import Header from '../features/Header/Header';
import Navbar from '../features/Header/Navbar';
import RoadMapContainer from './RoadMapContainer';
import Tab from './Tab';
import Footer from "../features/Footer/Footer";

function NotFound() {

    return (
        <>
            <Header>
                <Navbar />
            </Header>

            <div className="mx-auto max-w-6xl px-2.5 text-center">
                <RoadMapContainer>
                    <Tab to="/" name="Home" />
                    <Tab to="/error" name="404 Error" active={true} />
                </RoadMapContainer>
                <h1 className="text-3xl  font-bold xs:text-6xl sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem]">
                    404 Not Found
                </h1>
                <div className="mt-10 mb-10 sm:mb-20">
                    Your visited page not found. You may go home page.
                </div>
               <div className="mb-20"> <Button to="/">Back to home page</Button></div>
            </div>

            <Footer />
        </>
    );
}

export default NotFound;
