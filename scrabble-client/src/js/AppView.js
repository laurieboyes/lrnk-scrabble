App.AppView = Backbone.View.extend({
    el: '#main',

    template: _.template("<label for=\"testText\">Test me: </label><input type=\"text\" name=\"testText\" id=\"testText\"/>" +
        "<h3>Hello <%= value %><h3>"),

    initialize: function(){
        _.bindAll(this, "render");
        this.model.bind('change', this.render);
        this.render();
    },

//    Elements need to be within el
    events: {
        "change input#testText": "updateThing"
    },

    updateThing: function(e) {
        this.model.set("value", $(e.currentTarget).val());
    },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    }
});