import React, { useEffect, useRef } from 'react'
import style from './FilterPrice.module.css'

const FilterPrice = ({valueOne, setValueOne, valueTwo, setValueTwo, cards, setData}) => {
    const ref1 = useRef(valueOne)
    const ref2 = useRef(valueTwo)
    const handelSubmitValue1 = (e)=>{
        setValueOne(e.target.value)
        ref1.current = e.target.value
        filterPrise(valueOne, valueTwo)
    }
    const handelSubmitValue2 = (e)=>{
        setValueTwo(e.target.value)
        ref2.current = e.target.value
        filterPrise(valueOne, valueTwo)
    }
    const filterPrise = (valuemIN, valueMax)=>{
    if(valuemIN && typeof valueMax == 'NaN'){
         return cards.filter( el => parseInt(el.flight?.price?.total?.amount) > parseInt(valuemIN))
    }else if( typeof valuemIN == 'NaN' && valueMax){
        return cards.filter( el => parseInt(el.flight?.price?.total?.amount) < parseInt(valueMax))
    }else if(valuemIN && valueMax){
         return cards.filter( el => parseInt(el.flight?.price?.total?.amount) > parseInt(valuemIN) && parseInt(el.flight?.price?.total?.amount) < parseInt(valueMax) )
    }else{
        return cards
    }
    setData(cards)
    console('получилось')
    }
    useEffect(()=>{
        console.log(parseInt(valueOne) )
        console.log(parseInt(valueTwo))
        filterPrise(valueOne, valueTwo)
        setData(cards)
    }, [valueOne, valueTwo])
console.log('cards', cards)
  return (
    <form className={style.mainInput}>
       <p className={style.textFilter}>Цена</p>
      <input  type='number'  value={valueOne} onChange={handelSubmitValue1}></input>
      <input  type='number'  value={valueTwo} onChange={handelSubmitValue2}></input>
  </form>
  )
}

export default FilterPrice
