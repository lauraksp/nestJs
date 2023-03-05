/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('prefixo') /*pode passar prefixo*/
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test') //GET - Decorator
  getHello(): string {
    return this.appService.getHello(); //busca de dentro de um servico (CLASSE)
  }

  @Get('teste1') //Rota
  acao(): string { //metodo
    return 'LauraKimberly'; //retorno
  }
}
