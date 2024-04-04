import { Provider } from "react-redux";
import { store } from "./app/store";

// THis is the component that will be called to indicate who has access to the state
export default function ReduxProvider({children}){
    return <Provider store={store}>{children}</Provider>
}