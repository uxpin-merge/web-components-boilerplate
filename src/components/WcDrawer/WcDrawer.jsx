import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

import '@material/mwc-drawer';



function WcDrawer(props) {
    const WrappedDrawer = ReactWrapper('mwc-drawer');

    return (
        <WrappedDrawer {...props} >
            <span slot="title">{props.title}</span>
            <span slot="subtitle">{props.subtitle}</span>
            <div style={{padding: "16px"}}>
                {props.children}
            </div>
        </WrappedDrawer>
    )
};

WcDrawer.propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    type: PropTypes.oneOf(["dismissible", "modal"]),
    hasHeader: PropTypes.bool
};

WcDrawer.defaultProps = {
    children: "Click Me",
    hasHeader: true,
    title: "I am a title",
    subtitle: "Subtitle goes here"
};

export { WcDrawer as default };