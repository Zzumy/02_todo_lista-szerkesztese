import { Megjelenit } from "../view/Megjelenit.js";
import { Model } from "../model/Model.js";

export class Controller {
    constructor() {
        const szuloELEM2 = $("#ujadat")
        const szuloELEM = $("#tarolo");
        const MODEL = new Model();
        new Megjelenit(MODEL.getList(), szuloELEM);
        new Urlap(MODEL.getList(), szuloELEM2);

        $(window).on("torles", (event) => {
            console.log(event.detail);
            MODEL.torol(event.detail);
            szuloELEM.empty();
            new Megjelenit(MODEL.getList(), szuloELEM);
        });

        $(window).on("kesz", (event) => {
            console.log(event.detail);
            MODEL.kesz(event.detail);
            szuloELEM.empty();
            new Megjelenit(MODEL.getList(), szuloELEM);
        });

        $(window).on("megse", (event) => {
            console.log(event.detail);
            MODEL.megse(event.detail);
            szuloELEM.empty();
            new Megjelenit(MODEL.getList(), szuloELEM);
        });

        $(window).on("uj", (event) => {
            console.log(event.detail);
            MODEL.uj(event.detail);
            szuloELEM2.empty();
            new Megjelenit(MODEL.getList(), szuloELEM2);
        });
    }
}
