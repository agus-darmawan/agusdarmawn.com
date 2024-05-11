import { ReactNode } from 'react';

export interface ILink {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface IListLinks extends Array<ILink> {}
