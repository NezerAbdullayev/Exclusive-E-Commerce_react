import { useSelector } from 'react-redux';
import Box from '../../ui/Box';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import useEditAccount from '../../hooks/useEditAccount';
import useEditFormSubmit from '../../hooks/useEditFormSubmit';
import toast from 'react-hot-toast';

function AccountForm() {

    const {
        name: userName,
        email: userEmail,
        password: userPassword,
    } = useSelector((state) => state.user);


    const [editUserDate, setEditUserDate,reset] = useEditAccount(
        userName,
        userEmail,
        userPassword
    );


    const { editFormSubmit, error } = useEditFormSubmit();

    const { name, email, password, newPassword, confirmNewPassword }=editUserDate


    const handleFormSumbit = (e) => {
        e.preventDefault();
        editFormSubmit(
            name,
            email,
            password,
            newPassword,
            confirmNewPassword,
        );
        //reset inputs
        reset();   
    };

    if(error) toast.error(error)

    return (
        <Box className="px-4 py-10 lg:px-20 ">
            <form onSubmit={handleFormSumbit}>
                <h2 className="text-main">Edit Your Profile</h2>

                <div className="grid grid-cols-1 justify-center gap-x-12 md:grid-cols-2">
                    <div>
                        <label className="block">First Name</label>
                        <Input
                            classname="account"
                            value={name}
                            name="name"
                            onChange={setEditUserDate}
                        />
                    </div>

                    <div>
                        <label className="block">First Name x2</label>
                        <Input
                            classname="account"
                            placeholder="çox uzanmasın diye cixartmisam"
                            disabled={true}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 justify-center  gap-x-12 md:grid-cols-2">
                    <div>
                        <label className="block ">Email </label>
                        <Input
                            classname="account"
                            type="email"
                            name="email"
                            value={email}
                            disabled={true}
                        />
                    </div>
                    <div>
                        <label className="block">Address</label>
                        <Input
                            classname="account"
                            placeholder="uzanmasin diye"
                            disabled={true}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="mb-2">Password Changes</label>

                    <Input
                        placeholder="Current Passwod"
                        classname="account"
                        type="password"
                        isRequired={false}
                        name="password"
                        onChange={setEditUserDate}
                        value={password}
                    />
                    <Input
                        placeholder="New Passwod"
                        classname="account"
                        type="password"
                        isRequired={false}
                        name="newPassword"
                        onChange={setEditUserDate}
                        value={newPassword}
                    />
                    <Input
                        placeholder="Confirm New Passwod"
                        classname="account"
                        type="password"
                        isRequired={false}
                        name="confirmNewPassword"
                        onChange={setEditUserDate}
                        value={confirmNewPassword}
                    />
                </div>

                <div className="mt-5 flex  flex-wrap justify-end gap-x-5">
                    <Button type="cancel">Cancel</Button>
                    <Button>Save Changes</Button>
                </div>
            </form>
        </Box>
    );
}

export default AccountForm;
