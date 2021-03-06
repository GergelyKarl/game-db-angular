import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { APIResponse, Game } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getGamesList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }
}
