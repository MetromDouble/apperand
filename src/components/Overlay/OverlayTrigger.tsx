import React, { useRef, useState, useContext, cloneElement } from 'react';

import { OverlayContext } from './OverlayContext';

export type TriggerType = 'click' | 'hover' | 'focus';
export type OverlayType = 'tooltip' | 'popover' | 'modal';
export interface DelayObject { show: number; hide: number; };

// HTML DOM and SVG DOM may have different support levels,
// so we need to check on context instead of a document root element.
function contains(context: Element, node: EventTarget) {
  if (context.contains) return context.contains(node as Element)
  if (context.compareDocumentPosition)
    return context === node || !!(context.compareDocumentPosition(node as Element) & 16)
}

// Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.
const handleMouseOverOut = (
  handler: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void,
  ev: React.MouseEvent<HTMLElement, MouseEvent>
) => {
  const target = ev.currentTarget;
  const related = ev.relatedTarget;

  if ((!related || related !== target) && !contains(target, related)) {
    handler(ev);
  }
}

interface IRefHolderProps {
  element: React.ReactElement<any>;
  props: any;
}
const RefHolder = React.forwardRef<HTMLElement, IRefHolderProps>(({ element, props }, ref) =>
  cloneElement(element, { ...props, ref }));

interface IOverlayTriggerProps {
  id: string;
  trigger: TriggerType | TriggerType[];
  type: OverlayType;
  delay?: number | DelayObject;
}
const OverlayTrigger: React.FC<IOverlayTriggerProps> = (
  ({
    id,
    trigger,
    type,
    delay,
    children
  }) => {
    if (!children) return null;

    const [visible, setVisible] = useState(false);

    const timeout = useRef(0);
    const hoverState = useRef<string | null>(null);

    const overlayContext = useContext(OverlayContext);

    const triggerRef = useRef(null);
    const child = (React.Children.only(children) as React.ReactElement<any>);
    const childProps = child ? { ...child.props } : {};

    const triggers = ([] as TriggerType[]).concat(trigger);

    const show = () => {
      const element = triggerRef.current;

      setVisible(true);
      overlayContext.show(id, type, element);
    }
    const hide = () => {
      setVisible(false);
      overlayContext.hide(id, type);
    }

    const handleShow = () => {
      clearTimeout(timeout.current);
      hoverState.current = 'show';

      const _delay = delay && typeof delay === 'object' ? delay : { show: delay, hide: delay };

      if (!_delay.show) {
        show();
        return;
      }

      timeout.current = setTimeout(() => {
        if (hoverState.current === 'show') show();
      }, _delay.show);
    };
    const handleHide = () => {
      clearTimeout(timeout.current);
      hoverState.current = 'hide';

      const _delay = delay && typeof delay === 'object' ? delay : { show: delay, hide: delay };

      if (!_delay.hide) {
        hide();
        return;
      }

      timeout.current = setTimeout(() => {
        if (hoverState.current === 'hide') hide();
      }, _delay.hide);
    };

    const handleMouseOver = (ev: React.MouseEvent<HTMLElement, MouseEvent>) => handleMouseOverOut(handleShow, ev);
    const handleMouseOut = (ev: React.MouseEvent<HTMLElement, MouseEvent>) => handleMouseOverOut(handleHide, ev);
    const handleClick = (ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (visible) handleHide();
      else handleShow();

      if (child.props.onClick) childProps.onClick(ev);
    };
    const handleFocus = (ev: React.FocusEvent<HTMLElement>) => {
      if (!visible) handleShow();
      if (child.props.onFocus) childProps.onFocus(ev);
    };
    const handleBlur = (ev: React.FocusEvent<HTMLElement>) => {
      if (visible) handleHide();
      if (child.props.onBlur) childProps.onBlur(ev);
    };

    if (triggers.includes('hover')) {
      childProps.onMouseOver = handleMouseOver;
      childProps.onMouseOut = handleMouseOut;
    }
    if (triggers.includes('click')) {
      childProps.onClick = handleClick;
    }
    if (triggers.includes('focus')) {
      childProps.onFocus = handleFocus;
      childProps.onBlur = handleBlur;
    }

    return (
      <RefHolder element={child} props={childProps} ref={triggerRef} />
    );
  }
);

export default OverlayTrigger;
