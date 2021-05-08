
export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export function OpenDialog(data) {
    console.log("Under Open Dialog");
	return {
		type: OPEN_DIALOG,
        payload : data
	};
}
export function CloseDialog(){
    console.log("Under CLOSE Dialog");
	return {
		type: CLOSE_DIALOG,
	};
}
