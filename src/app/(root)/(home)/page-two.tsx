import ContentWrapper from "@/components/ContentWrapper";
import ImageCard from "@/components/ImageCard";
import VideoCard from "@/components/VideoCard";
import { ImagePosts, VideoPosts } from "../../../../public/contents";

const Home = () => {
  return (
    <div className="px-4 py-10 bg-slate-100 w-full h-full min-h-screen max-md:flex justify-center items-start">
      <ContentWrapper>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-4 justify-items-center">
          {ImagePosts.map((post) => (
            <ImageCard
              brandLogo={post.brandLogo}
              brandName={post.brandName}
              lastSaveDate={post.lastSaveDate}
              activeStatus={post.activeStatus}
              postImage={post.postImage}
              postDescription={post.postDescription}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-4 justify-items-center mt-14">
          {VideoPosts.map((post) => (
            <VideoCard
              brandLogo={post.brandLogo}
              brandName={post.brandName}
              lastSaveDate={post.lastSaveDate}
              activeStatus={post.activeStatus}
              postVideo={post.postVideo}
              postDescription={post.postDescription}
            />
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Home;
