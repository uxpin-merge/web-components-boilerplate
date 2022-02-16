import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

import '@material/mwc-list';



function WcList(props) {
    const WrappedList = ReactWrapper('mwc-list');
    return (
        <WrappedList {...props} >{props.children}</WrappedList>
    )
};

WcList.propTypes = {
    children: PropTypes.node,
    activatable: PropTypes.bool,
    multi: PropTypes.bool,
    onSelected: PropTypes.func
};
/* eslint-enable sort-keys */

WcList.defaultProps = {
    children: "Click Me",
    activatable: false,
    multi: false,
    onSelected: ()=>(null),
};

export { WcList as default };