import Image from "next/image";
import { HomeDownload, PersonOne } from "../../../public/images";
import ContentWrapper from "@/components/ContentWrapper";
import {
  PiArrowFatLineLeftFill,
  PiArrowFatLineRightFill,
} from "react-icons/pi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    image: PersonOne,
    text: "I love using Pulse! The results have been amazing and it's so easy to use.The results have been amazing and it's so easy to use. The results have been amazing and it's so easy to use.",
    name: "Sarah J.",
    rating: 5,
    design: "design1",
  },
  {
    image: PersonOne,
    text: "I love using Pulse! The results have been amazing and it's so easy to use.The results have been amazing and it's so easy to use. The results have been amazing and it's so easy to use.",
    name: "John D.",
    rating: 5,
    design: "design2",
  },
  {
    image: PersonOne,
    text: " to use.The results have been amazing and it's so easy to use. The results have been amazing and it's so easy to use.",
    name: "Emily R.",
    rating: 5,
    design: "design3",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="my-10">
      <ContentWrapper>
        <div className="py-10 h-auto w-full">
          <h2 className="text-[44px] max-lg:text-[34px] font-semibold font-OpenSans text-center max-md:text-[28px] text-black">
            More Surprise Features
          </h2>
          <p className="text-center font-OpenSans text-[16px] text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non
            aut mollitia impedit sit possimus
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent className="flex max-lg:w-full lg:w-1/2 items-center">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full flex items-center justify-center"
                  style={{ minWidth: "100%" }} // Ensure each item takes up full width
                >
                  <div className="flex flex-col items-center mb-12 bg-white p-6 rounded-md border-2 border-slate-200 min-h-[670px] max-lg:min-h-[568px] h-auto shadow-md w-[520px]">
                    <div className="w-full lg:h-[380px] max-lg:h-[380px] max-md:h-[240px] ">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-lg shadow border-2 border-gray-200 w-full h-full"
                      />
                    </div>
                    <div className="w-full pt-4">
                      <div className="py-2">
                        <p className="text-[22px] font-bold font-OpenSans max-md:text-[22px] max-lg:text-center">
                          {testimonial.name}
                        </p>
                        <div className="flex mt-2 max-lg:justify-center">
                          {Array.from(
                            { length: testimonial.rating },
                            (_, i) => (
                              <svg
                                key={i}
                                className="w-6 h-6 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.97 0 1.371 1.24.588 1.81l-3.396 2.463a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.396-2.463a1 1 0 00-1.176 0l-3.396 2.463c-.784.57-1.838-.197-1.54-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.49 9.4c-.783-.57-.383-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                              </svg>
                            )
                          )}
                        </div>
                      </div>
                      <p className="text-[20px] max-lg:text-[20px] font-OpenSans italic pb-1 max-md:text-[18px] min-h-[150px] max-lg:min-h-[146px] ">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 transform translate-x-6 -translate-y-1/2 md:translate-y-10 max-md:-translate-y-16 max-md:h-[32px] bg-lightBlue text-mainBlue text-[22px] w-[34px] h-[44px] scale-[1.7]  rounded-md shadow-lg">
              <PiArrowFatLineLeftFill className="text-[40px] text-mainBlue " />
            </CarouselPrevious>
            <CarouselNext className="absolute right-0  transform -translate-y-1/2 max-md:-translate-y-16 md:translate-y-10 bg-lightBlue text-mainBlue text-[22px] max-md:h-[32px] w-[34px] h-[44px] scale-[1.7] -translate-x-8 rounded-md shadow-lg">
              <PiArrowFatLineRightFill className="text-4xl text-gray-800" />
            </CarouselNext>
          </Carousel>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default TestimonialsSection;
