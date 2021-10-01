import {FETCH_TABLE_RESULTS,NEW_TABLE_DATA,DEBIT_BALANCE} from '../actions/actions';

const initial = {
	table_data : [],
	balance_data : 20,
};

export function tableReducer(state = initial,action){
	switch(action.type){
		case FETCH_TABLE_RESULTS:
			//handlelength()
			return {...state};
		case NEW_TABLE_DATA:
			return {...state,table_data:action.payload}
		case DEBIT_BALANCE:
			return {...state,balance_data:action.payload}
		default:
			return state;
	}
}