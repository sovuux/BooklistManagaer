import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private searchQuerySubject = new BehaviorSubject<string>('')
  searchQuery$ = this.searchQuerySubject.asObservable()

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query)
  }

  getSearchQuery(): string {
    return this.searchQuerySubject.getValue()
  }
}
