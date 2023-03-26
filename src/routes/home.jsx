import Showcase from "../components/showcase/showcase";
import Students from "../components/students/students";
import Benefits from "../components/benefits/benefits";
import Count from '../components/count/count';
import Study from "../components/study/study";

export default function Home() {
    return(
        <main>
            <Showcase/>
            <Students/>
            <Benefits/>
            <Count/>
            <Study/>
        </main>
    )
}