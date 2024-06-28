import { PartialType } from '@nestjs/mapped-types'
// import { PartialType } from '@nestjs/graphql';

import { IsEmail, isEmail, IsNotEmpty, IsString, MinLength, minLength, IsEnum } from "class-validator";

export class CreateTestDto {
    @IsNotEmpty({ message: 'Name is required' })
    @IsString({ message: 'Name must need to be one string' })
    name: string;

    @IsEmail({}, { message: 'Email is valid' })
    email: string;

    @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'Validate role required' })
    role: 'INTERN' | 'ENGINEER' | 'ADMIN'
}

export class UpdateTestDto extends PartialType(CreateTestDto) { }