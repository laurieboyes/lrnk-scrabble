App.AppView = Backbone.View.extend({
    el: '#main',

    template: _.template("<h3>Hello. Apparently, <%= value %><h3>"),

    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    }
});