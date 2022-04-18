(function(window) {
    function ViewEntityOne(model,selector) {
        this.model = model;
        this.selector = selector;

        this.model.onSet.attach(() => {
            this.draw();
        });
    }
    ViewEntityOne.prototype = {
        draw() {
            this.selector.innerHTML = this.model.get();
        }
    };


    window.valerMVC = window.valerMVC || {};
    window.valerMVC.ViewEntityOne = ViewEntityOne;
})(window);