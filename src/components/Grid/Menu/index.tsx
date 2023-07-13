import style from './Menu.module.scss';
import { Col, Container,Tab, Row, Nav } from 'react-bootstrap';
import CardData from '../CardData';
import Projects from './../Projects';

function Menu() {
    return(
        <section className={style.menu}>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the project and typesetting industry. lorem ipsum is awesome</p>
                    <Tab.Container id={style.projectsTabs} defaultActiveKey="first">
                    <Nav variant="pills" className={style.navPills} id={style.pillsTab}>
                            <Nav.Item className={style.navItem}>
                                <Nav.Link eventKey="first">Web</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={style.navItem}>
                                <Nav.Link eventKey="second">Mobile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={style.navItem}>
                                <Nav.Link eventKey="third">Certificações</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row className={style.projects}>
                                    <Projects details={CardData}/>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>  
        </Container>
        </section>      
    )
}
export default Menu;
                