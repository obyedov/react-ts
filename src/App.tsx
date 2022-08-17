import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

//function declaration
function App() {
    //полезное что-то


    //обязана вернуть JSX
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={'Menu!'}/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log('PageTitle rendering')
    return (
        <h1>{ props.title }</h1>
    )
}







export default App;
