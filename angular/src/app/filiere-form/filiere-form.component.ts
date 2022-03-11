import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filiere } from '../interfaces/filiere';
import { FiliereService } from '../services/filiere.service';

@Component({
  selector: 'app-filiere-form',
  templateUrl: './filiere-form.component.html',
  styleUrls: ['./filiere-form.component.css']
})
export class FiliereFormComponent implements OnInit {
  filiere: Filiere = {
    libelle: '',
    stagiaires: [],
    //modules: []
  }

  actionText: 'Ajouter' | 'Modifier' = 'Ajouter';

  constructor(
    private fs: FiliereService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.actionText = 'Modifier'
      this.fs.getById(Number(id))
        .subscribe((filiere: Filiere) => {
          this.filiere = filiere;
        })
    }
  }

  handleSubmit() {
    if (this.filiere.id) {
      console.log('Updating filière...');
      const { id, libelle } = this.filiere;
      const filiere: Filiere = { id, libelle, stagiaires: [] };
      this.fs.update(filiere)
        .subscribe(() => {
          this.router.navigate(['/filieres']);
        })
    } else {
      console.log('Adding filière...');
      this.fs.post(this.filiere)
        .subscribe(() => {
          this.router.navigate(['/filieres']);
        })
    }
  }

}
