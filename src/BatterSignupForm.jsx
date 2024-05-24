import { useState } from "react";

function BatterSignupForm() {
    const [formData, setFormData] = useState({firstName: "", lastName: "", password: ""});
    const handleChange = (e) => {
        // const changedField = e.target.name;
        // const newValue = e.target.value;        

        // setFormData(currData => {
        //     currData[changedField] = newValue;
        //     return {...currData}
        // });

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${formData.firstName} ${formData.lastName} ${formData.password}`);
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input
                type="text"
                placeholder="firstname"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                id="firstname" />
            <label htmlFor="lastname">Last Name</label>
            <input
                type="text"
                placeholder="lastname"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                id="lastname" />
            <button onClick={handleSubmit}>Submit</button>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                id="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default BatterSignupForm;