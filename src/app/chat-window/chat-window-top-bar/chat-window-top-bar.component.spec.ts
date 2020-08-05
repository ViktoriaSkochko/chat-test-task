import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWindowTopBarComponent } from './chat-window-top-bar.component';

describe('ChatWindowTopBarComponent', () => {
  let component: ChatWindowTopBarComponent;
  let fixture: ComponentFixture<ChatWindowTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWindowTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWindowTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
