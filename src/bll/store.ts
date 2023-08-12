import {AnyAction, applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import {appReducer} from "./app-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunkMiddleWare, {ThunkDispatch} from "redux-thunk";
import {sendFormReducer} from "./send-form-reducer";


const rootReducer = combineReducers({
    app: appReducer,
    form: sendFormReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>




