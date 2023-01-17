import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

interface ReqBody {
  currenState: number;
  stateCode: string[];
}

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('next-path')
  getTransition(
    @Body() reqBody: ReqBody,
  ): { from: number; to: number } | Error {
    const { currenState, stateCode } = reqBody;
    return this.appService.getNextState(currenState, stateCode);
  }
}
