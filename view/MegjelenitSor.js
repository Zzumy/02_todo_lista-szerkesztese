export class MegjelenitSor {
    #adat = {};
    #index;

    constructor(adat, szuloElem, index) {
        this.#adat = adat;
        this.#index = index;
        this.tablaElem = szuloElem;

        this.#sor();
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.torolElem = this.sorElem.children("td").children(".torol");
        this.megseElem = this.sorElem.children("td").children(".megse");
        if (this.#adat.kesz) {
            this.sorElem.css("background-color", "lightgreen");
            this.megseElem.css("display", "inline");
            this.keszElem.css("display", "none");
        }else{
            this.sorElem.css("background-color", "white");
            this.keszElem.css("display", "inline");
            this.megseElem.css("display", "none");
        }

        this.torolElem.on("click", () => {
            this.#esemenyTrigger("torles");
        });

        this.megseElem.on("click", () => {
            this.#esemenyTrigger("megse");
        });
        
        this.keszElem.on("click", () => {
            this.#esemenyTrigger("kesz");
        });
    }

    #sor() {
        let txt = "";
        txt += "<tr>";
        for (const key in this.#adat) {
            if (Object.hasOwnProperty.call(this.#adat, key)) {
                if (key == "kesz") { continue;}
                const element = this.#adat[key];
                txt += `<td>${element}</td>`;
            }
        }
        txt += `<td><span class="kesz">✔️</span> <span class="megse">❌</span><span class="torol">🗑</span></td>`;
        txt += "</tr>";

        this.tablaElem.append(txt);
    }

    #esemenyTrigger(esemenynev) {
        const esemenyem = new CustomEvent(esemenynev, { detail: this.#index });
        window.dispatchEvent(esemenyem);
    }
}
