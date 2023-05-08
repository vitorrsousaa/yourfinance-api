export type TransactionGetRequestDTO<T> = {
  id: string;
  [k: string]: T | unknown;
}
