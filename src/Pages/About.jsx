import Section from '../ui/Section';
import OurStory from '../features/About/OurStory';
import Services from '../ui/Services';
import AboutSercives from '../features/About/AboutSercives';
import Team from '../features/About/Team';
import RoadMapContainer from '../ui/RoadMapContainer';
import Tab from '../ui/Tab';

function About() {

    return (
        <Section>

            <RoadMapContainer>
                <Tab to="/" name="Home" />
                <Tab to="/about" name="About" active={true} />
            </RoadMapContainer>

            <OurStory />

            <AboutSercives />

            <Team />

            <Services />
        </Section>
    );
}

export default About;
