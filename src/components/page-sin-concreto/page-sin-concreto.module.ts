import { Module } from '@nestjs/common';
import { PageSinConcretoService } from './page-sin-concreto.service';
import { PageSinConcretoController } from './page-sin-concreto.controller';

@Module({
  controllers: [PageSinConcretoController],
  providers: [PageSinConcretoService],
})
export class PageSinConcretoModule {}
