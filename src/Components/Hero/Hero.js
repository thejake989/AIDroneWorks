import ReactPlayer from "react-player";

export default function Hero() {
  return (
    <article class="flex min-h-screen sm:p-8 bg-cover sm:flex-row relative max-h-30 w-full bg-no-repeat overflow-hidden p-4 flex-col ">
      <section class="sm:w-1/2 w-full z-10 med:p-16 flex flex-col items-center justify-center p-8 sm:space-y-16 space-y-8 text-center">
        <h1 class="med:text-6xl leading-10 sm:text-5xl text-4xl sm:mx-20">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <button
          type="button"
          class="bg-blue-300 rounded py-2 px-4 text-black shadow-lg mb-4"
        >
          <a href="#">Call To Action</a>
        </button>
      </section>
      <img
        class="absolute z-0 inset-0 w-full h-full"
        src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/274935697_125120736744033_5718029168165896502_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=oBTUREAum1EAX8bSVAE&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT-F3BZYuLwMD6HcXYz2FfsN949QiajK2A_nImtH-cBA8w&oe=633191D8"
        alt="A random placeholder photo"
      />
    </article>
  );
}
