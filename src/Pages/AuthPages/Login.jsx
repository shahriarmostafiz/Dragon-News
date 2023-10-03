import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
    }
    return (
        <div className="flex justify-center my-40">
            <form onSubmit={handleLogin}>
                <div className="w-96">

                    <input type="email" name="email" id="email" placeholder="Your Email" className="outline-blue-950 border px-4 py-2 rounded w-full border-blue-950" />
                </div>
                <div className="w-96">

                    <input type="Password" name="password" id="password" placeholder="Your Email" className="w-full px-4 py-2 rounded  outline-blue-950 border-blue-950 border my-6" />
                </div>
                <div className="w-96">

                    <input type="submit" value="Submit" className="bg-blue-600 text-white px-8 py-2 rounded w-full" />
                </div>

                <p className="my-4">Dont have an Account ? <Link className="text-blue-800 font-bold" to={'/register'}>Register </Link></p>
            </form>
        </div>
    );
};

export default Login;