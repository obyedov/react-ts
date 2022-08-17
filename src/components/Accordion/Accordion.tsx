import React from "react";



function Accordion(props:any) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
    </div>
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

function AccordionTitle(props:any) {
    console.log('AccordionTitle rendering')
    return (
        <h2>{props.title}</h2>
    )
}

export default Accordion