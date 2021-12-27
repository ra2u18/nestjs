import { Controller, Get, Post, Body } from '@nestjs/common';

import { Cat } from './interfaces/cat.interface';
import { CreateCatDTO } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    @Post()
    async create(@Body() createCatDTO: CreateCatDTO){
        this.catsService.create(createCatDTO);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
