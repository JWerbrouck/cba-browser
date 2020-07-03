import React, { Component } from 'react'
import './Keyboard.css'

export default class Layout extends Component {
    render() {
        return (
            <div className="keyboard-case defaultCase">
                <div className="keyboard">
                    <div className="key-row">
                        <div className="key default1 _1-60u smallFont neutral">
                            <p className="primary" id="tab"></p>
                            <p hidden></p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special">A</p>
                            <p className="primary" id="a">G#/Ab</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="z">Z</p>
                            <p className="primary" id="z">B</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="e">E</p>
                            <p className="primary" id="e">D</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="r">R</p>
                            <p className="primary" id="r">F</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="t">T</p>
                            <p className="primary" id="t">G#/Ab</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="y">Y</p>
                            <p className="primary" id="y">H</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="u">U</p>
                            <p className="primary" id="u">D</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="i">I</p>
                            <p className="primary" id="i">F</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="o">O</p>
                            <p className="primary" id="o">G#/Ab</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="p">P</p>
                            <p className="primary" id="p">B</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special">¨ ^</p>
                            <p className="primary" id="oem_6">D</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special">* $</p>
                            <p className="primary" id="oem_1">F</p>
                        </div>
                        <div className="key default1 _1-5u smallFont not">
                            <p className="primary" id="return_1"></p>
                        </div>
                    </div>
                    <div className="key-row">
                        <div className="key default1 _1-75u smallFont neutral">
                            <p className="primary" id="capital"></p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="q">Q</p>
                            <p className="primary" id="q">A#/Bb</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="s">S</p>
                            <p className="primary" id="s">C#/Db</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="d">D</p>
                            <p className="primary" id="d">E</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="f">F</p>
                            <p className="primary" id="f">G</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="g">G</p>
                            <p className="primary" id="g">A#/Bb</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="h">H</p>
                            <p className="primary" id="h">C#/Db</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="j">J</p>
                            <p className="primary" id="j">E</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="k">K</p>
                            <p className="primary" id="k">G</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="l">L</p>
                            <p className="primary" id="l">A#/Bb</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="m">M</p>
                            <p className="primary" id="m">C#/Db</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special">% ù</p>
                            <p className="primary" id="oem_3">E</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special">£ µ</p>
                            <p className="primary" id="oem_5">G</p>
                        </div>
                        <div className="key default1 _1-25u smallFont black">
                            <p className="special" id="return">return</p>
                            <p className="primary" id="return">(A#/Bb)</p>
                        </div>
                    </div>
                    <div className="key-row">
                        <div className="key default1 _1-25u smallFont neutral">
                            <p className="primary" id="lshift"></p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="oem_102">&#60;</p>
                            <p className="primary" id="oem_102">A</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="w">W</p>
                            <p className="primary" id="w">C</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="x">X</p>
                            <p className="primary" id="x">D#/Eb</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="c">C</p>
                            <p className="primary" id="c">F#/Gb</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="v">V</p>
                            <p className="primary" id="v">A</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special" id="b">B</p>
                            <p className="primary" id="b">C</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special" id="n">N</p>
                            <p className="primary" id="n">D#/Eb</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special">, ?</p>
                            <p className="primary" id="oem_comma">F#/Gb</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special">. ;</p>
                            <p className="primary" id="oem_period">A</p>
                        </div>
                        <div className="key default1 smallFont white">
                            <p className="special">/ :</p>
                            <p className="primary" id="oem_2">C</p>
                        </div>
                        <div className="key default1 smallFont black">
                            <p className="special">+ =</p>
                            <p className="primary" id="oem_plus">D#/Eb</p>
                        </div>
                        <div className="key default1 _2-75u smallFont neutral">
                            <p className="special" id="rshift">SHIFT</p>
                            <p className="primary" id="rshift">(A)</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
