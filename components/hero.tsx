import React, { useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const images = [
  {
    name: "image_2.jpg",
    key: "FsIBLsUCudtBOlhQ87N6qKSbi23wleBZjzsMAuc8JGFyHQLf",
    customId: null,
    url: "https://tzrmi5maro.ufs.sh/f/FsIBLsUCudtBOlhQ87N6qKSbi23wleBZjzsMAuc8JGFyHQLf",
    size: 910021,
    uploadedAt: "2025-07-31T21:10:55.000Z",
  },
  {
    name: "image_6.jpg",
    key: "FsIBLsUCudtBhnLp3oz5VQHUAjnDXLiK92SG0FozZuP8fJMd",
    customId: null,
    url: "https://tzrmi5maro.ufs.sh/f/FsIBLsUCudtBhnLp3oz5VQHUAjnDXLiK92SG0FozZuP8fJMd",
    size: 1872205,
    uploadedAt: "2025-07-31T21:10:55.000Z",
  },
  {
    name: "image_1.jpg",
    key: "FsIBLsUCudtByoCpPYe4Obf8S0FuokdlPvGQAXWrJ56gmCKU",
    customId: null,
    url: "https://tzrmi5maro.ufs.sh/f/FsIBLsUCudtByoCpPYe4Obf8S0FuokdlPvGQAXWrJ56gmCKU",
    size: 1128697,
    uploadedAt: "2025-07-31T21:10:55.000Z",
  },
  {
    name: "image_4.jpg",
    key: "FsIBLsUCudtBMjFgZEDt4FvOmfETxaCt2nzG3phlMKNjQcd5",
    customId: null,
    url: "https://tzrmi5maro.ufs.sh/f/FsIBLsUCudtBMjFgZEDt4FvOmfETxaCt2nzG3phlMKNjQcd5",
    size: 1724093,
    uploadedAt: "2025-07-31T21:10:55.000Z",
  },
  {
    name: "image_3.jpg",
    key: "FsIBLsUCudtBdSD8JGfhbrn8H62e3D5Nlju7xoIzg0XEmSRY",
    customId: null,
    url: "https://tzrmi5maro.ufs.sh/f/FsIBLsUCudtBdSD8JGfhbrn8H62e3D5Nlju7xoIzg0XEmSRY",
    size: 1892827,
    uploadedAt: "2025-07-31T21:10:55.000Z",
  },
  {
    name: "image_5.jpg",
    key: "FsIBLsUCudtBzzM63FreR70uDCjEBxZgcKyFLhwokiO39dsG",
    customId: null,
    url: "https://tzrmi5maro.ufs.sh/f/FsIBLsUCudtBzzM63FreR70uDCjEBxZgcKyFLhwokiO39dsG",
    size: 1128697,
    uploadedAt: "2025-07-31T21:10:55.000Z",
  },
];

const Hero = () => {
  const imageRender = useMemo(
    () =>
      images.map((image) => (
        <Image
          key={image.key}
          alt={image.name}
          src={image.url}
          width={500}
          height={500}
        />
      )),
    [images]
  );
  return (
    <section>
      <Carousel>
        <CarouselContent>{imageRender}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Hero;
