import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private readonly URL = 'https://api.themoviedb.org/3/';
  private readonly API_KEY = '951c4e8a331e2637479312da880d05c8';

  constructor(private httpClient: HttpClient) { }

  get(path: string): Promise<any[]> {
    const params: HttpParams = new HttpParams()
      .append('api_key', this.API_KEY);

      // this.URL + path + '?api_key=' + this.API_KEY
    return this.httpClient.get<any[]>(`${this.URL}${path}`, {params}).toPromise();
  }
}
