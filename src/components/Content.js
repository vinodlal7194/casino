import React,{useState,useEffect}from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Box,Button,Typography} from '@mui/material';
import {useStyles} from './ContentStyles.js';
import SendIcon from '@mui/icons-material/Send';
import Modal from '@mui/material/Modal';
import hearts from '../images/hearts.png';
import spade from '../images/spade.png';
import clover from '../images/clover.png';
import diamond from '../images/diamond.png';
import {useDispatch,useSelector} from 'react-redux';



const App = () => {

	const [open, setOpen] = useState(false);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);
  	const [slots , setslots] = useState([1,2,3]);
  	const [slot1img,setSlot1img] = useState(hearts);
  	const [slot2img,setSlot2img] = useState(diamond);
  	const [slot3img,setSlot3img] = useState(spade);
  	const [newid,setnewid] = useState();
  	const [init,setinit] = useState([]);
  	const [balance,setbalance] = useState();
  	const [Gameover,setGameover] = useState(false);
  	const [display,setdisplay] = useState([]);

	const jj = useSelector(state => state.tableReducer.table_data);
	const dispatch = useDispatch();

	
	// useEffect(() => {
	// 	let disk = localStorage.getItem("table_items");
	// 	console.log(JSON.parse(disk),'local');
	// 	if (disk) {
	// 		dispatch({type:'NEW_TABLE_DATA',payload:JSON.parse(disk)});
	// 		setinit(JSON.parse(disk));
	// 		table()
	// 	}
		
	// },[])
	

	// useEffect(() => {

	// 	let string_arr = JSON.stringify(init);
	// 	localStorage.setItem("table_items",string_arr);
	// 	dispatch({type:'NEW_TABLE_DATA',payload:init});
	// },[init]);

 //  	useEffect(() => {
	// 	table()
	// },[jj])
  	
  

  	console.log(init);

	const classes = useStyles();

	

	const columns = [
		  { field: 'id', headerName: 'ID', width: 110 },
		  {
		    field: 'slotOne',
		    headerName: 'Slot One',
		    width: 150,
		  },
		  {
		    field: 'slotTwo',
		    headerName: 'Slot Two',
		    width: 150,
		  },
		  {
		    field: 'slotThree',
		    headerName: 'Slot Three',
		    width: 150,
		  },
		  {
		    field: 'time',
		    headerName: 'Time',
		    sortable: true,
		    width: 160,
		    type:'number',
		  },
		];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];



useEffect(() => {
	img_assign();
},[slots])

const balance_check = useSelector(state => state.tableReducer.balance_data);
console.log(balance_check);

useEffect(() => {
	setbalance(balance_check);
},[slots]);

console.log(balance)

const spin = () => {
	let random = [Math.floor((Math.random() * 4) + 1),Math.floor((Math.random() * 4) + 1),Math.floor((Math.random() * 4) + 1)];
	console.log(random);
	setslots(random);
	
	const lastid = () => {
		const last = init.slice(-1);
		let lastidd = last[0].id;
		console.log(lastid);
		return lastidd
	}
		
	
	let newdata = {id:init.length > 0?lastid() + 1:1,slotOne:random[0],slotTwo:random[1],slotThree:random[2],
		time:new Date(Date.now())}
	console.log(newdata);

	let updatedata = [...init,newdata];

	if (balance > 0) {
		dispatch({type:'NEW_TABLE_DATA',payload:updatedata});
		dispatch({type:'DEBIT_BALANCE',payload:balance - 2})
	}else if (balance === 0 || balance < 0) {
		setOpen(false);
		setGameover(true);
	}

	let filter = random.filter((element, index, array) => array.indexOf(element) !== index)	;
	console.log(filter,'filter')

	if (filter.length === 2 && filter[0] === 3) {
		dispatch({type:'DEBIT_BALANCE',payload:balance + 5})
	}else if (filter.length === 2 && (filter[0] === 1 || filter[0] ===2 || filter[0] === 4 )) {
		dispatch({type:'DEBIT_BALANCE',payload:balance + 2})
	}else if (filter.length === 1) {
		dispatch({type:'DEBIT_BALANCE',payload:balance + 0.5})
	}
}

const handleGameOver = () => {
	setGameover(false);
}

const calibrate = () => {
	setslots([3,3,3]);
}

const close = () => {
	setOpen(false)
}

