import { Component, OnInit, ViewChild} from '@angular/core';
import {Observable, Observer} from 'rxjs';
// fornulario input
import {FormBuilder, FormGroup} from '@angular/forms';
// tabla
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export interface ExampleTab {
  label: string;
  content: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'ngx-notpresu',
  templateUrl: './notpresu.component.html',
  styleUrls: ['./notpresu.component.scss']
})

/**
 * @title Tab group with asynchronously loading tab contents
 */

export class NotpresuComponent implements OnInit{
  asyncTabs: Observable<ExampleTab[]>;
  displayedColumns : string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  options: FormGroup;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  constructor(fb: FormBuilder) {

    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'always',
    });
    
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'TareasClas', content: 'clasificadores'},
          {label: 'Cuentas Contables', content: 'Content 2'},
          {label: 'Bienes y / o Servicios', content: 'Content 3'},
          {label: 'Requerimientos', content: 'Content 3'},
          {label: 'Ordenes', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 22, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 25, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];




