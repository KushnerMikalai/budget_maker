import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    changeTemperature = e => {
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.changeTemperature}
                    type="number"
                />
            </fieldset>
        )
    }
}

export default TemperatureInput