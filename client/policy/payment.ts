interface TypePaymentType {
  [key: string]: string;
}

export const PaymentType: TypePaymentType = {
  COMPLETED: 'PaymentCompleted',
  PENDING: 'PaymentPending',
  REFUND: 'PaymentRefunded',
};
