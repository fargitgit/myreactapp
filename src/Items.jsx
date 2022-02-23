import  Card from './Card';
import ItemData from  './ItemData';

const imgType = 'dog';

const  Items = ()=>{
    return(
        <>
           {
               ItemData.map((item, i)=>(item.type == imgType) ? <Card key={i} imgSrc={item.imgSrc} link={item.link} /> : '')
           }
        </>
    )
}
export default Items;