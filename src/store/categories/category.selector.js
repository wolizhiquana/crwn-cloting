import { createSelector } from "reselect";

export const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const getCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, categoryObj) => {
      const { title, items } = categoryObj;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
