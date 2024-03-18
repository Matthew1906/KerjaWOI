'use client'

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const PageIndicator = ({ pages, current, prev, next }) => {
  const prevPage = current <= 1 ? false : current - 1;
  const nextPage = current === pages ? false : current + 1;
  return (
    <div className="mt-10 float-right flex gap-2 items-center text-dark-purple text-lg font-bold">
      {prevPage && (
        <>
          <MdNavigateBefore
            className="text-2xl cursor-pointer"
            onClick={prev}
          />
          <span className="py-2 px-4">{prevPage}</span>
        </>
      )}
      <span className="bg-dark-purple text-white py-2 px-4 rounded">
        {current}
      </span>
      {nextPage && (
        <>
          <span className="py-2 px-4">{nextPage}</span>
          <MdNavigateNext className="text-2xl cursor-pointer" onClick={next} />
        </>
      )}
    </div>
  );
};

export default PageIndicator;
