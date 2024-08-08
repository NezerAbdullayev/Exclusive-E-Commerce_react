import { NavLink } from 'react-router-dom';

import Section from '../ui/Section';

import ContactItem from '../features/Contact/ContactItem';
import ContactForm from '../features/Contact/ContactForm';
import RoadMapContainer from '../ui/RoadMapContainer';
import Tab from '../ui/Tab';

function ContactPage() {
    return (
        <Section>
            <RoadMapContainer>
 
                <Tab to="/" name="Home"  />
                <Tab to="/contact" active={true} name="Contact" />

            </RoadMapContainer>

            {/* contactItem & Contact Form */}
            <div className="mb-20  grid grid-cols-1 gap-7 sm:mb-40 sm:grid-cols-[1fr_2.5fr] ">
                <ContactItem />

                <ContactForm />
            </div>
            {/* contactItem & Contact Form  end */}
        </Section>
    );
}

export default ContactPage;
