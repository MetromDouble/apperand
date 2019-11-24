import React, { useRef, cloneElement } from 'react';

export type TriggerType = 'click' | 'hover' | 'focus';

type OverlayType = 'tooltip' | 'popover' | 'modal';

interface IRefHolderProps {
  element: React.ReactElement<any>;
  props: any;
}
const RefHolder = React.forwardRef<HTMLElement, IRefHolderProps>(({ element, props }, ref) =>
  cloneElement(element, { ...props, ref }));

interface IOverlayTriggerProps {
  trigger: TriggerType | TriggerType[];
  type: OverlayType;
}
const OverlayTrigger: React.FC<IOverlayTriggerProps> = (
  ({
    children
  }) => {
    if (!children) return null;
    const triggerRef = useRef(null);
    const child = (React.Children.only(children) as React.ReactElement<any>);
    const childProps = child ? { ...child.props } : {};

    childProps.onMouseOver = () => console.log(triggerRef.current);

    return (
      <RefHolder element={child} props={childProps} ref={triggerRef} />
    );
  }
);

export default OverlayTrigger;
