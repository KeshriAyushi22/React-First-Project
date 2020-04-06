

import React, { Component } from 'react'

export default class Download extends Component {
    render() {
        return (
            <div style={{display: 'none'}}>
            <iframe src={this.props.iframeSrc} />
        </div>
        )
    }
}
