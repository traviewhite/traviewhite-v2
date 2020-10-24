import React from 'react'
import { motion } from 'framer-motion'

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="4"
    stroke="#405773"
    strokeLinecap="round"
    {...props}
  />
)

export const NavToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="40" height="30" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 5 L 22 5", stroke: "#405773" },
          open: { d: "M 3 16.5 L 22 2.5", stroke: "#FB9271" }
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 22 16.346", stroke: "#405773" },
          open: { d: "M 3 2.5 L 22 16.346", stroke: "#FB9271" }
        }}
      />
    </svg>
  </button>
)

export default NavToggle