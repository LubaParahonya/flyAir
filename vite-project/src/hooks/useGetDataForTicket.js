import { useState, useEffect } from 'react'; 


const URI_FLY_API = 'https://lubaparahonya.github.io/fly/fly.json';

const getMapFlightsData = (data) => {
  return data.map(( item, index ) => {
    //const { flight } = item;
    const nameCompanie = item.flight?.carrier?.caption; ///caption
    const price = item.flight?.price?.total?.amount;
    const isChildrenTicke = item.flight?.seats[0]?.type?.caption;
    const timeDepartureDate0 = item.flight?.legs[0].segments[0].departureDate
    const timeArrival0 = item.flight?.legs[0].segments[1]?.arrivalDate
    const timeDepartureDate1 = item.flight?.legs[1].segments[0].departureDate
    const timeArrival1 = item.flight?.legs[1].segments[1]?.arrivalDate

    return {
        ...item,
        nameCompanie,
        price,
        isChildrenTicke,
        timeDepartureDate0,
        timeArrival0,
        timeDepartureDate1,
        timeArrival1
    }
  }) ?? [];
};

export const useGetDataForTicket  = () => {
    const [data, setData] = useState([]);
    const [isError, setError] =useState(false);

    const getApiData = async () => {
        try{
          const response = await fetch(URI_FLY_API)
          .then((response) => response.json());
          setData(response.result.flights);
        }catch(error){
          console.log(error);
          setError(true);
        }
      };
    
    useEffect(()=>{
        getApiData()
    }, []);

    // console.log('data', data);
    // console.log('flights', getMapFlightsData(data));

    return {
        flights: data ? getMapFlightsData(data) : [],
        allCompaniesNames: data && [...new Set(data.map(el => el.flight.carrier.caption))],
        isError,
        setData,
    }
}