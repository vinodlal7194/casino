import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
  header: {
  	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    display: 'flex',
  },
  box: {
  	width: '100%',
    display:'flex',
    alignItems: 'center',
    flexDirection:'row',
    padding: 15,
    boxSizing: 'border-box',
  },
  logobox: {
  	width:'50%',
  	margin:0,
  	display:'flex',
  	alignItems:'center',
  },
  avatarbox: {
  	width: '50%',
  	margin:0,
  	display:'flex',
  	justifyContent:'flex-end',
  	alignItems:'center',
  },
  logo:{
  	width: '30%',
    fontFamily: 'Hanalei Fill'
  },
  balance: {
  	width: '15%',
  	margin:0,
  },
  avatar: {
  	width: '8%',
  },
  loginbox: {
  	display: 'flex',
  	alignItems: 'center',
  	justifyContent: 'flex-end',
    height: 40,
    padding: 15,
  },
  login: {
  	width: '8%',
    height: '70%',
    marginRight: 10,
  },
  modallogin: {
    width: '30%',
    height: '70%',
    marginRight: 10,
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    display:'flex',
    flexDirection:'column',
  },
  modaltitle: {
    height:'15%',
  },
  modalinputs: {
    height:'50%',
    padding:15,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
  },
  modalbtn: {
    height: '20%',
    padding: 15,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
  },
});