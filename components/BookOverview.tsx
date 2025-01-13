import Image from 'next/image';
import React from 'react';

const BookOverview = ({
  id,
  title,
  author,
  genre,
  rating,
  total_copies,
  avaible_copies,
  description,
  coler,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Category{' '}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
