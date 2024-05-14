import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Packages
import { Observable, Subject, catchError, of, switchMap, takeUntil } from 'rxjs';
// Service
import { ApiService } from '../api.service';
// Types
import { PackResponse } from '../../types/pack-response.type';
import { CardResponse } from '../../types/card-response.type';
import { TypesResponse } from '../../types/types-response.types';

type FindAllParams = {
  text?: string;
  type: string;
  // page: string;
  // pageSize: string;
}

type FindAllResponse = {
  sets: PackResponse[];
}

type FindAllCardsResponse = {
  cards: CardResponse[];
}

@Injectable({
  providedIn: 'root'
})
export class MagicService extends ApiService {
  private creatureCards: CardResponse[] = [];

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  // GET TYPES
  findAllTypes() {
    return super.get<TypesResponse>("/types");
  }

  // GET PACKS
  findAll({
    // page,
    // pageSize,
    type,
    text,
  }: FindAllParams) {
    const name = text ? `${type}|${text}` : type;

    // Obs: The API does not total_items, so i get all and then separate packs per page using ngx-pagination
    return super.get<FindAllResponse>("/sets", {
      name,
      // page,
      // pageSize,
    });
  }

  // GET CARDS - PACK OPENING
  private fetchCards(setId: string): Observable<FindAllCardsResponse> {
    return super.get<FindAllCardsResponse>(`/sets/${setId}/booster`);
  }

  getCreatureCards(setId: string): Observable<FindAllCardsResponse[]> {
    return this.findAllCards(setId, []);
  }


  public findAllCards(setId: string, accumulatedCards: any[]): Observable<any[]> {
    // Create a Subject to cancel the broadcast
    const cancel$ = new Subject<void>();

    return this.fetchCards(setId).pipe(
      switchMap((response) => {
        const creatureCards = response.cards.filter(card => {
          const hasCreature = card.types.includes('Creature');
          const isNotExists = this.creatureCards.every(c => c.originalText !== card.originalText);

          return hasCreature && isNotExists;
        });

        accumulatedCards = accumulatedCards.concat(creatureCards);

        if (accumulatedCards.length >= 30) {
          cancel$.next(); // Emitting a signal to cancel the broadcast
          cancel$.complete(); // Completing the Subject
          return of(accumulatedCards.slice(0, 30));
        } else {
          return this.findAllCards(setId, accumulatedCards).pipe(
            takeUntil(cancel$) // Canceling the emission when the Subject emits a signal
          );
        }
      }),
    );
  }
}
