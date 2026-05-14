// global css
import '../src/styles/App.css'
import '../src/styles/menu.css'

// bootstrap imports
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
  integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
  crossorigin="anonymous"
/>
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Menu({isMobile}){
    

    return (
        <Container>
            <Row>
                <Col className='text-center' >
                    <div id='outterDiv'>
                        <button type='button' id='btnMenu' className={isMobile ? 'btnMenuMob btn btn-outline-danger' : 'btnMenuDesk btn btn-outline-danger'}>
                            <b>Menu</b>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )


}

export default Menu