import { PropTypes } from "prop-types"
import { Box } from '@mui/material'
import { Card } from './components/Card/Card'
import style from './CardList.module.css'
import { v4 as uuidv4 } from 'uuid'

export const CardsList = ({ cards }) => {
    return (
        <Box className={style.main}>
            {
                cards.map((card) => {
                    return (
                        <Card 
                            cardInfo={card}
                            key={uuidv4()} 
                        />
                    )
                })
            }
        </Box>
    )
}

CardsList.propTypes = {
    cards: PropTypes.array,
};