import {observable,action, observe} from "mobx"
class Store{
    @observable
    count=0

    @action.bound
    increment(){
        this.count++
    }
}
class Store2{
    @observable
    price=0
    @action.bound
    setPrice(price){
        this.price+=price
    }
}
var store=new Store()
var store2=new Store2()
export {store,store2}