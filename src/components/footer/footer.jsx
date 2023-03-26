import './footer.scss';
import MainLogo from '../../mainlogo';

export default function Footer() {
    return(
        <div className='last-child-component-footer'>
            <div>
                <MainLogo/>
                <h2 className='color-white font-chillax font-bold m-5'>The Next Generation Learning.</h2>
                <h2 className='m-5 color-white font-g-sans font-bold'>Copyright 2018-2023© <span>All Rights Reserved.</span></h2>
            </div>
            <div className='font-satoshi font-bold color-white footer-ex-element-second' id='contact'>
               <p> devolve@gmail.com</p>
               <p> devolve@services.com</p>
               <p>+1 928-429-9345</p>
               <p>+1 951-257-9708</p>
            </div>
        </div>
    )
}