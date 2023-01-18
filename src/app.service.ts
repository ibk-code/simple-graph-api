// ------------ import external dependencies ------------
import { BadRequestException, Injectable } from '@nestjs/common';

// ----------- import internal dependencies -------------
import { paths } from './paths';

@Injectable()
export class AppService {
  /**
   * Get the next state transition handler
   * @param currentState
   * @param stateCode
   * @returns
   */
  getNextState(currentState: number, stateCode: string[]) {
    const supportedPaths: { from: number; to: number }[] | undefined =
      paths[stateCode.join('').toUpperCase()];

    if (!supportedPaths) {
      return new BadRequestException('Code not found');
    }

    return supportedPaths.find((item) => item.from === Number(currentState));
  }
}
