import React, { Component } from 'react'
import Layout from './Layout'
import { detect } from 'detect-browser'
import { specialKeysFirefox, specialKeysChrome } from './specialKeys'
import do1_azerty from './mappings/do1_azerty'
import Tone from 'tone'
// import SampleLibrary from '../../tonejs-instruments/Tonejs-Instruments'
import { Dropdown } from 'react-bootstrap'
import './main.css'




const keys = document.getElementsByClassName("key");

export default class KeyboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            played: [],
            synth: new Tone.PolySynth(4, Tone.Synth).toMaster(),
            specialKeys: [],
            buggyNotes: ["A4"]

        }
    }

    componentDidMount = () => {
        document.addEventListener("keyup", e => this.whenKeyUp(e))
        document.addEventListener("keydown", e => this.whenKeyDown(e))
        document.addEventListener("mousedown", e => this.whenClicked(e))
        document.addEventListener("mouseup", e => this.whenClickReleased(e))
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
    }

    whenClicked = (e) => {
        try {
            const key = e.target.attributes.id.value
            const note = do1_azerty[key].note
            if (!this.state.played.includes(key) && note !== undefined) {
                this.state.synth.triggerAttack([note], Tone.context.currentTime)
                this.state.buggyNotes.forEach(note => {
                    this.state.synth.triggerRelease([note])
                    let buggyNotes = this.state.buggyNotes.filter((value, index, arr) => {
                        return value != note
                    })
                    this.setState({buggyNotes})
                })
                this.press(key)
                this.setState({ played: [...this.state.played, key] }, () => {
                    const later = new Date()
                })
            }
        } catch (error) {
            return
        }
    }


    whenClickReleased = (e) => {
        console.log('mouseup')
        try {
            const key = e.target.attributes.id.value
            const note = do1_azerty[key].note
            this.state.synth.triggerRelease([note])
            this.depress(key)
            const played = this.state.played.filter((val, i, arr) => key !== val)
            this.setState({ played })
        } catch (error) {
            return
        }
    }

    whenKeyDown = (e) => {
        try {
            const key = this.getKeyPressed(e.keyCode);
            const note = do1_azerty[key].note
            if (!this.state.played.includes(key) && note !== undefined) {
                this.state.synth.triggerAttack([note], Tone.context.currentTime)
                this.state.buggyNotes.forEach(note => {
                    this.state.synth.triggerRelease([note])
                    let buggyNotes = this.state.buggyNotes.filter((value, index, arr) => {
                        return value != note
                    })
                    this.setState({buggyNotes})
                })
                this.press(key)
                this.setState({ played: [...this.state.played, key] })
            }
        } catch (error) {
            return
        }

    }

    whenKeyUp = (e) => {
        try {
            const key = this.getKeyPressed(e.keyCode);
            const note = do1_azerty[key].note
            this.state.synth.triggerRelease([note])
            this.depress(key)
            const played = this.state.played.filter((val, i, arr) => key !== val)
            this.setState({ played })
        } catch (error) {
            return
        }
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

    // setInstrument = (e) => {
    //     const instruments = e.target.innerHTML
    //     const instrument = SampleLibrary.load({instruments})

        
    // }

    render() {
        return (
            <div>      
                <Layout pressedKeys={this.state.playing} />
            </div>
        )
    }
} 