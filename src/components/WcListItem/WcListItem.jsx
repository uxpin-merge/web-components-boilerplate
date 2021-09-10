import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

import '@material/mwc-list/mwc-list-item.js';



function WcListItem(props) {
    const WrappedListItem = ReactWrapper('mwc-list-item');
    return (
        <>
        <WrappedListItem {...props} >
            <span slot="secondary">{props.secondary}</span>
            <span>{props.children}</span>
        </WrappedListItem>
        <li divider role="separator"></li>
        </>
    )
};

WcListItem.propTypes = {
    children: PropTypes.node,
    twoline: PropTypes.bool,
    secondary: PropTypes.string,
    disabled: PropTypes.bool,
    activated: PropTypes.bool
};
/* eslint-enable sort-keys */

WcListItem.defaultProps = {
    children: "List Item",
    twoline: false,
    disabled: false,
    activated: false
};

export { WcListItem as default };