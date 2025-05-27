import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  imports: [AsyncPipe],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit{

  
  public loading$!: Observable<boolean>;
  
  public constructor(
    private loadingService: LoadingService
  ) {
    
  }
  ngOnInit(): void {
    this.loading$ = this.loadingService.asObservable();
  }

}
