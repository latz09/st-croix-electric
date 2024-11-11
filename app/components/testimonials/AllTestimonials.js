
import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_ALL_TESTIMONIALS as query } from '@/data/queries/testimonials/FETCH_ALL_TESTIMONIALS';
import { Paragraph, SubHeading } from '../utils/typography/Typography';
import TestimonialsList from './TestimonialsList';

const AllTestimonials = async () => {
  const [data] = await fetchContent(query);
  const { testimonialsList, heading, intro } = data;

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6">
      {/* Heading and Intro */}
      <div className="text-center max-w-5xl mx-auto space-y-4 mb-8">
        <SubHeading text={heading} type="primary" />
        <Paragraph text={intro} type="primary" />
      </div>

      {/* Testimonials Grid */}
      <TestimonialsList testimonials={testimonialsList} />
    </div>
  );
};

export default AllTestimonials;
