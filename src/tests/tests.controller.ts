import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tests')
@Controller('tests')
export class TestsController {

    @Get()
    getTest(@Param('id') id: number): number {

        return id;
    }
}
