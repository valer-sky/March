"use strict";

function initApp() {
    const model = new valerMVC.Model(33);

    const oneView = new valerMVC.ViewEntityOne(
        model,
        document.getElementById('entity-one')
    );

    const twoView = new valerMVC.ViewEntityTwo(
        model,
        document.getElementById('entity-two')
    );


    const oneController = new valerMVC.Controller(model, oneView);
    const twoController = new valerMVC.Controller(model, twoView);

    oneView.draw();
    twoView.draw();

    window.setTimeout(
        () => {
            model.set(999);
        }, 5000);
    

}


document.addEventListener('DOMContentLoaded', initApp, false);