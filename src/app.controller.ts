/* eslint-disable @typescript-eslint/no-var-requires */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
const fs = require('fs');

@Controller('metadata')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  async getHello(@Param('name') name: string) {
    const text = fs.readFileSync(`./src/metadata/${name}.json`, 'utf8');
    console.log(text);
    return JSON.parse(text);
  }
}
