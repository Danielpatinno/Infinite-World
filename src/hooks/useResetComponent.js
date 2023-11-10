// Redux
import { reset } from "../slices/clientSlice";

export const useResetComponent = (dispatch) => {
    return () => {
        setTimeout(() => {
            dispatch(reset())
        }, 2000)
    }
}