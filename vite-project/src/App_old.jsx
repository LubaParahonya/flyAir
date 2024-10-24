import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from'./App.module.css'
import Search from './component/Search/Search'
import RadioGroups from './component/RadioGroup/RadioGroup'
import { AirFlyNameFilter } from './component/AirFlyNameFilter/AirFlyNameFilter'

function App() {
  const [data, setdata] = useState([])
  const [filterData, setFilterData] = useState(data)
  const [valueOne, setValueOne] = useState()
  const [countrender, setCountRender] = useState(0);
  const [valueTwo, setValueTwo] = useState()
  //1-ый вариант
  // const [air, setAir ] = useState({'Air France': false, 
  //           'Аэрофлот - российские авиалинии': false, 
  //           'KLM': false, 
  //           'TURK HAVA YOLLARI A.O.': false,
  //           'British Airways p.l.c.': false, 
  //           'Finnair Oyj': false, 
  //           'Air Baltic Corporation A/S': false, 
  //           'Alitalia Societa Aerea Italiana': false, 
  //           'Pegasus Hava Tasimaciligi A.S.': false, 
  //           'Austrian Airlines': false, 
  //           'SWISS International Air Lines Ltd': false, 
  //           'LOT Polish Airlines': false,})
  

  useEffect(() => {
    if (data?.length)
    console.log('data', data);
  }, [data])

  const handleSetData = (data) => {
    setdata(data)
    setFilterData(data.filter(el =>  valueOne? el.flight.price.total.amount >= valueOne : el===el))

  }

  const handleChangeCounter = () => {
    setCountRender(countrender +1);
  }
  return (
    <div className={style.main}>
      {/* <RadioGroups data={data} setdata={handleSetData} countrender={countrender} handleChangeCounter={handleChangeCounter } valueOne={valueOne} setValueOne={setValueOne}
              valueTwo={valueTwo} setValueTwo={setValueTwo}
              setAir={setAir}
              />
 */}
      //filter
      <>
        <AirFlyNameFilter />
      </>  
      //cards
      <>
      
      </>     
      {/* <Search data={data} setdata={setdata}
        countrender={countrender}
        valueOne={valueOne} 
        valueTwo={valueTwo}
        filterData={filterData}
      /> */}
      
    </div>
  )
}

export default App
