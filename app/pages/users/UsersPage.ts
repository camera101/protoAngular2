import { Component, OnInit } from 'angular2/core';
import { UsersService } from './UsersService';


@Component({
    selector: 'page',
    template: `
    <div class="container">
        <div class="page-header">
            <h1>Users Page</h1>
        </div>

    </div>
    `,
    providers: [
        UsersService
    ]
})

export class UsersPage implements OnInit{

    public getData: string;

    public postData: string;

    constructor(private userService: UsersService) { }

    ngOnInit() {
        var me = this;
        me.userService.getUsers({
            success: (data: any) => me.getData = JSON.stringify(data),
            error: (error: any) => alert(error),
            after: function () {
                console.log('Finished Get');
                me.userService.setUsers({
                    params: {
                        aString: 'string',
                        anArray: ['arr1','arr2'],
                        anObject: {prop1: 'val1', prop2:'val2'}
                    },
                    success: (data: any) => me.postData = JSON.stringify(data),
                    error: (error: any) => alert(error),
                    after: function () {
                        console.log('Finished Post');
                    }
                });
            }
        });





    }
}