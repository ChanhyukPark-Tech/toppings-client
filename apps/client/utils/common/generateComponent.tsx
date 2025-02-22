import { Fragment } from "react";

export const generateComponent = (component: JSX.Element, count: number) => {
  return [...new Array(count)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Fragment key={index}>{component}</Fragment>
  ));
};
