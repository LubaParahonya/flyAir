import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import style from './RadioGroup.module.css'
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { v4 as uuidv4 } from 'uuid';

const RadioGroups = ({data, setdata, valueOne, valueTwo, setValueOne, setValueTwo, handleChangeCounter,setAir}) => {
    const listAiraline = []
    const newData = data.map(el =>
    listAiraline.push(el.flight.legs[1].segments[0].airline.caption)
)
   const setListAiraline = [... new Set(listAiraline)]   
    const ascending =() =>{
        data.sort(function (a, b) {
            return a.flight.price.total.amount - b.flight.price.total.amount;
            
          })
        setdata(data)
        handleChangeCounter();
        //console.log(data)
        console.log('по возрастанию цены')
    }         
    const descending =() => {
        data.sort(function (a, b) {
            return b.flight.price.total.amount - a.flight.price.total.amount;
            
          })
          handleChangeCounter()
        setdata(data)
        //console.log(data)
        console.log('по убывнию цены')
    }
    const timeLong =() => {
        console.log('по времени в пути')
    }
    const handelSubmitValue1 = (e)=>{
        //e.preventDefault()
        setValueOne(e.target.value)
        handleChangeCounter()
        console.log(valueOne)
    }
    const handelSubmitValue2 = (e)=>{
        //e.preventDefault()
        setValueTwo(e.target.value)
        console.log(valueTwo)
        handleChangeCounter()
    }
    // const multiFilterAirline = () => {
    //   const upDatecheckedList = setListAiraline.reduce((acc, {checked, value}) => {
    //     //как поменять состояние checked
    //     if(checked){
    //       acc.push(value);
    //       return acc
    //     }
    //   })
    //  
    // }

    const handelChecked = (air) => {
      setAir({'Air France': false, 
        'Аэрофлот - российские авиалинии': false, 
        'KLM': false, 
        'TURK HAVA YOLLARI A.O.': false,
        'British Airways p.l.c.': false, 
        'Finnair Oyj': false, 
        'Air Baltic Corporation A/S': false, 
        'Alitalia Societa Aerea Italiana': false, 
        'Pegasus Hava Tasimaciligi A.S.': false, 
        'Austrian Airlines': false, 
        'SWISS International Air Lines Ltd': false, 
        'LOT Polish Airlines': false,
        air: true
      })
    }

  return (
    <div>
        <div className={style.box}>
        <FormControl >
    <FormLabel className={style.textFilter} id="demo-radio-buttons-group-label">Сортировать</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <FormControlLabel onClick={descending} value="male" control={<Radio />}  label="по убывнию цены"/>
      <FormControlLabel onClick={ascending}   value="female" control={<Radio />} label="по возрастанию цены" />
      <FormControlLabel onClick={timeLong} value="other" control={<Radio />} label="по времени в пути" />
    </RadioGroup>
  </FormControl>
        </div>
        <div className={style.box}>
        <FormGroup className={style.textFilter}>
    Фильтровать
        <FormControlLabel required control={<Checkbox />} label='1 пересадка' />
        <FormControlLabel required control={<Checkbox />} label='без пересадок' />
    </FormGroup >
        </div>
  <div className={style.mainInput}>
  <p className={style.textFilter}>Цена</p>
  {/* Фильтрация не работает, опаздывает на один символ */}
  <input  type='number' onChange={handelSubmitValue1}></input>
  <input  type='number' onChange={handelSubmitValue2}></input>
  </div>
  <div className={style.box}>
  <FormGroup className={style.textFilter}> 
    Авиакомпании
   
    {setListAiraline.map(airline => (
        <FormControlLabel key={uuidv4()} required control={<Checkbox  onClick={handelChecked(airline)} />} label={airline} />
    ))}
    </FormGroup>
  </div>
  </div>
  )
}

export default RadioGroups
