import { PropTypes } from "prop-types";
import { Leg } from './components/Leg/Leg'
import { Box } from '@mui/material'
import style from './Card.module.css'
import { v4 as uuidv4 } from 'uuid'

export const Card = ({ cardInfo}) => {
    const { nameCompanie, price, isChildrenTicke, flight } = cardInfo;
    const legs = flight?.legs ?? [];
    return (
        <Box className={style.item} >
            <div className={style.price} >
              <div>{price}</div>
              <div>Стоимость для одного взрослого пассажира</div>
              <div>{nameCompanie}</div>
            </div> 
            {
                legs.map((legItem) => {
                    return (
                        <div className={style.borderBottom}>
                            <Leg data={legItem}
                            key={uuidv4()} 
                            />
                        </div>
                    )
                })
            }
            <button className={style.buttonBuy}>выбрать</button>
        </Box>

    )
}


Card.propTypes = {
    cardInfo: PropTypes.object,
};