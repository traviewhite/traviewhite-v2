import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { designImg } from 'components/content'

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions

  return (
    <>
      <motion.div
        className="example"
        initial={false}
        animate={{ backgroundColor: isOpen ? "pink" : "#ffffff" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={isOpen}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "100px" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          />
        )}
      </AnimatePresence>
    </>
  );
};


export const Example = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>();

  return designImg.map((i) => (
    <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
  ));
};

export default Example


