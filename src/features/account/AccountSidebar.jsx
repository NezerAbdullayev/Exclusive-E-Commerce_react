import Nav from '../../ui/Nav';
import AccountBox from './AccountBox';

function AccountSidebar() {
    return (
        <div className="mt-6  hidden flex-col xs:min-w-52 sm:flex">
            <AccountBox title="Manage My Account">
                <Nav to="/account" type="account" end={true}>
                    My Profile
                </Nav>
                <Nav to="/side" type="account">
                    Address Book
                </Nav>
                <Nav to="/signin" type="account">
                    My Payment Options
                </Nav>
            </AccountBox>

            <AccountBox title="My Orders">
                <Nav to="/side" type="account">
                    My Returns
                </Nav>
                <Nav to="/side" type="account">
                    My Cancellations
                </Nav>
            </AccountBox>
        </div>
    );
}

export default AccountSidebar;
