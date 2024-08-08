import Section from '../ui/Section';
import AccountSidebar from '../features/account/AccountSidebar';
import AccountForm from '../features/account/AccountForm';
import { useSelector } from 'react-redux';
import Tab from '../ui/Tab';
import RoadMapContainer from '../ui/RoadMapContainer';

function AccountPage() {
    const { name } = useSelector((state) => state.user);

    return (
        // account start
        <Section>
            <div className="flex flex-wrap items-center justify-between px-4">

                <RoadMapContainer>

                    <Tab to="/" name="Home" />
                    <Tab to="/account" name="My Account" active={true} />
                    
                </RoadMapContainer>

                <div>
                    Welcome! <span className="text-main">{name}</span>
                </div>
            </div>

            <div className="ld:gap-24 mb-32 flex  gap-10">
                <AccountSidebar />
                <AccountForm />
            </div>
        </Section>
        // account end
    );
}

export default AccountPage;
