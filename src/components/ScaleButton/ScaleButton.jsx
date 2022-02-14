import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';
import { v4 as uuidv4 } from 'uuid';
// import { iconVariants } from '../ScaleIcon/IconVariants';

const id = uuidv4();
function ScaleButton(props) {
    const WrappedButton = ReactWrapper('scale-button');

    return (
        <WrappedButton {...props} id={id} >
            {props.icon !== 'none' && props.iconPosition === 'before' ? <scale-icon-service-settings></scale-icon-service-settings> : null}
            {props.children}
            {props.icon !== 'none' && props.iconPosition === 'after' ? <scale-icon-service-settings></scale-icon-service-settings> : null}
        </WrappedButton>

    )
};

ScaleButton.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    size: PropTypes.oneOf(["small", "large"]),
    iconOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    iconPosition: PropTypes.oneOf(["after", "before"]),
    variant: PropTypes.oneOf(["primary", "secondary"]),
    type: PropTypes.oneOf(["reset", "submit", "button"]),
    target: PropTypes.string,
    styles: PropTypes.string,
    innerTabindex: PropTypes.string,
    // icon: PropTypes.oneOf(iconVariants),
};

ScaleButton.defaultProps = {
    children: "Click Me",
    size: "large",

};

export { ScaleButton as default };