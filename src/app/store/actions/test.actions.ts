import { Action } from '@ngrx/store';

export const EDIT_TEXT = 'EDIT_TEXT';

export class EditText implements Action {
  public readonly type = EDIT_TEXT;

  constructor(public payload: string) {}
}

export type All = EditText;
