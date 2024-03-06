import { ExtendedLanguage } from '@/types/language';
import { TypeProduct } from '@/types/product';

export interface TypeVoucher {
  id?: number | null;
  site: string;
  state: string;
  flags?: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  voucherTemplateId: number | null;
  customerId: number | null;
  useBeginAt?: Date | null;
  useEndAt?: Date | null;
  voucherTemplate: TypeVoucherTemplate;
}

export interface TypeVoucherTemplateFilter {
  voucherTemplateId?: number;
  type: string;
  targetName: string;
  targetValue: string;
}

export interface TypeVoucherTemplate {
  id: number;
  code: string;
  title: string;
  publicDescription?: string;
  discount?: string;
  discountAmount: number;
  discountRate: number;
  maxDiscountAmount: number;
  minPaymentAmount: number;
  redeemBeginAt?: Date | null;
  redeemEndAt?: Date | null;
  periodDuration?: number | null;
  periodBeginAt?: Date | null;
  periodEndAt?: Date | null;
  voucherTemplateFilters: TypeVoucherTemplateFilter[];
  isRedeemed?: boolean;
  maxDiscountRate?: number;
  maxDiscountedPrice?: number;
}

export interface ExtendedVouchers {
  vouchers: TypeVoucher[];
}

export interface TypeVoucherInfo {
  title: string;
  policy: string[];
  downloadable: boolean;
  maxDiscountPrice?: number;
  voucherList: TypeVoucherTemplate[];
}

export interface TypeSortVoucherTemplates {
  salePrice: number;
  voucherTemplates: TypeVoucherTemplate[];
}

export interface VouchersInfo {
  id?: number | null;
  productId: number;
  discountAmount: number;
  discountTaxFreeAmount: number;
}

export interface TypeRedeemVoucherByCodes {
  redeemCode: string | string[];
  type: string;
}

export interface TypeGetVouchersByProduct extends ExtendedLanguage {
  product: TypeProduct;
  voucherType: string[];
}

export interface TypeGetRedeemedVoucher extends ExtendedLanguage {
  voucherTemplateIds: number[];
}

export interface TypeGetVouchers extends ExtendedLanguage {
  code: string[];
}
