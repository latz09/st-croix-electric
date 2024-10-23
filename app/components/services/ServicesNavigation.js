import Link from 'next/link';

const ServicesNavigation = ({ services }) => {
  return (
    <nav className="max-w-5xl mx-auto ">
      <ul className="grid lg:grid-cols-2 place-items-center gap-8 lg:gap-y-6 font-semibold lg:text-xl">
        {services.map((service) => (
          <li key={service.pageId}>
            {/* Using Next.js Link to navigate to the anchor */}
            <Link href={`/what-we-do#${service.pageId}`} className="hover:opacity-70 transition duration-500">
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ServicesNavigation;
