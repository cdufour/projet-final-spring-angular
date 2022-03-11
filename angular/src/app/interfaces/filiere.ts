import { Module } from "./module";

export interface Filiere {
  id?: number;
  libelle: string;
  modules?: Module[];
  stagiaires: [];
}
