import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { ContactForm } from 'src/app/Models/ContactForm';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + environment.APIKey,
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private httpClient: HttpClient) { }

  public SendContactForm(contactForm: ContactForm): any {
    let url: string = environment.FBCBaseApiUrl + 'Communication/SendEmailContactForm';

    return this.httpClient.post(url, contactForm, httpOptions)
      .pipe(
        catchError(this.handleError('Something', contactForm))
      )
    }
    
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
    
        return of(result as T);
      };
    }
    
    private log(message: string) {
      console.log(message);
    }
}
