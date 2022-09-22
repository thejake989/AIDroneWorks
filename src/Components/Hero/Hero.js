import ReactPlayer from "react-player";

export default function Hero() {
  return (
    <article className="flex min-h-screen sm:p-8 bg-cover sm:flex-row relative max-h-30 w-full bg-no-repeat overflow-hidden p-4 flex-col ">
      <section className="sm:w-1/2 w-full z-10 med:p-16 flex flex-col items-center font-display justify-center p-8 sm:space-y-16 space-y-8 text-center">
        <h1 className="med:text-6xl leading-10 sm:text-5xl text-white text-4xl sm:mx-20">
          Welcome to AIDroneWorks
        </h1>
        <p className=" text-lg">
          Here you can see some of the work I have done.
        </p>
        <button
          type="button"
          className="bg-blue-300 rounded py-2 px-4 text-black shadow-lg mb-4"
        >
          <a href="#">See my work</a>
        </button>
      </section>
      <img
        className="absolute z-0 inset-0 w-full h-full"
        src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/274935697_125120736744033_5718029168165896502_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=oBTUREAum1EAX8bSVAE&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT-F3BZYuLwMD6HcXYz2FfsN949QiajK2A_nImtH-cBA8w&oe=633191D8"
        alt="A random placeholder photo"
      />
    </article>
  );
}
