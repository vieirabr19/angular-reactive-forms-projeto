import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, startWith } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

export interface LoadableState<T> {
  loading: boolean;
  dados: T | null;
  error: string | null;
}

/**
 * Converte um Observable<T> em um Signal<LoadableState<T>>
 * com estados automáticos: loading, success e error.
 */
export function toLoadableSignal<T>(source$: Observable<T>) {
  const initialState: LoadableState<T> = { loading: true, dados: null, error: null };

  return toSignal(
    source$.pipe(
      map(dados => ({ loading: false, dados, error: null })),
      startWith(initialState),
      catchError((err): Observable<LoadableState<T>> => of({
          loading: false,
          dados: null,
          error: err?.message || 'Erro ao carregar dados!',
        })
      )
    ),
    { initialValue: initialState }
  );
}