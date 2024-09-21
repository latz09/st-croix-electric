import Image from 'next/image';

const LandingHero = ({ image, heading, subheading, blurb }) => {
  return (
    <div className="relative h-[60vh]">
      {/* Fullscreen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/70 z-10"></div>

      {/* Heading and Subheading */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-light px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black">{heading}</h1>
        <p className="mt-4 text-xl md:text-3xl font-bold text-secondary">{subheading}</p>
       
      </div>
    </div>
  );
};

export default LandingHero;
