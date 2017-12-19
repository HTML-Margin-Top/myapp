import React from 'react';
import QRCode from 'qrcode.react';

class CodePainterExample extends React.Component {
    render() {
        return <QRCode value="www.healai.com" />
    }
}

export default CodePainterExample;