import Image from './components/Image'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Socials from './components/Socials'

export default function App(){
   return(
    <div className="Background">
    <Image/>
        <Info/>
        <About/>
        <Interests/>
    <div className="Foreground">
    </div>
    <Socials/>
    </div>) 
}