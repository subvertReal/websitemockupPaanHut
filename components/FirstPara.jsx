
import burger from '../src/assets/burger.jpg'
import '../src/styles/firstpara.css'

function FirstPara(){
    return(
    <div>
        <p>teeeeeeeeee</p>
        <div className='container'>
            <div class="row align-items-start">
                <div className='col'></div>
            </div>
        </div>
        <img className='img1FP' src={burger}></img>
    </div>
    )
}

export default FirstPara;