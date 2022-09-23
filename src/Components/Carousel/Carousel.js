import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Showcase() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            className="object-fill w-full h-1/4"
            src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/278809197_141090328480407_6385373182321793571_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=ggPoUIiunlAAX9M6pYW&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT_shrvBInMoLmBlObPhUq1nxZd6tP4nfSNGn6OB2p7LbA&oe=6331886C"
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-1/4"
            src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/278866553_141089995147107_6136225463859516293_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=uLJmGLxGFysAX9DT0EJ&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT_mmJHn1Gya68nZl44I51RjOSvKoMsiWIP5ujjajWaUDw&oe=6332D915"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-1/4"
            src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/278863774_141089715147135_3168585526555363519_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=eMuAawPLXiYAX_GtyMV&tn=LB3FCt9yxVcVH_j8&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT9iOY09PkYb01dbFJu1YHn8euS5KDd7QB0yPwufkGf2pQ&oe=6331D8DC"
            alt="image slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-1/4"
            src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/278833362_141089558480484_3017709202190221342_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=1M-mVopuFjgAX90Oa0P&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT-NbBGDbf0NpFmMpJD2d-2bstj6fKUfH3zxsEe_MZdcHQ&oe=6332755E"
            alt="image slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-1/4"
            src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/278795128_141090755147031_4225044258535429800_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=d93vbnNfalAAX96h0rC&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT8M6aJ3b31ZOZ_7gAxl7NV1LopfGuxCv_pO6h3HQFaCDA&oe=6331B5D8"
            alt="image slide 5"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
