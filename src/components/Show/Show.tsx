import type { Props } from "./types";

const Show = ({ children, when, fallback = null }: Props) => {
  return when ? children : fallback;
};

export default Show;
