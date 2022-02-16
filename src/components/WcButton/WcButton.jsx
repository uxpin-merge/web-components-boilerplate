import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

import '@material/mwc-button';


function WcButton(props) {
    const WrappedButton = ReactWrapper('mwc-button');
    
    return (
        <WrappedButton {...props}
        raised={props.variant == "raised" ? true : false}
        outlined={props.variant == "outlined" ? true : false}
        unelevated={props.variant == "unelevated" ? true : false}
        >{props.children}</WrappedButton>
    )
};

WcButton.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    trailingIcon: PropTypes.bool,
    variant: PropTypes.oneOf(["raised", "outlined", "unelevated"]),
};

WcButton.defaultProps = {
    children: "Click Me",
    variant: "raised",
    disabled: false,
};

export { WcButton as default };