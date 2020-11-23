import React from 'react';
import {Container, Row, Col, Button, ButtonToolbar,
        ToggleButton,
        ToggleButtonGroup} from 'react-bootstrap';
import GameIndexPart from './gameIndexPart';
import "./style.module.scss";
import "./gameIndex.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class GameIndex extends React.Component{

    scrollToAnchor = (anchorName) =>{
        if(anchorName){
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement){
                anchorElement.scrollIntoView();
            }
        }
    }
    render(){
        return <Container className="gameIndexBackground">
            <Row>
                <Col xs={1}>
                    <a className="gameIndexHome" href="/login">Home</a>/
                </Col>
                <Col xs={11} className="textWhite">
                    / Game Index
                </Col>
            </Row>
            <Row className="textCenter textWhite"><h3>Game Index</h3></Row>
            <Row className="textCenter textWhite">Here you can find all the games we have in our marketplace</Row>
            <br/>
            <Row className="textCenter textWhite">If you think we should add a game <br/>that is not listed, then let us know!</Row>
            <br/>
            <Row className="textCenter">
                <Button className="gameIndexButton" size="lg">CONTACT US</Button>
            </Row>
            <br/>
            <Row className="gameIndexRow textWhite">
                
                <ButtonToolbar className="gameIndex">
                    <h6>Jump to:</h6>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
                        <ToggleButton className="gameIndexButtonGroup" value={1} onClick={() => this.scrollToAnchor('A')}>A</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={2} onClick={() => this.scrollToAnchor('B')}>B</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={3} onClick={() => this.scrollToAnchor('C')}>C</ToggleButton>
                        <ToggleButton className="gameIndexButtonGroup" value={4} onClick={() => this.scrollToAnchor('D')}>D</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={5} onClick={() => this.scrollToAnchor('E')}>E</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={6} onClick={() => this.scrollToAnchor('F')}>F</ToggleButton>
                        <ToggleButton className="gameIndexButtonGroup" value={7} onClick={() => this.scrollToAnchor('G')}>G</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={8} onClick={() => this.scrollToAnchor('H')}>H</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={9} onClick={() => this.scrollToAnchor('I')}>I</ToggleButton>
                        <ToggleButton className="gameIndexButtonGroup" value={10} onClick={() => this.scrollToAnchor('J')}>J</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={11} onClick={() => this.scrollToAnchor('K')}>K</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={12} onClick={() => this.scrollToAnchor('L')}>L</ToggleButton>
                        <ToggleButton className="gameIndexButtonGroup" value={13} onClick={() => this.scrollToAnchor('M')}>M</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={14} onClick={() => this.scrollToAnchor('N')}>N</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={15} onClick={() => this.scrollToAnchor('O')}>O</ToggleButton>
                        <ToggleButton className="gameIndexButtonGroup" value={16} onClick={() => this.scrollToAnchor('P')}>P</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={17} onClick={() => this.scrollToAnchor('Q')}>Q</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={18} onClick={() => this.scrollToAnchor('R')}>R</ToggleButton>
                        <ToggleButton className="gameIndexButtonGroup" value={19} onClick={() => this.scrollToAnchor('S')}>S</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={20} onClick={() => this.scrollToAnchor('T')}>T</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={21} onClick={() => this.scrollToAnchor('U')}>U</ToggleButton>
                        <ToggleButton className="gameIndexButtonGroup" value={22} onClick={() => this.scrollToAnchor('V')}>V</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={23} onClick={() => this.scrollToAnchor('W')}>W</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={24} onClick={() => this.scrollToAnchor('X')}>X</ToggleButton>
                        <ToggleButton className="gameIndexButtonGroup" value={25} onClick={() => this.scrollToAnchor('Y')}>Y</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={26} onClick={() => this.scrollToAnchor('Z')}>Z</ToggleButton><ToggleButton className="gameIndexButtonGroup" value={27} onClick={() => this.scrollToAnchor('OTHER')}>#</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                <Container>
                    <Row id={'A'}><GameIndexPart text="A"/><hr className="gameIndexHr"/></Row><Row id={'B'}><GameIndexPart text="B"/></Row><hr className="gameIndexHr"/><Row id={'C'}><GameIndexPart text="C"/></Row><hr className="gameIndexHr"/>
                    <Row id={'D'}><GameIndexPart text="D"/><hr className="gameIndexHr"/></Row><Row id={'E'}><GameIndexPart text="E"/></Row><hr className="gameIndexHr"/><Row id={'F'}><GameIndexPart text="F"/></Row><hr className="gameIndexHr"/>
                    <Row id={'G'}><GameIndexPart text="G"/><hr className="gameIndexHr"/></Row><Row id={'H'}><GameIndexPart text="H"/></Row><hr className="gameIndexHr"/><Row id={'I'}><GameIndexPart text="I"/></Row><hr className="gameIndexHr"/>
                    <Row id={'J'}><GameIndexPart text="J"/><hr className="gameIndexHr"/></Row><Row id={'K'}><GameIndexPart text="K"/></Row><hr className="gameIndexHr"/><Row id={'L'}><GameIndexPart text="L"/></Row><hr className="gameIndexHr"/>
                    <Row id={'M'}><GameIndexPart text="M"/><hr className="gameIndexHr"/></Row><Row id={'N'}><GameIndexPart text="N"/></Row><hr className="gameIndexHr"/><Row id={'O'}><GameIndexPart text="O"/></Row><hr className="gameIndexHr"/>
                    <Row id={'P'}><GameIndexPart text="P"/><hr className="gameIndexHr"/></Row><Row id={'Q'}><GameIndexPart text="Q"/></Row><hr className="gameIndexHr"/><Row id={'R'}><GameIndexPart text="R"/></Row><hr className="gameIndexHr"/>
                    <Row id={'S'}><GameIndexPart text="S"/><hr className="gameIndexHr"/></Row><Row id={'T'}><GameIndexPart text="T"/></Row><hr className="gameIndexHr"/><Row id={'U'}><GameIndexPart text="U"/></Row><hr className="gameIndexHr"/>
                    <Row id={'V'}><GameIndexPart text="V"/><hr className="gameIndexHr"/></Row><Row id={'W'}><GameIndexPart text="W"/></Row><hr className="gameIndexHr"/><Row id={'X'}><GameIndexPart text="X"/></Row><hr className="gameIndexHr"/>
                    <Row id={'Y'}><GameIndexPart text="Y"/><hr className="gameIndexHr"/></Row><Row id={'Z'}><GameIndexPart text="Z"/></Row><hr className="gameIndexHr"/><Row id={'OTHER'}><GameIndexPart text="#"/></Row>
                </Container>
            </Row>
                        
        </Container>
    }
}

export default GameIndex;