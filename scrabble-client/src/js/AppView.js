var AppView = Backbone.View.extend({
    el: '#main',

    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.html("Hello World");
    }
});