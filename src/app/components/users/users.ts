import {Component, EventEmitter, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from 'angular2/common';
import {NG_TABLE_DIRECTIVES} from 'ng2-table';
import {AjaxService} from '../../services/ajax';

import {UsersService} from './user.service';

@Component({
    selector: 'users',
    directives: [...NG_TABLE_DIRECTIVES, NgClass, NgIf, ...CORE_DIRECTIVES, ...FORM_DIRECTIVES],
    pipes: [],
    providers: [
        UsersService,
        AjaxService
    ],
    styles: [require('./users.scss')],
    template: require('./users.html')
})

export class Users implements OnInit {

    data: Array<any> = [];

    public rows:Array<any> = [];
    public columns:Array<any> = [
        {title: 'Name', name: 'name'},
        {title: 'Username', name: 'username', sort: false},
        {title: 'Email', name: 'email', sort: 'asc'},
    ];

    public page:number = 1;
    public itemsPerPage:number = 10;
    public maxSize:number = 5;
    public numPages:number = 1;
    public length:number = 0;

    public config:any = {
        sorting: {columns: []},
        filtering: {filterString: '', columnName: 'name'}
    };

    constructor(private userService:UsersService) {
        this.length = this.data.length;

    }

    ngOnInit() {
        this.onChangeTable(this.config);
        let me = this;
        this.userService.listUsers().subscribe(function (data) {
            me.length = data.length;
            me.data = data;
            me.onChangeTable({});
        })
    }

    changeSort(data:any, config:any) {
        if (!config.sorting) {
            return data;
        }

        // simple sorting
        return data.sort((previous:any, current:any) => {
            let columns = this.config.sorting.columns || [];
            for (let i = 0; i < columns.length; i++) {
                let columnName = columns[i].name;

                if (previous[columnName] > current[columnName]) {
                    return columns[i].sort === 'desc' ? -1 : 1;
                }
                if (previous[columnName] < current[columnName]) {
                    return columns[i].sort === 'asc' ? -1 : 1;
                }
            }
            return 0;
        });
    }

    changeFilter(data:any, config:any):any {
        if (!config.filtering) {
            return data;
        }

        let filteredData:Array<any> = data.filter((item:any) =>
            item[config.filtering.columnName].match(this.config.filtering.filterString));

        return filteredData;
    }

    onChangeTable(config:any) {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let filteredData = this.changeFilter(this.data, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = sortedData;
        this.length = sortedData.length;
    }



}
