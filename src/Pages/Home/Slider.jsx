import { useState } from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
    const [stop, setmotion] = useState(true)
    return (
        <div className="flex relative ">
            <button onClick={() => setmotion(!stop)} className="btn btn-error"> Latest</button>
            <Marquee className="border absolute b-l-0" speed={70} play={stop}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default Slider;