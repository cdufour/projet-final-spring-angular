import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filiere } from '../interfaces/filiere';
import { Module, ModulePost } from '../interfaces/module';
import { FiliereService } from '../services/filiere.service';
import { ModuleService } from '../services/module.service';

interface Formateur { 
  id: number;
  nom: string;
  prenom: string;
};

@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.css']
})
export class ModuleFormComponent implements OnInit {
  module: ModulePost = {
    libelle: "",
    dateDebut: "2022-01-01",
    dateFin: "2022-01-05",
    filiere: {id: 1},
    formateur: null
  }

  filieres: Filiere[] = [];

  formateurs: Formateur[] = [
    {id: 1, nom: "Baggio", prenom: "Roberto"},
    {id: 2, nom: "Truc", prenom: "Machin"},
    {id: 3, nom: "Mohammoud", prenom: "Jean"},
  ];

  actionText: 'Ajouter' | 'Modifier' = 'Ajouter';

  constructor(
    private ms: ModuleService,
    private fs: FiliereService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fs.getAll()
      .subscribe((filieres: Filiere[]) => {
        this.filieres = filieres;
        if (this.module.filiere && this.filieres[0].id) {
          this.module.filiere.id = this.filieres[0].id;
        }

        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
          this.actionText = 'Modifier'
          this.ms.getById(Number(id))
            .subscribe((module: Module) => {
              this.module.id = module.id;
              this.module.libelle = module.libelle;
              this.module.dateDebut = module.dateDebut;
              this.module.dateFin = module.dateFin;
    
              if (module.filiere.id) {
                this.module.filiere.id = module.filiere.id;
              }
            })
        }
      })
  }

  handleSubmit() {
    if (this.module.id) {
      console.log('Updating module...');
      this.ms.update(this.module)
        .subscribe(() => {
          this.router.navigate(['/modules']);
        })
    } else {
      console.log('Adding module...');
      this.ms.post(this.module)
        .subscribe(() => {
          this.router.navigate(['/modules']);
        })
    }
  }

}
