export type TTransaction = {
  id: string
  name: string
  date: Date
  type: string
  amount: number
  createdAt: Date
  updatedAt: Date
  categoryId: string
  modalityId: string
  userId: string
  informationFixedId: string | null
}
