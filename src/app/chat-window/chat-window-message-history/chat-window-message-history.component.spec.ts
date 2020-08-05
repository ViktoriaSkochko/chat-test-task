import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWindowMessageHistoryComponent } from './chat-window-message-history.component';

describe('ChatWindowMessageHistoryComponent', () => {
  let component: ChatWindowMessageHistoryComponent;
  let fixture: ComponentFixture<ChatWindowMessageHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWindowMessageHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWindowMessageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
