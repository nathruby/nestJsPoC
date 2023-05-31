import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    private readonly usersDB: Array<User>;

    constructor() {
        this.usersDB = new Array<User>(
            {
                id: 1,
                name: 'Cody',
            }, 
            {
                id: 2,
                name: 'Natalie', 
                age: 36
            },
            {
                id: 3,
                name: 'Suhas'
            }
        );
    };

    @Get()
    getUsers(): Array<User> {

        return this.usersDB;
    }

    @Get(':id')
    getUser(@Param('id') id: number): User {

        return this.usersDB.find(user => user.id == id);
    }
}

interface User {
    readonly id: number;
    name: string;
    age?: number;
};
