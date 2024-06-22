import { useState } from 'react';

export const Signup = ({ onSignup, users }) => {
    const [user, setUser] = useState({ id: "", name: "", surname: "", login: "", password: "" });
    const [message, setMessage] = useState({ text: "", type: "" });

    const handleSubmit = e => {
        e.preventDefault();

        if (!user.id.trim() || !user.name.trim() || !user.surname.trim() || !user.login.trim() || !user.password.trim()) {
            return setMessage({ text: "All fields must be filled", type: "error" });
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(user.login)) {
            return setMessage({ text: "Login field must contain a valid email", type: "error" });
        }

        if (users.some(existingUser => existingUser.id === parseInt(user.id))) {
            return setMessage({ text: "ID is already in use", type: "error" });
        }

        if (users.some(existingUser => existingUser.login === user.login)) {
            return setMessage({ text: "Login is already in use", type: "error" });
        }

        if (user.password.length < 6) {
            return setMessage({ text: "Password should be at least 6 characters long", type: "error" });
        }

        onSignup({ ...user, id: parseInt(user.id) });
        setUser({ id: "", name: "", surname: "", login: "", password: "" });
        setMessage({ text: "User added successfully", type: "success" });
    };

    return (
        <div>
            <h3>Signup</h3>
            <form onSubmit={handleSubmit}>
                {message.text && <p style={{ color: message.type === "error" ? 'red' : 'green' }}>{message.text}</p>}
                <label>ID</label>
                <input type="number" placeholder="ID" value={user.id} onChange={e => setUser({ ...user, id: e.target.value })} />
                <label>Name</label>
                <input type="text" placeholder="Name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
                <label>Surname</label>
                <input type="text" placeholder="Surname" value={user.surname} onChange={e => setUser({ ...user, surname: e.target.value })} />
                <label>Login</label>
                <input type="email" placeholder="Email" value={user.login} onChange={e => setUser({ ...user, login: e.target.value })} />
                <label>Password</label>
                <input type="password" placeholder="Password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};
