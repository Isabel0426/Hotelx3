import './Home.css'
import {Formularioreserva} from '../Formularioreserva/Formularioreserva'
import {Actividades} from '../Actividades/Actividades.js'
export function Home(){
    return(
        <>
        <div className='banner'>
                <Formularioreserva/> 
        </div>
        <div className='section'>
                <Actividades></Actividades>
        </div>
        </>
    )
}