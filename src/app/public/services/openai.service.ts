import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiUrl = 'https://api.openai.com/v1/';
  private apiKey = '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';
  
  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = { messages: [{ role: 'system', content: 'You are a user' }, { role: 'user', content: message }] };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
