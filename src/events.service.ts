import { Injectable } from '@nestjs/common';
import { Event } from './event.entity';
import { CreateEventDto } from './create-event.dto';

@Injectable()
export class EventsService {
  private events: Event[] = [];
  private nextId = 1;

  findAll(): Event[] {
    return this.events;
  }

  create(dto: CreateEventDto): Event {
    const event = { id: this.nextId++, ...dto };
    this.events.push(event);
    return event;
  }

  delete(id: number) {
    this.events = this.events.filter(e => e.id !== id);
  }
}
