/* Helper function to merge classNames and apply multiple classnames */
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
}