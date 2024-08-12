import { StaticImageData } from "next/image";
import {
  BoatLogo,
  FirstVideo,
  ItcLogo,
  LakmeLogo,
  NextVideo,
  PosterImage,
  ProductOne,
  ProductTwo,
  ThirdVideo,
  TitanLogo,
} from "../../public/images"; // Assuming these images exist
import { AdThree } from "../videos/";
import AdTwo from "../videos/ad-2.mp4";
export type ImagePostTypes = {
  brandLogo: StaticImageData;
  brandName: string;
  lastSaveDate: string;
  activeStatus: string;
  postImage: StaticImageData;
  postDescription: string;
};

const ImagePosts: ImagePostTypes[] = [
  {
    brandLogo: LakmeLogo,
    brandName: "Lakme",
    lastSaveDate: "28 Jul 2024",
    activeStatus: "Active Status",
    postImage: PosterImage,
    postDescription:
      "Discover our new makeup collection with vibrant colors and long-lasting wear.",
  },
  {
    brandLogo: LakmeLogo,
    brandName: "Lakme",
    lastSaveDate: "28 Jul 2024",
    activeStatus: "Active Status",
    postImage: PosterImage,
    postDescription:
      "Discover our new makeup collection with vibrant colors and long-lasting wear.",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postImage: ProductOne,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
  },
  {
    brandLogo: BoatLogo,
    brandName: "Boat earbuds",
    lastSaveDate: "Feb 20, 2024",
    activeStatus: "Active Status",
    postImage: ProductTwo,
    postDescription:
      "Step into comfort and style with our new line of sports shoes.",
  },
];

export type VideoPostTypes = {
  brandLogo: StaticImageData;
  brandName: string;
  lastSaveDate: string;
  activeStatus: string;
  postVideo: string;
  postDescription: string;
};

const VideoPosts: VideoPostTypes[] = [
  {
    brandLogo: LakmeLogo,
    brandName: "Lakme",
    lastSaveDate: "28 Jul 2024",
    activeStatus: "Active Status",
    postVideo: FirstVideo,
    postDescription:
      "Discover our new makeup collection with vibrant colors and long-lasting wear.",
  },
  {
    brandLogo: LakmeLogo,
    brandName: "Lakme",
    lastSaveDate: "28 Jul 2024",
    activeStatus: "Active Status",
    postVideo: FirstVideo,
    postDescription:
      "Discover our new makeup collection with vibrant colors and long-lasting wear.",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postVideo: AdThree,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
  },
  {
    brandLogo: ItcLogo,
    brandName: "Itc shoes of the Year",
    lastSaveDate: "20 Feb 2024",
    activeStatus: "Active Status",
    postVideo: NextVideo,
    postDescription:
      "Step into comfort and style with our new line of sports shoes.",
  },
];

export type MixedPostTypes = {
  brandLogo: StaticImageData;
  brandName: string;
  lastSaveDate: string;
  activeStatus: string;
  postMedia: StaticImageData | string; // Can be either an image or video URL
  postDescription: string;
  card_type: "image_post" | "video_post";
};

const MixedPosts: MixedPostTypes[] = [
  {
    brandLogo: LakmeLogo,
    brandName: "Lakme",
    lastSaveDate: "28 Jul 2024",
    activeStatus: "Active Status",
    postMedia: FirstVideo,
    postDescription:
      "Discover our new makeup collection with vibrant colors and long-lasting wear.",
    card_type: "video_post",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postMedia: ProductOne,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
    card_type: "image_post",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postMedia: ThirdVideo,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
    card_type: "video_post",
  },
  {
    brandLogo: BoatLogo,
    brandName: "Boat earbuds",
    lastSaveDate: "Feb 20, 2024",
    activeStatus: "Active Status",
    postMedia: ProductTwo,
    postDescription:
      "Step into comfort and style with our new line of sports shoes.",
    card_type: "image_post",
  },
  {
    brandLogo: ItcLogo,
    brandName: "Itc shoes of the Year",
    lastSaveDate: "20 Feb 2024",
    activeStatus: "Active Status",
    postMedia: FirstVideo,
    postDescription:
      "Step into comfort and style with our new line of sports shoes.",
    card_type: "video_post",
  },
  {
    brandLogo: LakmeLogo,
    brandName: "Lakme",
    lastSaveDate: "28 Jul 2024",
    activeStatus: "Active Status",
    postMedia: PosterImage,
    postDescription:
      "Discover our new makeup collection with vibrant colors and long-lasting wear.",
    card_type: "image_post",
  },
  {
    brandLogo: LakmeLogo,
    brandName: "Lakme",
    lastSaveDate: "28 Jul 2024",
    activeStatus: "Active Status",
    postMedia: NextVideo,
    postDescription:
      "Discover our new makeup collection with vibrant colors and long-lasting wear.",
    card_type: "video_post",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postMedia: ProductOne,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
    card_type: "image_post",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postMedia: ProductOne,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
    card_type: "image_post",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postMedia: ProductOne,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
    card_type: "image_post",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postMedia: ThirdVideo,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
    card_type: "video_post",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postMedia: ProductOne,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
    card_type: "image_post",
  },
  {
    brandLogo: TitanLogo,
    brandName: "Titan",
    lastSaveDate: "25 Jul 2024",
    activeStatus: "Active Status",
    postMedia: ThirdVideo,
    postDescription:
      "Introducing our latest handbag line, combining luxury with functionality.",
    card_type: "video_post",
  },
  {
    brandLogo: BoatLogo,
    brandName: "Boat earbuds",
    lastSaveDate: "Feb 20, 2024",
    activeStatus: "Active Status",
    postMedia: ProductTwo,
    postDescription:
      "Step into comfort and style with our new line of sports shoes.",
    card_type: "image_post",
  },
  {
    brandLogo: ItcLogo,
    brandName: "Itc shoes of the Year",
    lastSaveDate: "20 Feb 2024",
    activeStatus: "Active Status",
    postMedia: NextVideo,
    postDescription:
      "Step into comfort and style with our new line of sports shoes.",
    card_type: "video_post",
  },
];

export { ImagePosts, VideoPosts, MixedPosts };
