import axios from "axios";

let getTableData = (setTableData) => {
    axios.get("https://aayush-covid-tracker-backend.herokuapp.com/").then(res=>{
        setTableData(res.data.casesData);
    })
}
export default getTableData;