import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Box from '../../ui/Box';

function ContactForm() {
    const handleSumbit = (e) => {
        e.preventDefault();
    };

    return (
        <Box className=" px-6 py-5  md:px-10 md:py-9 ">
            <form onSubmit={handleSumbit} className="flex flex-col ">
                <div className="grid  grid-cols-responsive gap-4  ">
                    <Input classname="form" placeholder="Your Name *" />
                    <Input
                        classname="form"
                        placeholder="Your Email *"
                        type="email"
                    />
                    <Input
                        classname="form"
                        placeholder="Your Phone *"
                        type="tel"
                    />
                </div>
                <div>
                    <textarea
                        name=""
                        id=""
                        placeholder="Your Mesxsage *"
                        rows={10}
                        autoComplete="off"
                        className="mb-8 w-full bg-textWhite2 p-4 hover:outline-none focus:outline-none active:outline-none"
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <Button>Send Message</Button>
                </div>
            </form>
        </Box>
    );
}

export default ContactForm;
