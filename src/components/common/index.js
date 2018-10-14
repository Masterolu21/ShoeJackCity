import { COMMON } from '../../config/types';

export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Footer';
export * from './Input';
export * from './Spinner';
export * from './TournamentCard';
//if using * you cannot use export default in other js files


export const start = () => (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
	};

export const end = () => (dispatch) => {
		dispatch({ type: COMMON.SERVER_SUCCESS });
	};
