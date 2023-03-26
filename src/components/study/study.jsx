import './study.scss';
import { SiShopify } from 'react-icons/si';
import { TbBrandAdobe } from 'react-icons/tb';
import { TbBrandBootstrap } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { SiBrave } from 'react-icons/si'


export default function Study() {
    return(
        <div className='index-i-component-students-section text-center'>
            <h1 className='first-section-component color-advanced'>Our Graduated Students</h1>
            <div className="custom-study-container flex-row align-center justify-center flex-wrap">
                <div className="lit-study_item flex-column align-center justify-center">
                    <div className="lil-study-item-port flex-row align-center justify-center">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Student" />
                        <h1 className='font-chillax font-bold'>Lynton Denholm</h1>
                    </div>
                    <div className='LgfgHiO_8 flex-row align-center justify-center'>
                        <SiShopify/>
                        <h2 className='font-g-sans font-bold'>Frontend Engineer</h2>
                    </div>
                    <p className='font-chillax font-normal'>
                    "A year ago I couldn't write an app or put up a website. Now, I've started a new career as a Web Developer thanks to you, your courses, your advice, and your posts. Thank you!"
                    </p>
                </div>
                <div className="lit-study_item flex-column align-center justify-center">
                    <div className="lil-study-item-port flex-row align-center justify-center">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Student" />
                        <h1 className='font-chillax font-bold'>Karolina Emanuela</h1>
                    </div>
                    <div className='LgfgHiO_8 flex-row align-center justify-center'>
                        <TbBrandAdobe/>
                        <h2 className='font-g-sans font-bold'>Software Engineer</h2>
                    </div>
                    <p className='font-chillax font-normal'>
                    "I GOT HIRED! Thanks <span className='color-advanced font-bold'>.Devolve</span> and everybody else. I learnt so much here and plan on staying here to further the fantastic .Devolve team we have."
                    </p>
                </div>
                <div className="lit-study_item flex-column align-center justify-center">
                    <div className="lil-study-item-port flex-row align-center justify-center">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Student" />
                        <h1 className='font-chillax font-bold'>Carol Gerald</h1>
                    </div>
                    <div className='LgfgHiO_8 flex-row align-center justify-center'>
                        <SiShopify/>
                        <h2 className='font-g-sans font-bold'>Frontend Engineer</h2>
                    </div>
                    <p className='font-chillax font-normal'>
                   "I was able to succeed in my interviews and got hired as a Full Stack Developer at JP Morgan thanks to your courses. Even now, I am still learning from you!"
                    </p>
                </div>
                <div className="lit-study_item flex-column align-center justify-center">
                    <div className="lil-study-item-port flex-row align-center justify-center">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Student" />
                        <h1 className='font-chillax font-bold'>Simo Imrich</h1>
                    </div>
                    <div className='LgfgHiO_8 flex-row align-center justify-center'>
                        <SiBrave/>
                        <h2 className='font-g-sans font-bold'>Junior Software Engineer</h2>
                    </div>
                    <p className='font-chillax font-normal'>
                    "Just got my first job as a junior software developer despite not having a CS degree or any work exp. Thank you Andrei and the whole <span className='font-bold color-advanced'>.Devolve</span> Team which motivated me to continue further!"
                    </p>
                </div>
                <div className="lit-study_item flex-column align-center justify-center">
                    <div className="lil-study-item-port flex-row align-center justify-center">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Student" />
                        <h1 className='font-chillax font-bold'>Jonas Friedberg</h1>
                    </div>
                    <div className='LgfgHiO_8 flex-row align-center justify-center'>
                        <TbBrandBootstrap/>
                        <h2 className='font-g-sans font-bold'>Senior Frontend Engineer</h2>
                    </div>
                    <p className='font-chillax font-normal'>
                    "I actually got a job! Thanks <span>.Devolve </span> Team! At first I was skeptical that I could get hired without a degree and so little experience but I'm starting as a frontend dev working on a huge web app using React."
                    </p>
                </div>
                <div className="lit-study_item flex-column align-center justify-center font-chillax last-study-child">
                   <h1>Read Other Students' Inspiration )</h1>
                   <a href="/reviews" className='text-d-no user-s-no'>Look More...</a>
                </div>
            </div>
        </div>
    )
}