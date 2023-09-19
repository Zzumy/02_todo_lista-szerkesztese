import { MegjelenitSor } from "./MegjelenitSor.js";

export class Megjelenit {
    #list = [];
    constructor(list, szuloElem) {
        this.#list = list;
        szuloElem.append('<table class="table table-bordered">');
        this.tablaElem = szuloElem.children("table");
        this.tablazatbaIr();
        
        console.log(szuloElem);
       
    }
    tablazatbaIr() {
        this.#list.forEach((elem, index) => {
            new MegjelenitSor(elem, this.tablaElem, index);
        });
    }
}