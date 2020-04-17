import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsContainerComponent } from './hosts-container.component';

describe('HostsContainerComponent', () => {
  let component: HostsContainerComponent;
  let fixture: ComponentFixture<HostsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
