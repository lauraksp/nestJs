import { Injectable } from '@nestjs/common';

@Injectable() // Decorator, foi registrado em providers (app.module.ts), entao e injetavel em outros lugares tb
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
