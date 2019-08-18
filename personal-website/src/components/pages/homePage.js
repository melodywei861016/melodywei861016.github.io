import React, { Component } from 'react';
import Mammoth from '../../Assets/images/mammoth.png';
import Google from '../../Assets/images/google.png';
import Blueprint from '../../Assets/images/blueprint.png';
import Microsoft from '../../Assets/images/microsoft.png';
import DownArrow from '../../Assets/images/down_arrow.png'

class Homepage extends Component {
  render() {
    return (
      <div style={{positive: "relative"}}>
        <div className="homepage" style={{ height: 420 }}>
          <p style={{ marginTop: 100, marginLeft: "auto", marginRight: "auto" }}>
            <p1>
              <a href="/">
                <b>Melody Wei</b>
              </a>
            </p1>
            <p2>
              <b>Hello! 👋 </b> I'm a senior studying Electrical Engineering and Computer Science at UC Berkeley.<br/>
              Currently looking for software engineer new grad positions for 2020 and am interested <br/> in frontend & mobile/web development.
              Previously worked at <a href="/Google"><u1><b>Google</b></u1></a>, <a href="/Mammoth"><u2><b>Mammoth Media</b></u2></a>, <br/>
              and <a href="/Microsoft"><u4><b>Microsoft</b></u4></a>. I also develop web/mobile apps for <a href="https://www.calblueprint.org"><u3><b>Blueprint, Technology for Nonprofits</b></u3></a>.<br/>
            </p2>
          </p>
        </div>
        <div class="arrow bounce">
          <img class="down-arrow" src={DownArrow}/>
        </div>
        <div class="container-fluid" style={{  marginTop: 100 }}>
          <div class="row" style={{display: "inline-block", marginLeft: 50, marginRight: "auto", marginTop: 130, width: 1300, position: "relative", textAlgin: "center" }}>
            <div class="col-md-6" style={{display: "inline-block"}}>
              <div class="card" style={{ width: 590, height: 300 }}>
                <img class="card-img-top" src={Google} width="280" height="270" alt="Card image cap" style={{ marginLeft: 20, marginRight: 10, verticalAlign: "top", marginTop: 15 }}/>
                <div class="card-block" style={{display: "inline-block"}}>
                  <p class="card-title">
                    <p4 style={{color: "#FF3D00"}}><b>Google</b></p4>
                    <p5 style={{color: "#FFA115"}}>Engineering Practicum Intern</p5>
                  </p>
                  <p6 class="card-text" style={{ width: 230 }}>
                    I developed a new tab feature for an internal hardware testing program used by Google's ChromeOS Factory Team.
                    This allows parallel running of multiple tests (users can view different test frames simultaneously through switching tabs).
                  </p6>
                </div>
              </div>
            </div>
            <div class="col-md-6" style={{display: "inline-block"}}>
              <div class="card" style={{ width: 590, height: 300}}>
                <img class="card-img-top" src={Mammoth} width="280" height="270" alt="Card image cap" style={{ marginLeft: 20, marginRight: 10, verticalAlign: "top", marginTop: 15 }}/>
                <div class="card-block" style={{display: "inline-block"}}>
                  <p class="card-title">
                    <p4 style={{color: "#5862e9"}}><b>Mammoth Media</b></p4>
                    <p5 style={{color: "#7c84eb"}}>Android Developer Intern</p5>
                  </p>
                  <p6 class="card-text" style={{ width: 230 }}>
                    Yarn is the interactive app that provides daily narratives through serialized mobile fiction.
                    I developed new frontend features for Android Yarn and redesigned the UI for the story screen.
                  </p6>
                  <a href="https://mammoth.la/apps/moreinfo" class="btn btn-primary" style={{backgroundColor: "#5862e9", borderRadius: 25, marginTop: 15}}>More About Yarn</a>
                </div>
              </div>
          </div>
          <div class="col-md-6" style={{display: "inline-block", marginTop: 30}}>
            <div class="card" style={{ width: 590, height: 300}}>
              <img class="card-img-top" src={Microsoft} width="280" height="270" alt="Card image cap" style={{ marginLeft: 20, marginRight: 10, verticalAlign: "top", marginTop: 15 }}/>
              <div class="card-block" style={{display: "inline-block"}}>
                <p class="card-title">
                  <p4 style={{color: "#228B22"}}><b>Microsoft</b></p4>
                  <p5 style={{color: "#32CD32"}}>Software Engineer Intern</p5>
                </p>
                <p6 class="card-text" style={{ width: 230 }}>
                  Yarn is the interactive app that provides daily narratives through serialized mobile fiction.
                  I developed new frontend features for Android Yarn and redesigned the UI for the story screen.
                </p6>
                <a href="https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-overview" class="btn btn-primary" style={{backgroundColor: "#228B22", borderRadius: 25, marginTop: 15}}>More About Excel Addin</a>
              </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Homepage;
