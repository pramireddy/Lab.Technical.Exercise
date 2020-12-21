import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IAlbum } from '../core/models/Album';
import { LoggerService, ScenariosService } from '../core/services';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  displayedColumns: string[] = ['name', 'artist', 'label', 'type', 'stock', 'update', 'delete'];
  dataSource: IAlbum[] = [];
  filteredDataSource = new MatTableDataSource<IAlbum>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filter: string = '';

  constructor(private scenarioService: ScenariosService, private logger: LoggerService) {
  }

  ngOnInit(): void {
    this.fectechScenarios();
  }

  private fectechScenarios() {
    this.dataSource = this.getAlbums();
    this.filteredDataSource.data = this.dataSource;
    this.filteredDataSource = new MatTableDataSource(this.dataSource);
    this.filteredDataSource.paginator = this.paginator;
    this.filteredDataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    this.filteredDataSource.paginator = this.paginator;
    this.filteredDataSource.sort = this.sort;
  }

  applyFilter() {
    if (!this.dataSource)
      return;
    // let lowerFilter = this.filter.toLowerCase();
    // this.filteredDataSource.data = this.dataSource.filter(x =>
    //   this.filter === '' ||
    //   (x.scenarioId.toString().toLowerCase().includes(lowerFilter) ||
    //     // x.name.toLowerCase().includes(lowerFilter) ||
    //     x.surname.toLowerCase().includes(lowerFilter) ||
    //     x.forename.toLowerCase().includes(lowerFilter) ||
    //     x.userId.toLowerCase().includes(lowerFilter))
    // );
  }

  public redirectToDetails = (id: number) => {
    console.log(id)
  }
  public redirectToUpdate = (id: number) => {
    console.log(id)
  }
  public redirectToDelete = (id: number) => {
    console.log(id)
  }

  clearFilter() {
    this.filter = '';
    this.applyFilter();
  }

  private getAlbums(): IAlbum[] {
    return [
      {id:111,name:'Album1',artist:'artist111',label:'Label111',type:'CD',stock:111},
      {id:222,name:'Album2',artist:'artist222',label:'Label222',type:'Vinyl',stock:222}
    ]
  }
}