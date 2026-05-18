import { Row, Container, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useEffect,useState } from "react";
import axios from 'axios';

function Menu() {
    const [json, setJson] = useState();

    async function fetchJson(){
        try{
        let url = 'https://raw.githubusercontent.com/subvertReal/dataRepoForMockups/refs/heads/main/paanhut/menu.json';
        await axios.get(url)
            .then(response=>{
                let res = response.data;
                let arr = [];
                for (const key in res){
                    
                    arr.push(key);
                    for (const key2 in res){
                        
                    }
                    console.log(`log ${key}: ${res[key]}`)

                }
                console.log(arr);
                

            }
            )
        }
        catch(err){
            console.error(err);
        }
        
    }
    useEffect(()=>{
        fetchJson();

    })

    return (
        <div>

            <script src="http://localhost:8097"></script>

            <NavBar />
            <p>This is a menu</p>
            <Container>
                <Row className='text-center'>
                    <Col>
                        Text
                    </Col>
                    <Col>
                        Text
                    </Col>
                </Row>
                

            </Container>


      </div>
    )
}

export default Menu;