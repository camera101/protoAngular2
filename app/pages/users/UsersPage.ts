import { Component, OnInit } from 'angular2/core';
import { UsersService } from './UsersService';
import { User } from './UserInterface';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {Fieldset} from 'primeng/primeng';

@Component({
    selector: 'page',
    template: `
    <br/>
    <p-fieldset legend="Users">
        <p-dataTable [value]="users">
            <p-column field="username" header="Username" [sortable]="true"></p-column>
            <p-column field="email" header="Email" [sortable]="true"></p-column>
            <p-column field="name" header="Name" [sortable]="true"></p-column>
        </p-dataTable>
    </p-fieldset>
    `,
    providers: [
        UsersService
    ],
    directives: [
        DataTable,
        Column,
        Fieldset
    ]
})

export class UsersPage implements OnInit{

    users: User[];

    constructor(private userService: UsersService) {}

    ngOnInit() {
        this.userService.listUsers().subscribe(data => this.users = data)
    }
}