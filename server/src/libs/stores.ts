import { BehaviorSubject } from 'rxjs';
import { Schema, model, Model, Document } from 'mongoose';
import { default as SchemaModel, IDocument } from './../models/Schema';
import * as fromUtils from './utils';

export interface ModelState {
    names: string[];
    entities: { [name: string]: Model<Document> };
}

export interface State {
    models: ModelState;
}

class Store {

    public initialModelState: State = { models: { names: [], entities: {} } };
    public models$ = new BehaviorSubject(this.initialModelState);

    constructor() {}

    get modelsSubscription$() {
        return this.models$.asObservable();
    }

    getModels() {
        SchemaModel.find({}, (err: any, data: any) => { err ? console.error(err) : this.setModels(data); });
    }

    setModels(models: IDocument[]) {
        const state: ModelState = {
            names: [],
            entities: {}
        };
        models.map(m => {
            state.names = [...state.names, m.name];
         //   state.entities = Object.assign(state.entities, { [m.name]: this.createModel(m.name, m.documents) });
        });
        this.models$.next({ models: state });
    }

    createModel = (name: string, documents: any[]) => {
        let data = {};
        documents.map(d => data = Object.assign(data, { [d.name]: this.getType(d.type) }));
        let schema = new Schema(data);
        console.log(data);
        schema = this.addDefaults(schema);
        return model(name, schema);
    }

    getType = (type: string) => {
        switch (type) {
            case 'string': return String;
            case 'number': return Number;
            case 'Date': return Date;
            default: return String;
        }
    }

    addDefaults(schema: Schema) {
        schema.add({
            id: Number,
            createdAt: { type: Date, default: () => Date.now() },
            updatedAt: { type: Date, default: () => Date.now() }
        });
        return schema;
    }

}

export default new Store();
