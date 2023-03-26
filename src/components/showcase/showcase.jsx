import './showcase.scss';
import AssetImg from '../assets/devolve-asset.jpg';
import CodingIcon from '../svgs/coding';

export default function Showcase() {
    return(
        <div className='custom_element-showcase text-center custom-extended-component'>
            <div className=" flex-row flex-wrap align-center inline-element-showcase-nth custom-extended-component justify-center">
            <div className='first-showcase_item'>
                <h1 className='m-5 font-chillax font-bold color-black'>The Next Generation Learning.</h1>
                <p className='m-5 font-outfit'>Take the first step to programming with us. Become a programmer soon with our new learning methods. We help you at every step of your learning and career journey.</p>
            </div>
            <div className='first-showcase_item'>
                <img src={AssetImg} alt="" />
            </div>
            </div>
            <div className='flex-row align-center justify-center flex-wrap custom-buttons-cont'>
            <a href="#contact" className='user-s-no text-d-no font-chillax'>join  <span className='font-bold'>.DEVOLVE</span></a>
            <a href="" className='user-s-no text-d-no font-chillax'>SEE CATEGORIES</a>
            </div>
        </div>
    )
}