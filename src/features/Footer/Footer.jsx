import FooterNav from './FooterNav';

import InstallApp from '../../assets/icons/Frame 719.svg';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from 'react-icons/fa';

const styles = {
    list: 'flex flex-col md:justify-self-center',
    title: 'text-textWhite2 mb-3',
    media: 'text-textWhite2 cursor-pointer  text-xl  transition-all duration-300 hover:text-blue-600 hover:shadow hover:shadow-blue-400',
};

function Footer() {
    return (
        <footer className="bg-black py-20">
            <div className="footer_grid  mx-auto xs:grid max-w-7xl items-start gap-x-4 gap-y-6 px-10 sm:px-4">
                <ul className={styles.list}>
                    <FooterNav>Exclusive</FooterNav>
                    <FooterNav>Subscribe</FooterNav>
                    <FooterNav>Get 10% off your first order</FooterNav>
                </ul>
                <ul className={styles.list}>
                    <h3 className={styles.title}>Support</h3>
                    <FooterNav>Stockholm sweden</FooterNav>
                    <FooterNav>exclusive@gmail.com</FooterNav>
                    <FooterNav>+88015-88888-9999</FooterNav>
                </ul>
                <ul className={styles.list}>
                    <h3 className={styles.title}>Account</h3>
                    <FooterNav>My Account</FooterNav>
                    <FooterNav>Login / Register</FooterNav>
                    <FooterNav>Cart</FooterNav>
                    <FooterNav>Wishlist</FooterNav>
                    <FooterNav>Shop</FooterNav>
                </ul>
                <ul className={styles.list}>
                    <h3 className={styles.title}>Quick Link</h3>
                    <FooterNav>Privacy Policy</FooterNav>
                    <FooterNav>Terms Of Use</FooterNav>
                    <FooterNav>FAQ</FooterNav>
                    <FooterNav>Contact</FooterNav>
                </ul>
                <ul className={styles.list}>
                    <h3 className={styles.title}>Download App</h3>
                    <span className="text-xs text-textWhite2 opacity-75">
                        Save $3 with App New User Only
                    </span>
                    <img src={InstallApp} alt="download app" className="my-1" />
                    <div className="mt-4 flex items-center justify-center gap-5 ">
                        <FaFacebookF className={styles.media} />
                        <FaTwitter className={styles.media} />
                        <FaInstagram className={styles.media} />
                        <FaLinkedinIn className={styles.media} />
                    </div>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
