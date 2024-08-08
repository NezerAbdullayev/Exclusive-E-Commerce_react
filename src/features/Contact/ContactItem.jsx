import CreateContactCart from './CreateContactCart';

// import img
import Phone from '../../assets/icons/icons-phonetel.svg';
import Mail from '../../assets/icons/icons-mailmes.svg';
import Box from '../../ui/Box';

function ContactItem() {
    return (
        <Box className="flex flex-col gap-8 px-6 py-5 shadow md:px-10 md:py-9">
            {/* create cart */}
            <CreateContactCart
                img={Phone}
                title="Call To Us"
                details={[
                    'We are available 24/7, 7 days a week.',
                    'Phone: +8801611112222',
                ]}
            />

            <hr className="border-stone-950" />

            {/* create cart */}
            <CreateContactCart
                img={Mail}
                title="Write To US"
                details={[
                    'Fill out our form and we will contact you within 24 hours.',
                    'Emails: customer@exclusive.com',
                    'Emails: support@exclusive.com',
                ]}
            />
        </Box>
    );
}

export default ContactItem;
