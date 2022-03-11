import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filiere } from '../interfaces/filiere';
import { FiliereService } from '../services/filiere.service';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.css']
})
export class FilieresComponent implements OnInit {
  filieres: Filiere[] = [];

  constructor(
    private fs: FiliereService,
    private router: Router
    ) { }

  message: string = "";

  private clearMessage() {
    setTimeout(() => this.message = "", 5000);
  }

  ngOnInit(): void {
    this.fs.getAll()
      .subscribe((filieres: Filiere[]) => {
        this.filieres = filieres
      });
  }

  onView(id?: number) {
    this.router.navigate(['/filieres', id])
  }

  onEdit(id?: number) {
    this.router.navigate(['/filiere-form', id])
  }
  
  onDelete(id?: number) {
    if (id) {
      this.fs.delete(id)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            console.log(err.message);
            this.message = `Suppression impossible 
            (une filière contenant de modules ne peut être supprimée)`;
            this.clearMessage();
            return [];
          })
        )
        .subscribe(() => {
          this.filieres = this.filieres.filter(filiere => filiere.id !== id);
        })
    }
  }

}
