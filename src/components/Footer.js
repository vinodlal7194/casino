import React from 'react';
import {Box,Typography} from '@mui/material';
import {useStyles} from './FooterStyles.js';


const App = () => {

	const classes = useStyles();

	return(
		<Box className={classes.footer}>
			<Typography  variant="h6"  sx={{textAlign:'center',fontSize:14}}>
			            {'Casino Royale@2021.All Rights Reserved'}
          	</Typography>
		</Box>
	);
}

export default App;