function img_assign(){
	if (slots[0] === 1) {setSlot1img(hearts)};
	if (slots[0] === 2) {setSlot1img(diamond)};
	if (slots[0] === 3) {setSlot1img(spade)};
	if (slots[0] === 4) {setSlot1img(clover)};

	if (slots[1] === 1) {setSlot2img(hearts)};
	if (slots[1] === 2) {setSlot2img(diamond)};
	if (slots[1] === 3) {setSlot2img(spade)};
	if (slots[1] === 4) {setSlot2img(clover)};

	if (slots[2] === 1) {setSlot3img(hearts)};
	if (slots[2] === 2) {setSlot3img(diamond)};
	if (slots[2] === 3) {setSlot3img(spade)};
	if (slots[2] === 4) {setSlot3img(clover)};

	
}

function table(){
	if (init) {
		let temp = jj;
		console.log(temp,'temp');
		console.log('zzzz');

		let renew = temp.map((element) => { 
			let one = element.slotOne;
			let two = element.slotTwo;
			let three = element.slotThree;

			let slotone;let slottwo;let slotthree;


			if (one === 1) {slotone = 'heart'}
			if (one === 2) { slotone = 'diamond'}
			if (one === 3) { slotone = 'spade'}
			if (one === 4) { slotone = 'clover'}

			if (two === 1) { slottwo = 'heart'}
			if (two === 2) { slottwo = 'diamond'}
			if (two === 3) { slottwo = 'spade'}
			if (two === 4) { slottwo = 'clover'}

			if (three === 1) { slotthree = 'heart'}
			if (three === 2) { slotthree = 'diamond'}
			if (three === 3) { slotthree = 'spade'}
			if (three === 4) { slotthree = 'clover'}

			let obj = {...element,slotOne:slotone,slotTwo:slottwo,slotThree:slotthree}	


			// console.log(one,two,three);
			// console.log(slotone,slottwo,slotthree);
			// console.log(obj,'map obj')
			return obj
		});

		console.log(renew,'new renewed array');

		

		setdisplay(renew);
	}else if (init === undefined) {
		console.log('not defined');
	}
}
useEffect(() => {
  		setinit(jj);
  		table();
  	},[slots]);






	return(
		<Box className={classes.content}>
			<div style={{ height: '80%', width: '100%' }}>
		      <DataGrid
		        rows={display}
		        columns={columns}
		        pageSize={10}
		        rowsPerPageOptions={[10]}
		      />
		    </div>
		    <Box className={classes.play}>
		    	<Button variant="contained" component="div" endIcon={<SendIcon />}
						size="small" className={classes.Playbtn} onClick={handleOpen}>Play</Button>
		    </Box>

		    <Modal
	        open={open}
	        onClose={handleClose}
	      >
	        <Box className={classes.modal}>

	        	<Box className={classes.modalslots}>
		          <Box className={classes.modalslots1}>
		          		<img src={slot1img}  width="100%" height="100%"/>
		          </Box>
		          <Box className={classes.modalslots2}>
						<img src={slot2img}  width="100%" height="100%"/>
		          </Box>
		          <Box className={classes.modalslots3}>
		          		<img src={slot3img}  width="100%" height="100%"/>
		          </Box>
	          	</Box>

	          	<Box className={classes.modalbtns}>
		         	<Box className={classes.modalbtn1}>
		         		<Button variant="contained" component="div" endIcon={<SendIcon />}
						size="small" className={classes.spin} onClick={spin}>Spin</Button>
		         	</Box>
		          	<Box className={classes.modalbtn2}>
		          		<Button variant="contained" component="div" endIcon={<SendIcon />}
						size="small" className={classes.calibrate} onClick={calibrate}>Calibrate</Button>
		          	</Box>
		          	<Box className={classes.modalbtn3}>
		          		<Button variant="contained" component="div" endIcon={<SendIcon />}
						size="small" className={classes.close} onClick={close}>Close</Button>
		          	</Box>
		        </Box>  
		       
	        </Box>
	      </Modal>

	       <Modal
	        open={Gameover}
	        onClose={handleGameOver}
	      	>
		      <Box className={classes.gameover}>
		      		<Typography variant="h1" color="inherit" component="div" className={classes.overtxt}>
				      		Game Over
			    	</Typography>
			    	<Typography variant="h4" color="inherit" component="div" className={classes.overtxt}>
				      		Not Enough Credits
			    	</Typography>
		      </Box>
	      </Modal>

		</Box>
	);
}

export default App;
