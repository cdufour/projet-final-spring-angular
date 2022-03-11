import { Filiere } from "./filiere";

type EntityId = {
  id: number;
}

export interface ModulePost {
  id?: number;
  libelle: string;
  dateDebut: string; //"2022-01-01",
  dateFin: string;
  formateur: EntityId | null;
  filiere: EntityId;
}

export interface Module {
  id?: number;
  libelle: string;
  dateDebut: string;
  dateFin: string;
  formateur?: null;
  filiere: Filiere;
}
