import './benefits.scss';
import { RxRocket } from 'react-icons/rx'
import { RiUserFollowLine } from 'react-icons/ri'
import { IoEarthOutline } from 'react-icons/io5'
import { AiFillProject } from 'react-icons/ai';


export default function Benefits() {
    return(
        <div className='benefits-section-slash-import text-center'>
            <h1 className='first-section-component color-white font-normal'>Benefits of joining <span className='font-bold'>.devolve</span></h1>
            <div className='custom-benefit-container flex-row align-center justify-center flex-wrap'>
                <div className="benefit-container_item color-advanced">
                    <div className="first-benefit-port-item flex-row align-start text-left justify-start">
                        <RxRocket/>
                        <h1 className='font-chillax font-bold'>Fast Learning</h1>
                    </div>
                    <p className='text-left font-chillax font-normal color-black m-5'>We bring you closer to becoming a programmer through our special learning methodology. This method saves you time.</p>
                </div>
                <div className="benefit-container_item color-advanced">
                    <div className="first-benefit-port-item flex-row align-start  text-left justify-start">
                        <RiUserFollowLine/>
                        <h1 className='font-chillax font-bold'>Become Top 1%</h1>
                    </div>
                    <p className='text-left font-chillax font-normal color-black m-5'>Our intermediate and advanced courses help you continue to build your skills so that you can land senior roles and be recognized as a top tech professional.</p>
                </div>
                <div className="benefit-container_item color-advanced">
                    <div className="first-benefit-port-item flex-row align-start  text-left justify-start">
                        <IoEarthOutline/>
                        <h1 className='font-chillax font-bold'>Work Anywhere</h1>
                    </div>
                    <p className='text-left font-chillax font-normal color-black m-5'>We can give you a curated roadmap to build your dream career and become your own boss, no matter your experience level.</p>
                </div>
                <div className="benefit-container_item color-advanced">
                    <div className="first-benefit-port-item flex-row align-start  text-left justify-start">
                        <AiFillProject/>
                        <h1 className='font-chillax font-bold'>Real Projects</h1>
                    </div>
                    <p className='text-left font-chillax font-normal color-black m-5'>The projects we'll help you build are professional, real-world apps that will make your portfolio stand out and impress potential employers.</p>
                </div>
            </div>
        </div>
    )
}