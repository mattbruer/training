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
    <Auth>
      <Navbar />
      <div className="mb-16 pb-48 p-5 text-white ">
        <p className="text-4xl font-bold text-center mb-12 underline">
          {`Welcome to the food page`}
        </p>
        <Link href="/food/pantry">
          <div>The Pantry</div>
        </Link>
        <Link href="/food/restaurants">
          <p>Restaurant page?</p>
        </Link>

        <Link href="food/add-recipe">
          <button className="m-5 border border-slate-300 p-5 bg-slate-800 text-white rounded-2xl">
            Add recipe +
          </button>
        </Link>

        <AllRecipes />
      </div>
    </Auth>
  );
};

export default page;
