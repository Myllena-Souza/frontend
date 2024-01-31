import { Injectable } from '@angular/core';
import { Observable, from, take, interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExemplosObservableService {

  constructor() { }

  getValores(): Observable<any> {
    const observable = new Observable((subscriber: { next: (arg0: number) => void; complete: () => void; }) => {
      const subscription = interval(1000)
        .pipe(
          take(100) 
        )
        .subscribe({
          next: (value: number) => {
            subscriber.next(value);
          },
          complete: () => {
            subscriber.complete();
          }
        });
  
      // Cancelar a assinatura ao limpar o observable
      return () => subscription.unsubscribe();
    });
  
    return observable;
  }

  
    //Este Observable emitirá cada valor do array, um de cada vez, 
    //na ordem em que aparecem no array.
    //O Observable emite o primeiro valor do array (1).
    //depois emite o segundo valor (2), e assim por diante.
    //O Observable completa.
    //Portanto, se você se inscrever neste Observable 
    //e registrar cada valor emitido, verá 1, 2, 3, 4, 5
    // registrado, nessa ordem.

}