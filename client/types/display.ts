import { TypeAsset } from '@/types/asset';

export enum DisplayItem {
  COURSE = 'course',
  PRODUCT = 'product',
  BANNER = 'banner',
}

export interface TypeDisplay {
  id: number;
  site: string;
  type: string;
  state: string;
  sequence: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  showAt: string;
  hideAt: string;
  children?: Array<TypeDisplay>;
}
