import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'formatDate'})
export class FormateDatePipe implements PipeTransform {
  transform(date: string | Date): string {
    try {
      const dt = new Date(date);

      return Intl.DateTimeFormat('pt-br').format(dt);
    } catch {
      return "No date"
    }
  }
}
