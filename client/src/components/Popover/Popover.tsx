import { PopoverView, PopoverViewProps } from './Popover.view';

export interface PopoverProps extends PopoverViewProps {}

export function Popover(props: PopoverProps) {
  return <PopoverView {...props} />;
}
