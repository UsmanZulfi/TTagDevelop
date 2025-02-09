import { Category } from "@/website/lib/types/wooCommerceTypes";
import { Dispatch, SetStateAction } from "react";
import { GoSearch } from "react-icons/go";
import styles from "./CategoryFilter.module.css";

interface CategoryFilterProps {
  categories: Category[];
  setSearchResult: Dispatch<SetStateAction<Category[]>>;
}

export const CategoryFilter = ({
  categories,
  setSearchResult,
}: CategoryFilterProps) => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) return setSearchResult(categories);

    const resultArray = categories.filter((category) => {
      const title = category.name.toLowerCase();
      return title.includes(e.target.value.toLowerCase());
    });
    setSearchResult(resultArray);
  }

  return (
    <form className={styles.cat__searchbox} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search State"
        onChange={handleSearchChange}
      />

      <button type="button">
        <GoSearch />
      </button>
    </form>
  );
};
