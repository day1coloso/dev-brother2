import { TypeAsset } from '@/types/asset';

export interface TypeBanner {
  type: string;
  code: string | null;
  createdAt: Date | null;
  flags: number;
  hideAt: Date | null;
  id: number;
  isPublicTitle: number;
  sequence: number;
  showAt: Date | null;
  site: string;
  state: string;
  subtitle: string | null;
  targetUrl: string;
  targetWindow: string;
  title: string;
  updatedAt: Date | null;
  assets: Record<string, Array<TypeAsset>>;
}
