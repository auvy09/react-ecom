import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
const Signup = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password.length < 6) {
            setError('Password should be six characters or more');
            return;
        }
        if (password !== confirm) {
            setError("Your password did not match ");
            return;
        }
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(e => console.log(e));

    }
    return (
        <div>
            <div className='form-container'>
                <h2 className='form-title'>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Please Enter Email' id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='Please Enter Password' id="" required />
                    </div>

                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" placeholder='Please Enter Password Again' id="" required />
                    </div>
                    <input className='btn-submit' type="submit" value='SignUp' />
                </form>
                <p>Already have a account? <Link className='signup-link' to='/login'>Please Login!</Link> </p>
                <p className='text-error'>{error}</p>
            </div>
        </div>
    );
};

export default Signup;