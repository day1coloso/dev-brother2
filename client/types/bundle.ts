// TODO: deprecated -> TypeProduct와 비교해 병합할 것.

export interface TypeBundle {
  id: number;
  site: string;
  type: string;
  state: string;
  flags: number;
  createdAt: string;
  updatedAt: string;
  code: string;
  publicTitle: string;
  subtitle: string;
  description: string;
  currency: string;
  listPrice: number;
  salePrice: number;
  taxFreeAmount: number;
  discountAmount: number;
  taxAmount: number;
  periodType: string;
  periodDuration: string | null;
  periodBeginAt: string | null;
  periodEndAt: string | null;
  showAt: string | null;
  hideAt: string | null;
  extras: {};
  sequence?: number;
  discountPercent?: string;
}
