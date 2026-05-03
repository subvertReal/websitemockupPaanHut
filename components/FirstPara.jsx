
import burger from '../src/assets/burger.jpg'
import '../src/styles/firstpara.css'

function FirstPara(){
    return(
    <div>
        <p>teeeeeeeeee</p>
        <div className='container'>
            <div class="row align-items-start">
                <div className='col'>
                    <img className='img1FP' src={burger}></img>
                </div>
                <div className='col'>
                    <p>Fugit odio odio animi soluta expedita voluptas quia modi magnam. Suscipit laboriosam ipsum quam quo laborum ipsa. Veniam perferendis in est quidem voluptates maiores reiciendis sit iusto. Rerum et nobis voluptatem est nam pariatur atque sit.</p>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default FirstPara;