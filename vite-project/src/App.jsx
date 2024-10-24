import {useState, useMemo} from 'react'
import { Box } from '@mui/material'
import { CardsList } from './component/CardsList'
import { AirFlyNameFilter } from './component/AirFlyNameFilter/AirFlyNameFilter'
import { useGetDataForTicket } from './hooks/useGetDataForTicket'
import style from'./App.module.css'
import SortPrice from './component/SortPrice/SortPrice'
import FilterPrice from './component/FilterPrice/FilterPrice'




function App() {
    const [selectCompaniesName, setSelectCompaniesName] = useState([]);
    const { flights, isEror, allCompaniesNames, setData } = useGetDataForTicket();
    const [sortdata, setSortdata] = useState(flights)
    const [countrender, setCountRender] = useState(0);
    const [valueOne, setValueOne] = useState('')
    const [valueTwo, setValueTwo] = useState('')

  const filteredListFlight = useMemo(() => {
    const res = flights.filter((flight) => {
      if (selectCompaniesName.length > 0) {
        if (selectCompaniesName.includes(flight.nameCompanie)) {
          return true;
        }
        return false;
      }   
      return true;
    })

    return res;
  }, [selectCompaniesName, flights, sortdata]);

  const handleUpdateCompNamesFilter = (nameComp) => {
    if (!nameComp) return;
    if (selectCompaniesName.includes(nameComp)) {
      const arrWithoutNameComp = selectCompaniesName.filter(name => name !== nameComp);
      setSelectCompaniesName(arrWithoutNameComp)
    } else {
      setSelectCompaniesName([...selectCompaniesName, nameComp])
    }
  }

  const handleChangeCounter = () => {
    setCountRender(countrender +1);
  }


  return (
      <Box className={style.main}>
        <div className={style.filterBox}>
        <SortPrice cards={filteredListFlight} setSortdata={setSortdata} setData={setData}/>
        {/* <FilterPrice valueOne={valueOne}
         setValueOne={setValueOne}
         valueTwo={valueTwo} 
         setValueTwo={setValueTwo}
         cards={filteredListFlight}
         setData={setData}
         /> */}
        <AirFlyNameFilter 
          companiesName={allCompaniesNames}
          selectCompaniesName={selectCompaniesName}
          onChange={handleUpdateCompNamesFilter}
        />
        </div>
        <CardsList cards={filteredListFlight} />
      </Box> 
  )
}

export default App
