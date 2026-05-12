import type { Metadata } from "next";
import CategoryPage from "../../components/categories/CategoryPage";

export const metadata: Metadata = {
  title: "Categories | NITYAKHUSHI",
  description:
    "Explore all handcrafted product categories at NITYAKHUSHI — from handwoven bags and ceramic decor to artisan jewelry and traditional crafts.",
};

export default function CategoriesRoute() {
  return <CategoryPage />;
}
