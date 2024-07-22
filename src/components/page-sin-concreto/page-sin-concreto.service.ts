import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { SeleniumWebdriver, sleep } from 'src/lib';

@Injectable()
export class PageSinConcretoService implements OnModuleInit {
  private logger: Logger = new Logger('PAGE-SIN-CONCRETO');

  onModuleInit() {
    this.logger.debug('Init module');
    this.init();
  }

  async init() {
    for (let index = 0; index < 1000; index++) {
      this.logger.warn(`Intento de Like #${index + 1}`);
      const isVote = await this.webScraping();
      this.logger.verbose(
        isVote ? `Se consiguio el like` : 'No se consiguio like',
      );
      await sleep(1);
    }
  }

  async webScraping() {
    const webDriver = new SeleniumWebdriver();
    await sleep(1);
    try {
      await webDriver.startDriver(false);
      await sleep(2);
      await webDriver.getUrl(
        'https://premiosinconcreto.com/contest/premios-inconcreto/',
      );
      await sleep(3);
      const button = await webDriver.buscar_xpath(
        '/html/body/div[1]/div/main/div/div/div/div[2]/ul/li[8]/div/div[5]/form/input[3]',
      );
      button.click();
      await sleep(6);
      webDriver.stopDriver();
      return true;
    } catch (e) {
      this.logger.error(e);
      webDriver.stopDriver();
      return false;
    }
  }
}
