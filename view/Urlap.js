export class Urlap {
    #adat = {};

    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.szuloElem = szuloElem;

        this.szuloElem.html("<form>");
        this.formElem = this.szuloElem.children("form");
        this.tevekenysegElemk = this.formElem.children(".tevekenyseg");
        this.hataridoElem = this.formElem.children(".hatarido");
        this.submitElem = this.formElem.children("div").children("#submit");
        this.#urlapLetrehoz();
        this.submitElem.on("click", (event) => {
            event.preventDefault();
            this.#adatGyujt();
            this.#esemenyTrigger("uj");
        });
    }

    #adatGyujt() {
        
    }

    #urlapLetrehoz() {
        let txt = "";
        for (const key in this.#adat) {
            
        }
        this.tablaElem.append(txt);
    }

    #esemenyTrigger(esemenynev) {
        const esemenyem = new CustomEvent(esemenynev, { detail: this.#index });
        window.dispatchEvent(esemenyem);
    }
}
