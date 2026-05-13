import '../src/styles/App.css'
import '../src/styles/head.css';

import paanHut from '../src/assets/paanhut.webp'

function Head(){
    return(
        <div>
            <img className='headImg' src={paanHut}></img>

        </div>
    )
}

export default Head;