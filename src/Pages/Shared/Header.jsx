import moment from 'moment'
import logo from '../../assets/logo.png'
const Header = () => {
    // const x = new Date()
    return (
        <div className='my-8 space-y-4 text-center'>
            <div className="flex justify-center">
                <img src={logo}></img>
            </div>
            <p className="text-lg">
                Journalism Without Fear or Favour
            </p>
            <p>
                {
                    // x.toDateString().split(' ').join(', ')
                    moment().format("dddd, MMMM DD, YYYY")

                }
            </p>
        </div>
    );
};

export default Header;