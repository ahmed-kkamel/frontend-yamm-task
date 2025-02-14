import { ReactNode } from "react";

export interface TableColumn<T> {
  readonly header: string;
  readonly key: keyof T | string;
  readonly render?: (row: T) => ReactNode;
}

export interface TableProps<T> {
  readonly data: T[];
  readonly columns: readonly TableColumn<T>[];
  readonly totalItems: number;
  readonly idKey?: keyof T;
}
