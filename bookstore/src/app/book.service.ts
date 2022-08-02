import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private _httpClient: HttpClient) { }

  private url = "http://localhost:3000/Book";

  getBooks(){

    return this._httpClient.get<Book[]>(this.url);

  }


}
