import { useState } from "react";
const Form = (props) => {
    const [inputs, getInputs] = useState({});
    // const [userName, setUserName] = useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        getInputs(values => ({ ...values, [name]: [value] }))
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        alert(inputs)
    }

    return (
        <>
            <form action="" onSubmit={clickSubmit}>
                <label htmlFor="">User Name</label>
                <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} />

                <label htmlFor="">Password</label>
                <input type="text" name="password" value={inputs.password || ""} onChange={handleChange} />

                <input type="submit" value="Add" />
            </form>
        </>
    );
}


export default Form;