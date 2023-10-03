import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightNav = () => {
    return (
        <div className='p-4 space-y-4'>
            {/* login with section  */}
            <div className='space-y-4'>
                <h1 className="text-3xl font-bold">Login with</h1>
                <div className=' '>
                    <button className='btn flex  items-center w-3/4 btn-outline btn-accent text-xl'><FcGoogle></FcGoogle>Login  </button>
                </div>
                <div>
                    <button className='btn flex items-center justify-center w-3/4 btn-outline text-xl'><FaGithub></FaGithub>Login  </button>
                </div>
            </div>
            {/* find us section  */}
            <div>
                <h1 className="text-3xl font-bold mb-5">Find Us on</h1>
                <div className='border rounded-t-lg'>
                    <a href="" className='flex p-4 items-center gap-4 text-lg'><FaFacebook></FaFacebook>Facebook</a>
                </div>
                <div className='border-x'>
                    <a href="" className='flex p-4 items-center gap-4 text-lg'><FaTwitter></FaTwitter>Twitter </a>
                </div>
                <div className='border rounded-b-lg'>
                    <a href="" className='flex p-4 items-center gap-4 text-lg'><FaInstagram></FaInstagram>Twitter </a>
                </div>
            </div>
            {/* q section  */}
            <div>
                <h1 className="text-3xl font-bold my-4 text-center">Q Zone </h1>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;