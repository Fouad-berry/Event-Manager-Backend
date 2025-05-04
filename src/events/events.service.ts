import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  private events: Event[] = [];
  private nextId = 1;

  create(createEventDto: CreateEventDto): Event {
    const event: Event = {
      id: this.nextId++,
      ...createEventDto,
    };
    this.events.push(event);
    return event;
  }

  findAll(): Event[] {
    return this.events;
  }

  remove(id: number): void {
    this.events = this.events.filter(event => event.id !== id);
  }
}
