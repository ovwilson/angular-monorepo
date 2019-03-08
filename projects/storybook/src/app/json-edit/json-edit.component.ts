import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface MetaDataKeys {
    _idx?: number;
    key?: string;
    value?: Date | boolean | object | number | string | MetaDataKeys[];
    type?: string;
}

interface MetaDataArray {
    _idx?: number;
    keys?: MetaDataKeys[];
}

@Component({
    selector: 'app-json-edit',
    templateUrl: './json-edit.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JSONEditComponent implements OnInit {

    data$: Observable<MetaDataArray[]> = of<MetaDataArray[]>();
    metaKeys$: Observable<MetaDataKeys[]> = of<MetaDataKeys[]>([]);

    constructor() { }

    ngOnInit() {
        this.data$ = of(this.getData()).pipe(
            map(data => data.map(attr => Object.assign({}, { _idx: data.indexOf(attr), keys: this.parseKeys(attr) })))
        );
    }

    getData(): any[] {
        return [
            {
                name: 'Test',
                label: 'test',
                count: 1,
                isReady: true,
                date: new Date(),
                anoth: { name: 'qqq' },
                rules: [{
                    role: 'test',
                    status: [
                        {
                            name: 'Me',
                            label: 'you'
                        }
                    ]
                }]
            },
            {
                name: 'Test',
                label: 'test',
                count: 70,
                isReady: false,
                date: new Date(),
                rules: [{
                    role: 'test',
                    status: ''
                }]
            }
        ];
    }

    parseKeys(attr: any) {
        const keys = Object.keys(attr);
        let metadata: MetaDataKeys[] = [];
        for (const key of keys) {
            metadata = [...metadata, {
                _idx: metadata.length,
                key: key,
                value: this.detectValue(attr[key]),
                type: this.detectType(attr[key])
            }];
        }
        return metadata;
    }

    detectValue(val: any) {
        const t = this.detectType(val);
        switch (t) {
            case 'object': return this.parseKeys(val);
            case 'array': return val.map(v => this.parseKeys(v));
            default: return val;
        }
    }

    detectType(attr: any) {
        if (Array.isArray(attr)) {
            return 'array';
        }
        if (attr instanceof Date) {
            return 'date';
        }
        return typeof attr;
    }

}
