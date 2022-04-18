(function(window) {
    function ViewEntityTwo(model,selector) {
        this.model = model;
        this.selector = selector;
        this.onchange = new valerMVC.Events();

        this.selector.addEventListener('change', (event) => {
            this.onchange.notify(event.target.value);
        });

        this.model.onSet.attach(() => {
            this.draw();
        })
    }
    ViewEntityTwo.prototype = {
        draw() {
            this.selector.value = this.model.get();
        }
    };


    window.valerMVC = window.valerMVC || {};
    window.valerMVC.ViewEntityTwo = ViewEntityTwo;
})(window);