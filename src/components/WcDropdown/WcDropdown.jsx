import React from 'react';
import * as PropTypes from 'prop-types';
import ReactWrapper from '../UXPinWrapper/react-wrapper';
import 'road-dropdown';

function WcDropdown(props) {

    const WrappedDropdown = ReactWrapper('road-dropdown');
    //Onchange does not appear to work in UXPin, However it does when using use-custom-element (see commented example below)
    return <WrappedDropdown {...props} onChange={() => { alert("test") }} />
};


// import useCustomElement from '../UXPinWrapper/use-custom-element';

// function WcDropdown (props) {
//     const [customElementProps, ref] = useCustomElement(props);
//     return <road-dropdown {...customElementProps} ref={ref} />;
// };


WcDropdown.propTypes = {
    label: PropTypes.string,
    option: PropTypes.string,
    options: PropTypes.object,
    onChange: PropTypes.func
}

WcDropdown.defaultProps = {
    label: "Select a fruit:",
    option: "option2",
    options: {
        option1: { label: 'Option 1' },
        option2: { label: 'Option 2' },
    }
}
export { WcDropdown as default };