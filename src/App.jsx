import React,{Component} from "react"

import {inject,observe} from "mobx-react"
import { observer } from "mobx-react";
import { store2 } from "./store";

@inject("store","store2")
@observer
class App extends Component{
    render(){
        let {store}=this.props
        return (
            <div>
                <div><button onClick={()=>store2.setPrice(10)}>+</button></div>
                <div>{store.count}</div>
                <div>{store2.price}</div>
                <div><button onClick={store.increment}>+</button></div>
            </div>
        )
    }
}
export default App