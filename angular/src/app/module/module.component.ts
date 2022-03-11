import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../interfaces/module';
import { ModuleService } from '../services/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  module: Module | null = null;

  constructor(
    private route: ActivatedRoute,
    private ms: ModuleService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ms.getById(Number(id))
      .subscribe((module: Module) => {
        this.module = module;
      })
  }

}
