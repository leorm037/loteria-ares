import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { ToastEvent } from './../../interface/toast-event.interface';
import { ToastService } from './../../service/toast.service';
import { ToastComponent } from './../toast/toast.component';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [ToastComponent],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterComponent implements OnInit {

  public currentToasts: ToastEvent[] = [];

  public constructor(
    private toastService: ToastService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.subscribeToToasts();
  }

  private subscribeToToasts(): void {
    this.toastService.toastEvents$.subscribe({
      next: (toast) => {
        const currentToast: ToastEvent = {
          type: toast.type,
          titulo: toast.titulo,
          mensagem: toast.mensagem
        };

        this.currentToasts.push(currentToast);
        this.cdr.detectChanges();
      }
    });
  }

  public dispose(index: number): void {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }

}
