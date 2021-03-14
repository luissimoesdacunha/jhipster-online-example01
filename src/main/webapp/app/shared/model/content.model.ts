import { IDocument } from 'app/shared/model/document.model';

export interface IContent {
  id?: number;
  dataContentType?: string;
  data?: any;
  document?: IDocument;
}

export const defaultValue: Readonly<IContent> = {};
