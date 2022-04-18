(function(window) {
    function Controller(model, view) {
        this.model = model;
        this.view = view;

        if(this.view.hasOwnProperty('onChange')) {
            this.view.onChange.attach((data) => {
                this.update(data);

            });
        }
    }

    Controller.prototype = {
        update(data) {
            this.model.set(data);
        }
    };


    window.valerMVC = window.valerMVC || {};
    window.valerMVC.Controller = Controller;
})(window);