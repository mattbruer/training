import Auth from "@/components/Auth";
import PhotoUpload from "@/components/PhotoUpload";

const page = () => {
  return (
    <Auth>
      <PhotoUpload />
    </Auth>
  );
};

export default page;
