import React from 'react';
import { Container} from '@mui/material';
import {useStyles} from './MainStyles.js';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {

	const classes = useStyles();

	return(
		<Container className={classes.root}>
			<Header/>
			<Content/>
			<Footer/>
		</Container>
	);
}

export default App;
