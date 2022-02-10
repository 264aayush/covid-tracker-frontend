import { useState, useEffect } from 'react';
// import logo from './search-solid.svg';
import './DataTable.css';



let DataTable = (props) => {
  if (Object.keys(props.data).length === 0) {
    return <div></div>
  }
  let [tableData, setTableData] = useState(props.data.filter(element => element.state_name != ""));
  const [filterQuery, setFilterQuery] = useState("")
  const [sortBy, setSortBy] = useState("state_name")
  useEffect(() => {
    // console.log(props.data)
    let data = props.data.filter(element => element.state_name.toLowerCase().includes(filterQuery.toLowerCase()))
    console.log(sortBy)
    let comp = (a, b) => {
      if (a[sortBy] < b[sortBy])
        return -1;
      if (a[sortBy] == b[sortBy])
        return 0;
      else return 1;
    }
    data.sort(comp);
    console.log(data)
    setTableData(data);
  }, [filterQuery, sortBy])
  return (
    <div id="table-container">
      <div className='sort-by'>
        <span style={{marginLeft:"20px"}}>Sort By: </span>
        <select id="select-sort" value={sortBy} onChange={(e) => { setSortBy(e.target.value) }}>
          <option value="state_name">State Name</option>
          <option value="new_active">Active Cases</option>
          <option value="new_positive">Positive Cases</option>
          <option value="new_cured">Cured</option>
          <option value="new_death">Deaths</option>
        </select>
      </div>
      <div className='filter-div'>

        <input value={filterQuery} onChange={(e) => setFilterQuery(e.target.value)} placeholder='Enter Filter Query' className='search-box' type="text"></input>
        <button className='search-button'>  Search </button>
      </div>

      <table className='mobile-optimised'>
        <thead>
          <tr>
            <th scope='col'>State Name</th>
            <th scope='col'>Active Cases</th>
            <th scope='col'>Positive Cases</th>
            <th scope='col'>Cured</th>
            <th scope='col'>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.filter(x => x.state_name != "").map(entry => {
              return (<tr key={entry.sno}>
                <td data-th="State Name : ">{entry.state_name}</td>
                <td data-th="Active Cases : ">{entry.new_active}</td>
                <td data-th="Positive Cases : ">{entry.new_positive}</td>
                <td data-th="Cured : ">{entry.new_cured}</td>
                <td data-th="Deaths : ">{entry.new_death}</td>
              </tr>)
            })
          }
        </tbody>



      </table>

    </div>
  )
}

export default DataTable;