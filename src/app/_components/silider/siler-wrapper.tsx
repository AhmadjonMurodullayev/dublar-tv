
import type { StaticImageData } from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CategoryCard } from "../cards/banner-card"

export type MovieData = {
  img: StaticImageData
  title: string
  subtitle: string
  seriesNumber: number
  season: number
}

export const SliderWrapper = ({
    img,
    title,
  }: {
    img: StaticImageData;
    title: string;
  }) => {
    const imgs = Array(12)?.fill(img);
  return (
    <Carousel opts={{ align: "start" }} className="relative">
      <CarouselContent className="px-[2px]">
        {imgs?.map(( item,index) => (
          <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 py-[8px]" key={index}>
            <CategoryCard
    img={item} title={title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="disabled:opacity-0 left-4 bg-black/50 hover:bg-black/70 text-white" />
      <CarouselNext className="disabled:opacity-0 right-4 bg-black/50 hover:bg-black/70 text-white" />
    </Carousel>
  )
}
