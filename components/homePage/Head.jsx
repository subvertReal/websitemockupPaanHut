// css import
import '../../src/styles/App.css'
import '../../src/styles/head.css';

//bootstrap imports
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//asset import
import paanHut from '../../src/assets/paanhut.webp'

function Head(isMobile){

    if(isMobile == true){
        return(
            <div>
                
               <Container>
                    <Row>

                        <Col className='text-center'>
                            <h1 className='headText'>Welcome to <br></br> Paanhut</h1>
                        </Col>
                    </Row>
                    <Row>
                        
                        <Col className='text-center'>
                <img className='headImgMob' src={paanHut}></img>    
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
        else{

            return(
                <div>
                <Container>
                    <Row>

                        <Col className='text-center'>

                            
                            <h1 className='headText'>Welcome to <br></br> Paanhut</h1>
                            <img className='headImg' src={paanHut}></img>
                        </Col>
                    </Row>
                </Container>
                    

                </div>
                )
        }
    }



export default Head;