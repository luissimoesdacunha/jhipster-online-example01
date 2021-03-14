import { IDocument } from 'app/shared/model/document.model';

export interface ICar {
  id?: number;
  model?: string;
  documents?: IDocument[];
}

export const defaultValue: Readonly<ICar> = {};
