import React from 'react';
import logo from './logo.svg';
import './App.css';

//function declaration
function App() {
    //полезное что-то


    //обязана вернуть JSX
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return (
        <h1>This is APP component</h1>
    )
}

function Star() {
    console.log('Star rendering')
    return (
        <div>Star</div>
    )
}

function Rating() {
    console.log('Rating rendering')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    );
}

function Accordion() {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return (
        <h2>Menu</h2>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App;
