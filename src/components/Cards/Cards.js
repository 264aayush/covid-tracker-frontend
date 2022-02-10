import './Cards.css'

let Cards = (props) => {
  if (Object.keys(props.data).length === 0) {
    return <div></div>
  }
  let active = props.data.find(element => element.sno === "11111")?.new_active
  let death = props.data.find(element => element.sno === "11111")?.new_death
  let discharged = props.data.find(element => element.sno === "11111")?.new_cured
  return (
    <div className="cards">
      <div  id='active' className="card">
        <h1>Active Cases</h1>
        <h3>{active}</h3>
      </div>
      <div  id='discharged' className="card">
        <h1>Discharged</h1>
        <h3>{discharged}</h3>
      </div>
      <div  id='death' className="card">
        <h1>Deaths</h1>
        <h3>{death}</h3>
      </div>
    </div>
  )
}

export default Cards;





// let Cards = (props) => {
//   if (Object.keys(props.data).length === 0) {
//     return <div></div>
//   }
//   let active = props.data.find(element => element.sno === "11111")?.new_active
//   let death = props.data.find(element => element.sno === "11111")?.new_death
//   let discharged = props.data.find(element => element.sno === "11111")?.new_cured
//   return (
//     <div className="cards">
//       <div className="card">
//         <h1 className="inline">Active Cases</h1>
//         <h3 className="inline">{active}</h3>
//       </div>
//       <div className="card">
//         <h1 className="inline">Discharged</h1>
//         <h3 className="inline">{discharged}</h3>
//       </div>
//       <div className="card">
//         <h1 className="inline">Deaths</h1>
//         <h3 className="inline">{death}</h3>
//       </div>
//     </div>
//   )
// }

// export default Cards;