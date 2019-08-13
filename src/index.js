import React  from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import {Provider} from "mobx-react"
import {store,store2} from "./store/"

ReactDOM.render(
    <Provider store={store} store2={store2}>
    <App></App>
    </Provider>,
    document.getElementById("root")
)