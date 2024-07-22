import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageSinConcretoModule } from 'src/components';

@Module({
  imports: [PageSinConcretoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
