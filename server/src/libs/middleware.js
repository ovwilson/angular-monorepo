const { BehaviorSubject } = require('rxjs');

class ModelHelpers {

    constructor(Model, request, response, next) {
        this._request = request;
        this._response = response;
        this._next = next;
        this._Model = Model;
        this.$find = new BehaviorSubject();
     }

     init(model){
        this._Model = model;
     }

     findSubscription(){
         return this.$find.asObservable();
     }

     find(){
        this._Model.find({}).then(result => this.$find.next(result))
     }

}

module.exports = ModelHelpers();