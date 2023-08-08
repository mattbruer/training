import Navbar from "@/components/nav/navbar";
import AllRecipes from "./AllRecipes";
import Link from "next/link";
import Auth from "@/components/Auth";

const todos = [
  "Food card should link to a page where name/desc can be edited instead of the external link",
  "cards should be the same size as the photo gallery",
  "should be able to upload an image with the recipe",
  "time to figure out how to resize and upload to a bucket",
  "after dish is added, dispatch server response to redux store",
  "should say which user uploaded the recipe",
];
type RecipeType = {
  url: string;
  id: number;
  name: string;
  description: string;
};
const page = async () => {
  return (
    <div className="mb-16 pb-48 bg-slate-50">
      <Auth>
        <Navbar />
        <p className="text-4xl font-bold text-center mb-12 underline">
          {`Welcome to the food page`}
        </p>
        <Link href="/food/pantry">
          <div>The Pantry</div>
        </Link>

        <AllRecipes />
        <Link href="food/add-recipe">
          <button className="shadow border border-slate-300 p-5 rounded-2xl">
            Add recipe +
          </button>
        </Link>
      </Auth>
    </div>
  );
};

export default page;
