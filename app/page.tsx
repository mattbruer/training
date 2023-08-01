import Auth from "@/components/Auth";
import { store } from "@/store";
import { me } from "@/store/authSlice";
import Redirect from "./Redirect";

export default function Home() {
  return (
    <Auth>
      <Redirect />
    </Auth>
  );
}
