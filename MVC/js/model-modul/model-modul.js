(function(window) {
    function Model(data) {
        this.data = data;
        this.onSet = new valerMVC.Events();
    }

    Model.prototype = {
        get() {
            return this.data;
        },
        set(data) {
            this.data = data;
            this.onSet.notify({
                data: data
            });
        }
    };




    window.valerMVC = window.valerMVC || {};
    window.valerMVC.Model = Model;
})(window);