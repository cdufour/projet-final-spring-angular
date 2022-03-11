import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '../interfaces/module';
import { ModuleService } from '../services/module.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  modules: Module[] = [];

  constructor(
    private ms: ModuleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ms.getAll()
      .subscribe((modules: Module[]) => {
        this.modules = modules;
      })
  }

  onView(id?: number) {
    this.router.navigate(['/modules', id])
  }

  onEdit(id?: number) {
    this.router.navigate(['/module-form', id])
  }

  onDelete(id?: number) {
    if (id) {
      this.ms.delete(id)
      .subscribe(res => {
        console.log(res);
        this.modules = this.modules.filter(module => module.id !== id);
      })
    }

  }


}
