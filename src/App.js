import React,{useState,useEffect} from "react";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import DataTable from './components/DataTable/DataTable'
import "./style.css";
import getTableData from "./api/getTableData";


export default function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    getTableData(setData);
  }, [])
  return (
    <div>
      <Header></Header>
      <Cards data={data}></Cards>
      <div className="table-component">
        <DataTable data={data}></DataTable>
      </div>
    </div>
  );
}
