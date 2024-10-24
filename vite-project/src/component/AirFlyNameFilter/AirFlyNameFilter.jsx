import { PropTypes } from "prop-types";

import { Checkbox, Box } from '@mui/material';

//AirFlyNameFilter companiesName={['Aeroflot', 'red wings', ]} 
export const AirFlyNameFilter = ({ companiesName = [], selectCompaniesName = [], onChange }) => {
    const handleOnChange = (companie) => {
        onChange(companie);
    }

    if (!companiesName.length) {
        return <>Empty view</>
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            {
                companiesName.map((companie, index) => {
      
                    return (
                        <Box sx={{ display: 'flex', gap: '8pxp'}} key={`airfly-${index}`}> 
                            <Checkbox 
                                label={companie}
                                checked={selectCompaniesName.includes(companie)}
                                onChange={(event) => handleOnChange(companie)}
                            />
                            <span>{companie}</span>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

AirFlyNameFilter.propTypes = {
    listAllNames: PropTypes.array,
    onChange: PropTypes.func,
    listSelectNames: PropTypes.array,
};

//props type