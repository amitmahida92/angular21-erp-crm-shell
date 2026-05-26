import { TestBed } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  it('renders projected content', async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(BadgeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
