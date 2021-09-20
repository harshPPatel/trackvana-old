import { Injectable } from '@nestjs/common';

@Injectable()
export class EventEmitter2 {
  public emit(eventName: string, event): boolean {
    return true;
  }
}
