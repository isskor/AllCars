import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

function TestingUserContext() {

    const { userState, registerUser } = useContext(UserContext);
    const [userInfo, setUserInfo] = useState({
        name: "",
        address: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: [e.target.value]});
    };

    const handleClick = (e) => {
        e.preventDefault();
        registerUser(userInfo);
    }

    return(
        <div>
            <h1>Testing User Context</h1>
            <form onChange={handleChange}>
                <input type="text" placeholder="name" name="name" />
                <input type="text" placeholder="address" name="address" />
                <input type="text" placeholder="e-mail" name="email" />
                <input type="text" placeholder="phone number" name="phone" />
                <button onClick={handleClick}>Submit</button>
            </form>
            <div>
                <ul>
                    {userState.map((user, i) => (
                        <li key={i}>Name: {user.name}, Address: {user.address}, E-mail: {user.email}, Phone number: {user.phone}</li>
                    ))}
                </ul>
            </div>
        </div>
    )


}

export default TestingUserContext;