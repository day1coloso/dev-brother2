'use client';

import { useEffect } from 'react';

import usePurchase from '@/hooks/client/usePurchase';
import { resetPurchaseStore, setPurchaseStore } from '@/store/purchase';
import { TypeGetProductOrders, TypeProduct, TypeProductBundle } from '@/types/product';

interface PurchaseProvider {
  bundleId: number | null;
  purchase?: TypeGetProductOrders;
}

const PurchaseProvider = ({ purchase, bundleId }: PurchaseProvider) => {
  const { redirectPrevPage } = usePurchase();

  const getOptionProduct = (bundle: TypeProductBundle[], bundleId: number | null) =>
    bundleId ? bundle.filter((bundle) => bundle.id === bundleId) : [];

  const getCourseProduct = (bundle: TypeProductBundle[], product: TypeProduct) => {
    return [product];
  };

  useEffect(() => {
    if (!purchase) return;
    const { product, impData, bundle, vouchers: usableVouchers, callbackUrl } = purchase;
    setPurchaseStore({
      impData,
      product,
      bundle,
      callbackUrl,
      usableVouchers,
      courseProduct: getCourseProduct(bundle, product),
      optionProduct: getOptionProduct(bundle, bundleId),
      isAllowVouchers: true,
      isBundle: false,
      isElective: false,
    });
  }, [purchase, redirectPrevPage, bundleId]);

  useEffect(() => {
    return () => resetPurchaseStore();
  }, []);

  return <></>;
};

export default PurchaseProvider;
