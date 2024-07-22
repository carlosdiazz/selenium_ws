import { Controller } from '@nestjs/common';
import { PageSinConcretoService } from './page-sin-concreto.service';

@Controller('page-sin-concreto')
export class PageSinConcretoController {
  constructor(
    private readonly pageSinConcretoService: PageSinConcretoService,
  ) {}
}
