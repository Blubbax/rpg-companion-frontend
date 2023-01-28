import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditModeService {

  private editModeValue = false;

  public editMode: Observable<boolean>;
  private editModeSubject: BehaviorSubject<any>;

  constructor() {
    this.editModeSubject = new BehaviorSubject<boolean>(this.editModeValue);
    this.editMode = this.editModeSubject.asObservable();
  }

  setEditMode(activation: boolean) {
    this.editModeValue = activation;
    this.editModeSubject.next(this.editModeValue)
  }

  toggleEditMode() {
    this.editModeValue = !this.editModeValue;
    this.editModeSubject.next(this.editModeValue)
  }
}
