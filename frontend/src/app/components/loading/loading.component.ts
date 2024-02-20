import { Component } from '@angular/core';
import { LoadingService } from '../../service/loading.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  public constructor(private loadingService: LoadingService) {}

  public isLoading(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }
}
