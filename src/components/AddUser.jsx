import { useState } from 'react';

export const AddUser = ({ onAdd }) => {
    const [user, setUser] = useState({ name: "", salary: 80000 });
    const [error, setError] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        if(!user.name.trim()){
            return setError("please fill the field")
        }
        onAdd(user);
        setUser({name: "", salary: 80000});
        setError("")
    }

    return <div>
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>
            {error && <p style = {{color:'red'}}>{error}</p>}
            <label>First name</label>
            <input type="text" placeholder="Name"  value = {user.name} onChange={e => setUser({...user, name: e.target.value}) }/>
            <label>Salary</label>
            <input type="number" placeholder="Salary" value = {user.salary} onChange={e => setUser({...user, salary: e.target.value}) }/>
            <button>save</button>
        </form>

    </div>
}