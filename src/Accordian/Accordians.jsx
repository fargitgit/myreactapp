
import {Accordion, AccordionDetails, AccordionSummary, Container} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Cookie } from '@mui/icons-material';

const handleChange  = (panel) =>{
    console.log(panel);
}
const style = {
    minHeight: '0px',
    height: 'auto',
    transitionDuration: '249ms'
}
const Accordians = ({question, answer}) => {
    const [show , setShow] =  useState(false);

    return (
        <>
            <Container>
                <Accordion onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <div style={{ color: '#444', fontWeight: '500' }}>
                    {question}
                    </div>
                    </AccordionSummary>
                    <AccordionDetails style={style}>
                        <div>
                        <small>{answer} </small>
                        </div>
                    </AccordionDetails>
                </Accordion>  
            </Container>         
        </>
    )
}

export default Accordians;