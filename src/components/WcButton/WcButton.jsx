import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

import '@material/mwc-button';


function WcButton(props) {
    const WrappedButton = ReactWrapper('mwc-button');
    return (
        <WrappedButton {...props} >{props.children}</WrappedButton>
    )
};

WcButton.propTypes = {
    children: PropTypes.node,
    raised: PropTypes.bool,
    disabled: PropTypes.bool,
};
/* eslint-enable sort-keys */

WcButton.defaultProps = {
    children: "Click Me",
    raised: true,
    disabled: false,
};

export { WcButton as default };