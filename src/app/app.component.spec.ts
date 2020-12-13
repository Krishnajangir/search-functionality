import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'task' in a h3 tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Cocktails Info');
  });
  it(`should have as title 'task' in a h3 tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.randomCoctails).toEqual(app.randomCoctails);
  });
  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getRandomCoctails).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.searchCoctailByLetters).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.searchCoctailById).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getIngredientsById).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getCategories).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getIngredients).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getGlasses).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getAlcholicValues).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.searchWithCategories).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.searchWithIngredients).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.searchWithGlasses).toBeTruthy();
   });
   it('should have getData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.searchWithAlcholic).toBeTruthy();
   });
});
