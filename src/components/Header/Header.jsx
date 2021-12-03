import React from 'react';
import { useState , useEffect} from 'react';
import './Header.scss'
function Header(props) {

    const [isScroll , setIsScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if(window.scrollY > 0) {
                setIsScroll(true);
            }
            else setIsScroll(false);
        });

        return () => {
            window.removeEventListener("scroll");
        }
    },[])

    return (
        <div className={`header ${isScroll && "header header__black"}`}>
            <div className="header-wrapper">
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="nextflix-logo" />
                <img className="header__user" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="nextflix-user" />
            </div>
        </div>
    );
}

export default Header;