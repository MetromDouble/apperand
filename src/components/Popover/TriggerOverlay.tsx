import React, { useRef, cloneElement } from 'react';

interface IRefHolderProps {
  element: React.ReactElement<any>;
  props: any;
}
const RefHolder = React.forwardRef<HTMLElement, IRefHolderProps>(({ element, props }, ref) =>
  cloneElement(element, { ...props, ref }));

interface ITriggerOverlayProps {
}
const TriggerOverlay: React.FC<ITriggerOverlayProps> = (
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

export default TriggerOverlay;
