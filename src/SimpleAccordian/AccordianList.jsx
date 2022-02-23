import 'bootstrap/dist/css/bootstrap.min.css';
const AccordianList = ({id, question, answer})=>{
    return (
        <>
           <div className="accordion accordion-flush" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`flush-headingOne${id}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id}`} aria-expanded="false" aria-controls={`flush-collapse${id}`}>
                        {question}
                    </button>
                    </h2>
                    <div id={`flush-collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`flush-headingOne${id}`}  data-bs-parent="#accordionExample">
                    <div className="accordion-body">{answer}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export  default AccordianList;