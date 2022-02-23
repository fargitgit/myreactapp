import { useState, useEffect } from "react";

const CovidData = ()=>{
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch ('https://data.covid19india.org/data.json');
            const actualData  = await res.json();
            setData(actualData.statewise);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();
    }, [])

    return(
        <>
        
            <div  className="container">
                <h2 className="text-center p-3 fw-normal mb-3">India Covid-19 Dashboard</h2>
                <div className="col table-responsive border-light shadow mb-4">
                    <table className="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Active</th>
                                <th>Confirmed</th>
                                <th>Deaths</th>
                                <th>Recovered</th>
                            </tr>
                        </thead>
                        <tbody className="text-secondary">
                            {
                                data.map((val, i)=>{
                                    return (
                                        <tr>
                                            <td>{val.state}</td>
                                            <td>{val.active}</td>
                                            <td>{val.confirmed}</td>
                                            <td className="table-danger">{val.deaths}</td>
                                            <td className="table-success">{val.recovered}</td>
                                        </tr>
                                    )
                                })
                            }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default CovidData;