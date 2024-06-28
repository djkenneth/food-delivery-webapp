import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestDto, UpdateTestDto } from './dto/test.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TestService {
    constructor(private readonly databaseService: DatabaseService) { }

    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        // Dummy Data
        // if (role) {
        //     const rolesArray = this.users.filter(user => user.role === role)
        //     if (rolesArray.length === 0) throw new NotFoundException('User Role Not Found')
        //     return rolesArray;
        // }
        // return this.users;

        // Prisma Data
        if (role) {
            return this.databaseService.employee.findMany({
                where: { role }
            })
        }
        return this.databaseService.employee.findMany()
    }

    async findOne(id: number) {
        // Dummy Data
        // if (id) {
        //     const user = this.users.find(user => user.id === id)
        //     if (!user) throw new NotFoundException('User Not Found')
        //     return user;
        // }

        // Prisma Data
        if (id) {
            return this.databaseService.employee.findUnique({
                where: { id }
            })
        }
    }

    async create(user: CreateTestDto) {
        // Dummy Data
        // const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        // const newUser = {
        //     id: usersByHighestId[0].id + 1,
        //     ...user
        // }
        // this.users.push(newUser)
        // return newUser

        // Prisma Data
        return this.databaseService.employee.create({
            data: user
        })
    }

    async update(id: number, updatedUser: UpdateTestDto) {
        // Dummy Data
        // this.users = this.users.map(user => {
        //     if (user.id === id) {
        //         return { ...user, ...updatedUser }
        //     }
        //     return user
        // })

        // return this.findOne(id)

        // Prisma Data
        return this.databaseService.employee.update({
            where: { id },
            data: updatedUser
        })
    }

    async delete(id: number) {
        // Dummy Data
        // const removedUser = this.findOne(id)
        // this.users = this.users.filter(user => user.id !== id)
        // return removedUser

        // Prisma Data
        return this.databaseService.employee.delete({
            where: { id }
        })
    }
}
