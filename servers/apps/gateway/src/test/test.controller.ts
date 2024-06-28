import { Body, Controller, Get, Param, Patch, Post, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto, UpdateTestDto } from './dto/test.dto';

@Controller('test')
export class TestController {

    constructor(private readonly testService: TestService) { }

    @Get() // GET /tests or /tests?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.testService.findAll(role)
    }

    @Get(':id') // GET /tests/:id
    // ParseIntPipe convert your param to number when you set the type
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.testService.findOne(id)
    }

    @Post() // POST /tests
    // ValidationPipe is to validate the rule from the incoming client payload with the help of class-validator package.
    create(@Body(ValidationPipe) test: CreateTestDto) {
        return this.testService.create(test)
    }

    @Patch(':id') // PATCH /tests/:id
    update(@Param('id') id: string, @Body(ValidationPipe) testUpdate: UpdateTestDto) {
        return this.testService.update(parseInt(id), testUpdate)
    }

    @Delete(':id') // DELETE /tests/:id
    delete(@Param('id') id: string) {
        return this.testService.delete(parseInt(id))
    }
}