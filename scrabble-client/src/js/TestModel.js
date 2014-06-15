App.TestModel = Backbone.Model.extend({
    url : App.defaultUrl + 'testModel',
    defaults: {
        value: 'this is default'
    }
});