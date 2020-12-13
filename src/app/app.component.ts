import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Cocktails Info';
  constructor(private dataService: DataService) { }
  randomCoctails: any = [];
  listOfIngredients: any = [];
  listOfGlasses: any = [];
  listOfCategories: any = [];
  listOfAlcoholic: any = [];
  subscribe: Subscription;
  ngOnInit(): void {
    this.getRandomCoctailDetails();
    this.getAlcholicValues();
    this.getGlassesValues();
    this.getIngredientsValues();
    this.getCategoriesValues();
  }
  getRandomCoctailDetails() {
    this.subscribe = this.dataService.getRandomCoctails().subscribe((response) => {
      if (response) {
        this.randomCoctails = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getSearchedCoctails(name) {
    this.subscribe = this.dataService.searchCoctailByLetters(name).subscribe((response) => {
      if (response) {
        this.randomCoctails = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getCoctailaccToId(id) {
    this.subscribe = this.dataService.searchCoctailById(id).subscribe((response) => {
      if (response) {
        this.randomCoctails = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getSearchedIngredients(id) {
    this.subscribe = this.dataService.getIngredientsById(id).subscribe((response) => {
      if (response) {
        this.listOfIngredients = response['ingredients'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getSearchedCoctailWithAlcoholic(name) {
    this.subscribe = this.dataService.searchWithAlcholic(name).subscribe((response) => {
      if (response) {
        this.randomCoctails = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getIngredientsValues() {
    this.subscribe = this.dataService.getIngredients().subscribe((response) => {
      if (response) {
        this.listOfIngredients = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getGlassesValues() {
    this.subscribe = this.dataService.getGlasses().subscribe((response) => {
      if (response) {
        this.listOfGlasses = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getCategoriesValues() {
    this.subscribe = this.dataService.getCategories().subscribe((response) => {
      if (response) {
        this.listOfCategories = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getAlcholicValues() {
    this.subscribe = this.dataService.getAlcholicValues().subscribe((response) => {
      if (response) {
        this.listOfAlcoholic = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getSearchedCoctailWithGlasses(name) {
    this.subscribe = this.dataService.searchWithGlasses(name).subscribe((response) => {
      if (response) {
        this.randomCoctails = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getSearchedCoctailWithIngredients(name) {
    this.subscribe = this.dataService.searchWithIngredients(name).subscribe((response) => {
      if (response) {
        this.randomCoctails = response['drinks'];
      }
    }, error => {
      console.log('error' , error);
  })
  }
  getSearchedCoctailWithCategories(name) {
    this.subscribe = this.dataService.searchWithCategories(name).subscribe((response) => {
      if (response) {
        this.randomCoctails = response['drinks'];
      }
    }, error => {
        console.log('error' , error);
    })
  }
  searchItem(value) {
    let isAlcoholic = this.listOfAlcoholic.filter((val) => val.strAlcoholic === value);
    let isIngredients = this.listOfIngredients.filter((val) => val.strIngredient1 === value);
    let isCategories = this.listOfCategories.filter((val) => val.strCategory === value);
    let isGlasses = this.listOfGlasses.filter((val) => val.strGlass === value);

    if (value === "") {
      this.getRandomCoctailDetails();
    } else {
      if (isAlcoholic.length > 0 || isCategories.length > 0 || isGlasses.length > 0 || isIngredients.length > 0) {
        if (isAlcoholic.length > 0) {
          this.getSearchedCoctailWithAlcoholic(value)
        } else if (isCategories.length > 0) {
          this.getSearchedCoctailWithCategories(value)
        } else if (isGlasses.length > 0) {
          this.getSearchedCoctailWithGlasses(value);
        } else {
          this.getSearchedCoctailWithIngredients(value);
        }
      } else {
        switch (value) {
          case !isNaN(value): this.getCoctailaccToId(value); break;
          case value.length === 1: this.getSearchedCoctails('f=' + value); break;
          default: this.getSearchedCoctails('s=' + value); break;
        }
      }
    }
  }
  ngOnDestroy(): void {
     this.subscribe.unsubscribe();
  }
}
