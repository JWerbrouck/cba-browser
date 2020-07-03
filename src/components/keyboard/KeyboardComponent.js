import React, { Component } from 'react'
import Layout from './Layout'
import { detect } from 'detect-browser'
import { specialKeysFirefox, specialKeysChrome } from './specialKeys'
import do1_azerty from './mappings/do1_azerty'
import Tone from 'tone'
import SampleLibrary from '../../tonejs-instruments/Tonejs-Instruments'
import { Dropdown } from 'react-bootstrap'



const keys = document.getElementsByClassName("key");

export default class KeyboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            played: [],
            synth: new Tone.PolySynth(4, Tone.Synth).toMaster(),
            specialKeys: []
        }
    }

    componentDidMount = () => {
        document.addEventListener("keyup", e => this.whenKeyUp(e))
        document.addEventListener("keydown", e => this.whenKeyDown(e))
        console.log('SampleLibrary', SampleLibrary)
        const browser = detect().name
        switch (browser) {
            case 'firefox':
                this.setState({ specialKeys: specialKeysFirefox })
                break;
            case 'chrome':
                this.setState({ specialKeys: specialKeysChrome })
                break;
            default:
                break;
        }

        var piano = SampleLibrary.load({
            instruments: "piano"
        });
        
        console.log('piano', piano)

        
    }

    whenKeyDown = (e) => {
        const now = new Date()
        const key = this.getKeyPressed(e.keyCode);
        try {
            const note = do1_azerty[key].note
            if (!this.state.played.includes(key) && note !== undefined) {
                this.state.synth.triggerAttack([note], Tone.context.currentTime)
                this.press(key)
                this.setState({ played: [...this.state.played, key] }, () => {
                    const later = new Date()
                })
            }
        } catch (error) {
            console.log('error', error)
            return
        }

    }

    whenKeyUp = (e) => {
        const key = this.getKeyPressed(e.keyCode);
        const note = do1_azerty[key].note
        this.state.synth.triggerRelease([note])
        this.depress(key)
        const played = this.state.played.filter((val, i, arr) => key !== val)
        this.setState({ played })
    }

    getKeyPressed = (keyCode) => {
        let keyPressed;
        for (let i = 0; i < this.state.specialKeys.length; i++) {
            if (this.state.specialKeys[i].keyCode === keyCode) {
                keyPressed = this.state.specialKeys[i].keyName;
                break;
            }
            else {
                keyPressed = String.fromCharCode(keyCode).toLowerCase();
            }
        }
        return keyPressed;
    }

    press(key) {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].getElementsByClassName("primary") !== undefined && keys[i].getElementsByClassName("primary")[0].id === key) {
                keys[i].classList.add('pressedDefault1');
                break;
            }
        }
    }

    depress(key) {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].getElementsByClassName("primary")[0].id === key) {
                keys[i].classList.remove('pressedDefault1');
                break;
            }
        }
    }

    setInstrument = (e) => {
        const instruments = e.target.innerHTML
        const instrument = SampleLibrary.load({instruments})

        
    }

    render() {
        return (
            <div>
                <Layout pressedKeys={this.state.playing} />
            </div>
        )
    }
}
