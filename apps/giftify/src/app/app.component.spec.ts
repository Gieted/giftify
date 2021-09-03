import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListComponent } from './list/list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ListComponent, ListItemComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'giftify'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('giftify');
  });

});
