import { HydratedDocument, Schema, model } from 'mongoose';

type CategoryInfos = {
  name: string;
};

export type TCategory = HydratedDocument<CategoryInfos>;

const CategorySchema = new Schema<TCategory>({
  name: {
    type: String,
    required: true,
  },
});

const Category = model<TCategory>('Category', CategorySchema);

export default Category;
