import { useState } from 'react';
import { UserList } from './components/UserList';
import { AddUser } from './components/AddUser';
import { Signup } from './components/SignUp';
import './App.css';

function App() {
    const [users, setUsers] = useState([
        { id: 101, name: "Tiko", surname: "Smith", login: "tiko@example.com", password: "password1" },
        { id: 102, name: "Ashot", surname: "Johnson", login: "ashot@example.com", password: "password2" },
        { id: 103, name: "Hayk", surname: "Williams", login: "hayk@example.com", password: "password3" }
    ]);

    const addUser = (obj) => {
        setUsers([...users, obj]);
    };

    return (
        <>
            <UserList users={users} />
            {/* <AddUser onAdd={addUser} /> */}
            <Signup onSignup={addUser} users={users} />
        </>
    );
}

export default App;
