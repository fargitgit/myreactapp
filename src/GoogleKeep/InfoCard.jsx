import CloseIcon from '@mui/icons-material/Close';

const InfoCard = ({title, description, deleteItem,  id, bg})=>{
    const delItem = ()=>{
        deleteItem(id);
    }
    
    return (
        <>
            <div style={{background: bg}} className="card mb-5 col-3 p-4 shadow-sm border-0 position-relative mx-4">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <span onClick={delItem} style={{background: bg, height: '35px', width: '35px', cursor: 'pointer', right: '-15px', bottom: '-15px'}}className="d-flex shadow rounded-circle shadow-light text-small position-absolute align-items-center justify-content-center"><CloseIcon style={{width: '20px', height: '20px'}} /></span>
            </div>
        </>
    );
}

export  default InfoCard;