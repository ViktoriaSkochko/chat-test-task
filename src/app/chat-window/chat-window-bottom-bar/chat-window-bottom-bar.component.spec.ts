import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWindowBottomBarComponent } from './chat-window-bottom-bar.component';

describe('ChatWindowBottomBarComponent', () => {
  let component: ChatWindowBottomBarComponent;
  let fixture: ComponentFixture<ChatWindowBottomBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWindowBottomBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWindowBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
