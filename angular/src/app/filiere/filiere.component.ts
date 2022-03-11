import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filiere } from '../interfaces/filiere';
import { FiliereService } from '../services/filiere.service';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {
  filiere: Filiere | null = null;

  constructor(
    private route: ActivatedRoute,
    private fs: FiliereService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fs.getById(Number(id))
      .subscribe((filiere: Filiere) => {
        this.filiere = filiere;
      })
  }

}
