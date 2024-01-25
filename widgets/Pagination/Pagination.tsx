import { useInView, motion } from "framer-motion";
import React, { FC, Fragment, useEffect, useState } from "react";

export const Pagination: FC<any> = ({ refs }) => {
  const { refNameSection, refAboutSection, refSkillsSection, refExpirienceSection } = refs;

  const isNameSectionInView = useInView(refNameSection, { amount: 0.5 });
  const isAboutSectionInView = useInView(refAboutSection, { amount: 0.5 });
  const isSkillsSectionInView = useInView(refSkillsSection, { amount: 0.5 });
  const isExpirienceSectionInView = useInView(refExpirienceSection, { amount: 0.5 });

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (isNameSectionInView) {
      setPage(1);
    }
    if (isAboutSectionInView) {
      setPage(2);
    }
    if (isSkillsSectionInView) {
      setPage(3);
    }
    if (isExpirienceSectionInView) {
      setPage(4);
    }
  }, [isNameSectionInView, isAboutSectionInView, isSkillsSectionInView, isExpirienceSectionInView]);

  return (
    <div className={`fixed h-screen top-0 right-10 text-xl flex items-center pointer-events-[unset] ease-out duration-1000 ${!isNameSectionInView ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-col">
        {Object.keys(refs).map((_, i) => (
          <Fragment key={i}>
            <div className={`flex justify-center items-center text-center align-middle`}>
              <div className={`w-2 h-2 m-[1em] rounded-full ${page === i + 1 ? "bg-cyan-900" : "bg-white"}`}></div>
              {page === i + 1 ? <motion.div layoutId="currentNav" className="absolute border-2 border-cyan-900 h-[2rem] w-[2rem] rounded-full" /> : null}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
