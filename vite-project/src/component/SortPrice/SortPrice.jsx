import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import style from './SortPrice.module.css'

const SortPrice = ({cards, setSortdata, setData}) => {
    const {price, isChildrenTicke, timeDepartureDate0, timeArrival0, timeDepartureDate1, timeArrival1} = cards
    // console.log('card', cards)
    

    const ascending =() =>{
        cards.sort(function (a, b) {
            return a.price - b.price;
            
          })
          setData(cards)   
        console.log('по возрастанию цены')
    }         
    const descending =() => {
        cards.sort(function (a, b) {
            return  b.price - a.price;
            
          })
          setData(cards)
        console.log('по убывнию цены')
    }
    // const timeFilter =() => {
    //     cards.sort(function (a, b) {
    //         return  b.hours - a.hours;
            
    //       })
    //       setData(cards)
    //     console.log('по времени ')
    // }
   
  return (
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
      <FormControlLabel  value="other" control={<Radio />} label="по времени в пути" />
    </RadioGroup>
  </FormControl>
        </div>
  )
}

export default SortPrice
