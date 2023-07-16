import style from './Menu.module.scss';
import { Col, Container,Tab, Row, Nav } from 'react-bootstrap';
import CardData from '../CardData';
import Projects from './../Projects';

function Menu() {
    return(
        <section className={style.menu} id={style.project}>
            <Container>
                <Row>
                    <Col>
                    <h2 >Projects</h2>
                    <p>Aqui se encontra todos os projetos feito para Web</p>
                    <Tab.Container id={style.projectsTabs} defaultActiveKey="first">
                    <Nav variant="pills" className={style.navPills} id={style.pillsTab}>
                        
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                                <Row className={style.rowProj}>
                                    {CardData.map ((project,index) => (
                                        <Projects key={index} {...project} />
                                    ))}
                                </Row>

                        </Tab.Pane>
                        
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )}
export default Menu;
                