import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createServiceDto: CreateAccountDto) {
    return this.accountsService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.accountsService.findAll();
  }
}
