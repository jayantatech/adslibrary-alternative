import React from "react";
import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";
import { StaticImageData } from "next/image";
type MixedPostTypes = {
  cardData: {
    brandLogo: StaticImageData;
    brandName: string;
    lastSaveDate: string;
    activeStatus: string;
    postMedia: StaticImageData | string; // Can be either an image or video URL
    postDescription: string;
    card_type: "image_post" | "video_post";
  };
};
const CardsComponent = ({ cardData }: MixedPostTypes) => {
  return (
    <>
      {cardData.card_type === "image_post" ? (
        <div className=" w-auto h-auto mb-4  break-inside-avoid flex items-center justify-center">
          <ImageCard
            key={cardData.brandName}
            brandLogo={cardData.brandLogo}
            brandName={cardData.brandName}
            lastSaveDate={cardData.lastSaveDate}
            activeStatus={cardData.activeStatus}
            postImage={cardData.postMedia as StaticImageData}
            postDescription={cardData.postDescription}
          />
        </div>
      ) : null}

      {cardData.card_type === "video_post" ? (
        <div className=" w-auto h-auto mb-4 break-inside-avoid flex items-center justify-center">
          <VideoCard
            key={cardData.brandName}
            brandLogo={cardData.brandLogo}
            brandName={cardData.brandName}
            lastSaveDate={cardData.lastSaveDate}
            activeStatus={cardData.activeStatus}
            postVideo={cardData.postMedia as string}
            postDescription={cardData.postDescription}
          />
        </div>
      ) : null}
    </>
  );
};

export default CardsComponent;
