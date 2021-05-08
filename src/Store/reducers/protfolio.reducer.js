
import * as Actions from '../actions';

const initialState = {
	
    opendialog : false,
    ProjectDetail : []
};

const protfolioReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.OPEN_DIALOG: {
			return {
				...state,
				opendialog : true,
                ProjectDetail : action.payload
			};
		}
        case Actions.CLOSE_DIALOG: {
			return {
				...state,
				opendialog : false
			};
		}
        default: {
			return state;
		}
    }
};

export default protfolioReducer;