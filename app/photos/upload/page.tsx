import Auth from "@/components/Auth";
import PhotoUpload from "@/components/PhotoUpload";
import SocketWrap from "@/components/SocketWrap";

const page = () => {
  return (
    <Auth>
      <SocketWrap>
        <PhotoUpload />
      </SocketWrap>
    </Auth>
  );
};

export default page;
