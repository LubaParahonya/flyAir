import { PropTypes } from "prop-types"
import style from './Leg.module.css'
import moment from 'moment'


export const Leg = ({ data }) => {
   // console.log('leg', data)
    const dayOfMoumth = ['янв.','фев.','мар.','апр.','май.','июн.','июл.','авг.','сен.','окт.','ноя.','дек.']
    const datOfWeek = ['пн', 'вт', 'ср','чт', 'пт', 'cб', 'вс']
    const dataTimeDeparture = data.segments[0].departureDate
    const dataTimeArrival = data.segments[1]?.arrivalDate 
    const time = new Date(dataTimeDeparture).getTime()
    const timeArriva = new Date(dataTimeArrival).getTime()
    const delta = timeArriva - time
    const  hours = Math.floor((delta / (1000 * 60 * 60)))
    //const  minutes = Math.floor((delta / (1000 * 60 * 60))% 24)
    //const dataTimeArrival1 = data.segments[1]?.arrivalDate
    return (
        <>
            <div className={style.arrivalAirport}>
               <div className={style.caption}>
                   <div>
                     {data.segments[0].departureCity?.caption?
                      data.segments[0]?.departureCity.caption:
                     'не найдено'}
                   </div>
                   <div>
                     {data.segments[0]?.departureAirport.caption}
                   </div>
                   <div className={style.uid}>
                    {`(${data.segments[0]?.departureAirport.uid})`}
                   </div>
               </div>
               <div className={style.caption}>
                {<div>{data.segments[1]?
                data.segments[1]?.arrivalAirport.caption: 
                data.segments[0]?.arrivalAirport.caption}</div>}
                <div className={style.uid}>{`(${data.segments[1]?
                                               data.segments[1]?.arrivalAirport.uid:
                                               data.segments[0]?.arrivalAirport.uid
                })`}</div>
               </div>
            </div>
            <div className={style.maindate}>
         <div className={style.mainDataBlock}>
          {moment(dataTimeDeparture).format('HH:MM')}
         <div className={style.colorData}> 
         {moment(dataTimeDeparture).format(' DD ')}
         {dayOfMoumth[moment(dataTimeDeparture).format('MM ')- 1] + ' '}
         {datOfWeek[moment(dataTimeDeparture).isoWeekday()-1]}
         </div>
         </div>
         <div>
          {`${hours} ч ${0} мин`}
         </div>
         <div className={style.mainDataBlock}>
          {moment(dataTimeArrival
          ).format('HH:MM')}
          <div className={style.colorData} >
          {moment(dataTimeArrival
         ).format(' DD ')}
         {dayOfMoumth[moment(dataTimeArrival
         ).format('MM ')- 1] + ' '}
         {datOfWeek[moment(dataTimeArrival
         ).isoWeekday()-1]}
          </div> 
         </div>
            </div>
            <div className={style.bottom}>{`Рейс выполняет: ${data.segments[0].airline.caption}`}</div>
        </>

    )
}


Leg.propTypes = {
    data: PropTypes.object,
};