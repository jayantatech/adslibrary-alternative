import { StaticImageData } from "next/image";
import {
  BoatLogo,
  ItcLogo,
  LakmeLogo,
  PosterImage,
  ProductOne,
  ProductTwo,
  TitanLogo,
} from "../../public/images"; // Assuming these images exist
import { AdOne, AdThree, AdTwo } from "../videos";

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
    postVideo: AdOne,
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
    postVideo: AdTwo,
    postDescription:
      "Step into comfort and style with our new line of sports shoes.",
  },
];

export { ImagePosts, VideoPosts };
