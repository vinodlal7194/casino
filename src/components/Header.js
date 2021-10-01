import React,{useState,useEffect} from 'react';
import {AppBar,Typography,Avatar,Button,Box,TextField} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SendIcon from '@mui/icons-material/Send';
import Face from '@mui/icons-material/Face';
import { green} from '@mui/material/colors';
import {useStyles} from './HeaderStyles.js';
import Modal from '@mui/material/Modal';
import {useDispatch,useSelector} from 'react-redux';


const App = () => {

	const [open, setOpen] = useState(false);
  	const handleOpen = () => {setOpen(true);logout();};
  	const handleClose = () => setOpen(false);
  	const [balance,setbalance] = useState();
  	const [emailid,setemail] = useState();
  	const [passwordid,setpassword] = useState();
  	const [login ,setLogin] = useState('Login');

	const classes = useStyles();

	const fetch_balance = useSelector(state => state.tableReducer.balance_data)

	useEffect(() => {
		setbalance(fetch_balance);
	},[fetch_balance])

	const handlelogin = () => {
		if (emailid === 'abc@mail.in' && passwordid === 'vinod') {
			setLogin('Logout')
			setOpen(false)
		}else{
			setLogin('Login')
		}
	}
	const logout = () => {
		setLogin('Login');
		setemail('');
		setpassword('')
	}

	const handleemail = (e) => {
		let email = e.target.value;
		setemail(email);
	}

	const handlepassword = (e) => {
		let password = e.target.value;
		setpassword(password);
	}

	return(

		<AppBar position="static" className={classes.header}>
			  <Box  className={classes.box}>

			  	<Box className={classes.logobox}>
			  		<Typography variant="h6" color="inherit" component="div" className={classes.logo}>
			      		Casino Royale
			    	</Typography>
			  	</Box>
			  	
			  	<Box className={classes.avatarbox}>
			  		<Typography variant="h6" color="inherit" component="div" className={classes.balance}>
			      		{`${'$'+ balance}`}
			    	</Typography>

				    <Avatar sx={{ bgcolor: green[500] }} variant="rounded" alt="Remy" className={classes.avatar}>
					  <Face />
					</Avatar>
			  	</Box>
			    
			  </Box>

			  <Box className={classes.loginbox}>
			  	<Button variant="contained" component="div" endIcon={<SendIcon />}
				size="small" className={classes.login} onClick={handleOpen}>{login}</Button>
			  </Box>

			  <Modal
		        open={open}
		        onClose={handleClose}
		        aria-labelledby="modal-modal-title"
		        aria-describedby="modal-modal-description"
		      >
		        <Box className={classes.modal}>
		        	<Box className={classes.modaltitle}>
			          	<Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
			            User Login
			          </Typography>
		          	</Box>
		          	<Box className={classes.modalinputs}>
			          <TextField label="Email" color="secondary" variant="outlined" onChange={handleemail}/>
			          <TextField label="Password" type="password" color="secondary" variant="outlined"  onChange={handlepassword}/>
			        </Box>  
			        <Box className={classes.modalbtn}>
			          <Button variant="contained" component="div" endIcon={<SendIcon />}
						size="small" className={classes.modallogin} onClick={handlelogin}>Login</Button>
					</Box>
		         
		        </Box>
		      </Modal>

			</AppBar>
		);
}

export default App;