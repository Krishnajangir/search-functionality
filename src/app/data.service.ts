import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  public getRandomCoctails(): Observable<{}>   {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  }
  public searchCoctailByLetters(name : string): Observable<{}> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?" + name)
  }
  public searchCoctailById(id: number): Observable<{}> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
  }
  public getIngredientsById(id:number) : Observable<{}>{
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=" + id)
  }
  public getCategories() : Observable<{}> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
  }
  public getIngredients() : Observable<{}> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
  }
  public getGlasses() : Observable<{}> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");
  }
  public getAlcholicValues() : Observable<{}> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list");
  }
  // 
  public searchWithCategories(name) : Observable<{}> {
    name = decodeURIComponent(name);
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + name);
  }
  public searchWithIngredients(name: string) : Observable<{}> {
    name = decodeURIComponent(name);
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name);
  }
  public searchWithGlasses(name: string) : Observable<{}> {
    name = decodeURIComponent(name);
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + name);
  }
  public searchWithAlcholic(name : string) : Observable<{}> {
    name = decodeURIComponent(name);
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + name);
  }
}
