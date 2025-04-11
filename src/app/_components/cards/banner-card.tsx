import Image, { type StaticImageData } from "next/image"


export const CategoryCard = ({
  img,
  title,
}: {
  img: StaticImageData;
  title: string;
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg relative h-[300px]">
      {/* Series and Season Info */}
      <div className="absolute top-4 left-4 z-10 text-white">
        <div className="bg-black/50 rounded-md p-2 backdrop-blur-sm">
          <p className="text-2xl font-bold">12</p>
          <p className="text-xs">серия</p>
          <div className="mt-1 border-t border-white/30 pt-1">
            <p className="text-sm">1</p>
            <p className="text-xs">сезон</p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="h-full w-full relative ">
        <Image
          className="w-full h-full  overflow-clip-margin content-box; "
          src={img }
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="font-bold text-2xl text-white">{title}</h3>
          <p className="text-sm text-white/80">aa</p>
        </div>
      </div>
    </div>
  )
}
