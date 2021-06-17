import React, { Component } from 'react'

export class Classess extends Component {
state={
    nama:"Arif"
}
    render() {
        return (
            <div>
                Nama Saya {this.state.nama}
            </div>
        )
    }
}

export default Classess
