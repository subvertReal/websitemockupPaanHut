import '../src/styles/head.css';

import paanHut from '../src/assets/paanhut.jpg'

function Head(){
    return(
        <div>
            <img className='headImg' src={paanHut}></img>
                   <header>Hi</header>
        </div>
    )
}

export default Head;