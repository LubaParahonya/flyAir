import React, { useEffect, useState } from 'react'
import style from './Search.module.css'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';


// const mapDataTocoeint = (data) => {
//   return {
//     name: data.flight.users.name 
   //    seatsCaption:  data.flight.seats[0].type?.captio
//   }
// }
const Search = ({data, setdata, countrender, valueOne, valueTwo, filterData}) => {
  const dayOfMoumth = ['янв.','фев.','мар.','апр.','май.','июн.','июл.','авг.','сен.','окт.','ноя.','дек.']
  const datOfWeek = ['пн', 'вт', 'ср','чт', 'пт', 'cб', 'вс']
    const [isLoading, setIsLoading] = useState(true)
    const getApiData = async () => {
        try{
          const response = await fetch('https://lubaparahonya.github.io/fly/fly.json')
          .then((response) => response.json());
          setdata(response.result.flights);
        }catch(error){
          console.log(error);
        }
      };
    
    useEffect(()=>{
        getApiData()
        //console.log(data)
    }, [])

  return (
    <div className={style.main}>
     {/* {data.filter(el => valueOne && valueTwo? 
     el.flight.price.total.amount >=valueOne && 
     el.flight.price.total.amount <=valueTwo :
     !valueTwo && valueOne? el.flight.price.total.amount >=valueOne:
     !valueOne && valueTwo? el.flight.price.total.amount <=valueTwo:
     el).map(el =>( */}
     {data.map(el =>(
        <div className={style.item} key={uuidv4()}>
          <div className={style.price}>
          <div>{el.flight.price.total.amount}</div>
          <div>Стоимость для одного взрослого пассажира</div>
          </div>
        <div className={style.arrivalAirport}>
            <div className={style.caption}>
            <div>{el.flight.legs[0].segments[0].departureCity.caption},</div>
            <div>{el.flight.legs[0].segments[0].departureAirport.caption}</div>
            <div className={style.uid}>{`(${el.flight.legs[0].segments[0].departureAirport.uid})`}</div>
            </div>
            <div className={style.caption}>
                {<div>{el.flight.legs[0].segments[1]?
                el.flight.legs[0].segments[1]?.arrivalAirport.caption: 
                el.flight.legs[0].segments[0].arrivalAirport.caption}</div>}
                {/* {<div>{el.flight.legs[0].segments[1]?
                el.flight.legs[0].segments[1]?.arrivalCity.caption: 
                el.flight.legs[0].segments[0].arrivalCity.caption}</div>} */}
                <div className={style.uid}>{`(${el.flight.legs[0].segments[1]?
                                                el.flight.legs[0].segments[1].arrivalAirport.uid:
                                                el.flight.legs[0].segments[0].arrivalAirport.uid
                })`}</div>
            </div>
        </div>
        <div className={style.maindate}>
         <div className={style.mainDataBlock}>
          {moment(el.flight.legs[0].segments[0].departureDate).format('HH:MM')}
         <div className={style.colorData}> 
         {moment(el.flight.legs[0].segments[0].departureDate).format(' DD ')}
         {dayOfMoumth[moment(el.flight.legs[0].segments[0].departureDate).format('MM ')- 1] + ' '}
         {datOfWeek[moment(el.flight.legs[0].segments[0].departureDate).isoWeekday()-1]}
         </div>
         </div>
         <div>test
          {/* {new Date(el.flight.legs[0].segments[0].departureDate)} */}
         </div>
         <div className={style.mainDataBlock}>
          {moment(el.flight.legs[0].segments[1]?
            el.flight.legs[0].segments[1].arrivalDate:
            el.flight.legs[0].segments[0].arrivalDate
          ).format('HH:MM')}
          <div className={style.colorData} >
          {moment(el.flight.legs[0].segments[1]?
          el.flight.legs[0].segments[1].arrivalDate:
          el.flight.legs[0].segments[0].arrivalDate
         ).format(' DD ')}
         {dayOfMoumth[moment(el.flight.legs[0].segments[1]?
          el.flight.legs[0].segments[1].arrivalDate:
          el.flight.legs[0].segments[0].arrivalDate
         ).format('MM ')- 1] + ' '}
         {datOfWeek[moment(el.flight.legs[0].segments[1]?
          el.flight.legs[0].segments[1].arrivalDate:
          el.flight.legs[0].segments[0].arrivalDate
         ).isoWeekday()-1]}
          </div> 
         </div>
        </div>
        <div className={style.bottom}>{`Рейс выполняет: ${el.flight.legs[0].segments[0].airline.caption}`}</div>


        <div >
          </div>
        <div className={style.arrivalAirport}>
            <div className={style.caption}>
            <div>{el.flight.legs[1].segments[0].departureAirport.caption}</div>
            <div className={style.uid}>{`(${el.flight.legs[0].segments[0].departureAirport.uid})`}</div>
            </div>
            <div className={style.caption}>
                {<div>{el.flight.legs[1].segments[1]?
                el.flight.legs[1].segments[1]?.arrivalAirport.caption: 
                el.flight.legs[1].segments[0].arrivalAirport.caption}</div>}
                <div className={style.uid}>{`(${el.flight.legs[1].segments[1]?
                                                el.flight.legs[1].segments[1].arrivalAirport.uid:
                                                el.flight.legs[1].segments[0].arrivalAirport.uid
                })`}</div>
            </div>
        </div>
        <div className={style.maindate}>
         <div className={style.mainDataBlock}>
          {moment(el.flight.legs[1].segments[0].departureDate).format('HH:MM')}
          <div className={style.colorData}>
          {moment(el.flight.legs[1].segments[0].departureDate).format(' DD ')}
         {dayOfMoumth[moment(el.flight.legs[1].segments[0].departureDate).format('MM ')- 1] + ' '}
         {datOfWeek[moment(el.flight.legs[1].segments[0].departureDate).isoWeekday()-1]}
          </div>
         </div>
         <div>test
          {/* {new Date(el.flight.legs[0].segments[0].departureDate)} */}
         </div>
         <div className={style.mainDataBlock}>
         {moment(el.flight.legs[1].segments[1]?
            el.flight.legs[1].segments[1].arrivalDate:
            el.flight.legs[1].segments[0].arrivalDate
          ).format('HH:MM')}
          <div className={style.colorData}>
          {moment(el.flight.legs[1].segments[1]?
          el.flight.legs[1].segments[1].arrivalDate:
          el.flight.legs[1].segments[0].arrivalDate
         ).format(' DD ')}
         {dayOfMoumth[moment(el.flight.legs[1].segments[1]?
          el.flight.legs[1].segments[1].arrivalDate:
          el.flight.legs[1].segments[0].arrivalDate
         ).format('MM ')- 1] + ' '}
         {datOfWeek[moment(el.flight.legs[1].segments[1]?
          el.flight.legs[1].segments[1].arrivalDate:
          el.flight.legs[1].segments[0].arrivalDate
         ).isoWeekday()-1]}
          </div>
         </div>
        </div>
        <div className={style.airline}>{`Рейс выполняет: ${el.flight.legs[1].segments[0].airline.caption}`}</div>
        <button className={style.buttonBuy}>выбрать</button>
        </div>
        
     ))} 
    </div>
  )
}

export default Search
