import React from 'react';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
    }
    return (
        <div className="flex justify-center my-40">
            <form onSubmit={handleRegister}>
                <div className="w-96">

                    <input type="email" name="email" id="email" placeholder="Your Email" className="outline-blue-950 border px-4 py-2 rounded w-full border-blue-950" />
                </div>
                <div className="w-96">

                    <input type="Password" name="password" id="password" placeholder="Your Email" className="w-full px-4 py-2 rounded  outline-blue-950 border-blue-950 border my-6" />
                </div>
                <div className="w-96">
                    <input type="submit" value="Register" className="bg-blue-800 text-white px-8 py-2 rounded w-full" />
                </div>

            </form>
        </div>
    );
};

export default Register;