import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editlead',
  templateUrl: './editlead.component.html',
  styleUrls: ['./editlead.component.scss']
})
export class EditleadComponent implements OnInit {

    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;
    selected = 'scheduled';
    source = 'lead';
    owner = 'raj';

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
	      .pipe(
	        startWith(''),
	        map(value => this._filter(value))
	      );
    }

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    
	addActivity() {
        const dialogRef = this.dialog.open(AddActivityComponent, {
            height: '500px',
            width: '800px'
        });
    }

}

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./editlead.component.scss']
})

export class AddActivityComponent implements OnInit {

    appointmentForm: FormGroup;
    title: FormControl;
    fromdate: FormControl;
    todate: FormControl;
    errors: any;
    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;

    constructor() { }

    ngOnInit() {
        this.addAppointmentControls();
        this.addAppointmentForm();
        this.filteredOptions = this.myControl.valueChanges
	      .pipe(
	        startWith(''),
	        map(value => this._filter(value))
	      );
    }

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

	addAppointmentControls() { 
	    this.title = new FormControl('', Validators.required);
	    this.fromdate = new FormControl('', Validators.required);
	    this.todate = new FormControl('', Validators.required);
	}

	addAppointmentForm() { 
	    this.appointmentForm = new FormGroup({
	         title: this.title,
	         fromdate: this.fromdate,
	         todate: this.todate,
	    });  
	}
}