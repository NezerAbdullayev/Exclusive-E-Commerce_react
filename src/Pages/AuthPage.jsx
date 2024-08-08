import Section from '../ui/Section';

// img
import Auth from '../assets/hero/Side Image.svg';

import { Outlet } from 'react-router-dom';

function AuthPage() {

    return (
        <Section>
            <div className="mb-20 mt-16 grid grid-cols-1 items-center gap-12 px-0 sm:px-6 md:grid-cols-2 md:px-0 ">
                <img
                    src={Auth}
                    alt="auth img"
                    className="hidden w-0 justify-self-center sm:block  sm:w-[80%]"
                />

                <div>
                    <div className="flex items-center justify-center">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default AuthPage;
