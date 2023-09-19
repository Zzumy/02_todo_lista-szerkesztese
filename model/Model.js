import { TODOLIST2 } from "./adatok.js"

export class Model{
    #list = []
    constructor(){
        this.#list = TODOLIST2;
    }
    getList(){
        return this.#list;
    }
    torol(index){
        this.#list.splice(index, 1);
    }
    kesz(index){
        this.#list[index].kesz = true;
    }
    megse(index){
        this.#list[index].kesz = false;
    }
    ujadat(index){
        
    }
}
