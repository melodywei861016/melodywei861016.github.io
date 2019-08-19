import React, { Component } from 'react';
import Mammoth from '../../Assets/images/mammoth.png';
import Google from '../../Assets/images/google.png';
import Blueprint from '../../Assets/images/blueprint.png';
import Microsoft from '../../Assets/images/microsoft.png';
import Dream from '../../Assets/images/dream.png';
import Veterans360 from '../../Assets/images/veterans360.png';
import Sfai from '../../Assets/images/sfai.png';
import Homepointr from '../../Assets/images/homepointr.gif';
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
              Previously worked at <a href="https://www.google.com/"><u1><b>Google</b></u1></a>, <a href="https://mammoth.la/"><u2><b>Mammoth Media</b></u2></a>, <br/>
              and <a href="https://www.microsoft.com/"><u4><b>Microsoft</b></u4></a>. I also develop web/mobile apps for <a href="https://www.calblueprint.org"><u3><b>Blueprint, Technology for Nonprofits</b></u3></a>.<br/>
            </p2>
          </p>
        </div>
        <div class="arrow bounce">
          <img class="down-arrow" src={DownArrow}/>
        </div>
        <div class="container-fluid" style={{  marginTop: 100, marginBottom: 100 }}>
          <div class="row" style={{display: "inline-block", marginLeft: 50, marginRight: "auto", marginTop: 130, width: 1300, position: "relative", textAlgin: "center" }}>
            <div class="col-md-6" style={{display: "inline-block"}}>
              <a href="https://www.google.com/">
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
              </a>
            </div>
            <div class="col-md-6" style={{display: "inline-block"}}>
              <a href="https://mammoth.la/">
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
              </a>
          </div>
          <div class="col-md-6" style={{display: "inline-block", marginTop: 30}}>
            <a href="https://www.microsoft.com/">
              <div class="card" style={{ width: 590, height: 300}}>
                <img class="card-img-top" src={Microsoft} width="280" height="270" alt="Card image cap" style={{ marginLeft: 20, marginRight: 10, verticalAlign: "top", marginTop: 15 }}/>
                <div class="card-block" style={{display: "inline-block"}}>
                  <p class="card-title">
                    <p4 style={{color: "#228B22"}}><b>Microsoft</b></p4>
                    <p5 style={{color: "#32CD32"}}>Software Engineer Intern</p5>
                  </p>
                  <p6 class="card-text" style={{ width: 230 }}>
                    I built a first-party diagnostics Add-in for Excel that fetches runtime log info internally and displays it with a user-friendly web UI.
                    The app includes filter and search bar features.
                  </p6>
                  <a href="https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-overview" class="btn btn-primary" style={{backgroundColor: "#228B22", borderRadius: 25, marginTop: 15}}>More About Excel Add-in</a>
                </div>
              </div>
            </a>
        </div>
        <div class="col-md-6" style={{display: "inline-block", marginTop: 30}}>
          <a href="http://www.dominicandream.org/">
            <div class="card" style={{ width: 590, height: 300}}>
              <img class="card-img-top" src={Dream} width="280" height="270" alt="Card image cap" style={{ marginLeft: 20, marginRight: 10, verticalAlign: "top", marginTop: 15 }}/>
              <div class="card-block" style={{display: "inline-block"}}>
                <p class="card-title">
                  <p4 style={{color: "#3366FF"}}><b>Dream Project</b></p4>
                  <p5 style={{color: "#0099FF"}}>Blueprint Developer</p5>
                </p>
                <p6 class="card-text" style={{ width: 230 }}>
                  I developed an offline mobile app that allows teachers in the Dominican Republic to take attendance,
                  enroll students in courses, and keep track of records more eficiently.
                </p6>
                <a href="https://github.com/calblueprint/dream-mobile" class="btn btn-primary" style={{backgroundColor: "#3366FF", borderRadius: 25, marginTop: 15}}>Github</a>
              </div>
            </div>
          </a>
      </div>
      <div class="col-md-6" style={{display: "inline-block", marginTop: 30}}>
        <a href="https://veterans360.org/">
          <div class="card" style={{ width: 590, height: 300}}>
            <img class="card-img-top" src={Veterans360} width="280" height="270" alt="Card image cap" style={{ marginLeft: 20, marginRight: 10, verticalAlign: "top", marginTop: 15 }}/>
            <div class="card-block" style={{display: "inline-block"}}>
              <p class="card-title">
                <p4 style={{color: "#3366FF"}}><b>Veterans360</b></p4>
                <p5 style={{color: "#0099FF"}}>Blueprint Developer</p5>
              </p>
              <p6 class="card-text" style={{ width: 230 }}>
                I developed a social media mobile app for veterans that allows them to connect with other
                veteran users, learn about events and opportunities in the community, and share resources via the app.
              </p6>
              <a href="https://github.com/calblueprint/veterans360-mobile" class="btn btn-primary" style={{backgroundColor: "#3366FF", borderRadius: 25, marginTop: 15}}>Github</a>
            </div>
          </div>
        </a>
    </div>
    <div class="col-md-6" style={{display: "inline-block", marginTop: 30}}>
      <a href="https://www.sfai.edu/">
        <div class="card" style={{ width: 620, height: 300}}>
          <img class="card-img-top" src={Sfai} width="280" height="270" alt="Card image cap" style={{ marginLeft: 20, marginRight: 10, verticalAlign: "top", marginTop: 15 }}/>
          <div class="card-block" style={{display: "inline-block"}}>
            <p class="card-title">
              <p4 style={{color: "#3366FF"}}><b>San Francisco Art Institute</b></p4>
              <p5 style={{color: "#0099FF"}}>Blueprint Developer</p5>
            </p>
            <p6 class="card-text" style={{ width: 230 }}>
              I developed a website for students at San Francisco Art Institute that allows them to display and sell
  their artworks online, as well as communicate with buyers in order to complete the transactions.
            </p6>
            <a href="https://github.com/SFAI/artistregistry" class="btn btn-primary" style={{backgroundColor: "#3366FF", borderRadius: 25, marginTop: 15}}>Github</a>
          </div>
        </div>
      </a>
  </div>
  <div class="col-md-6" style={{display: "inline-block", marginTop: 30}}>
    <a href="  https://homepointr.com/">
      <div class="card" style={{ width: 590, height: 310}}>
        <img class="card-img-top" src={Homepointr} width="280" height="270" alt="Card image cap" style={{ marginLeft: 20, marginRight: 10, verticalAlign: "top", marginTop: 15 }}/>
        <div class="card-block" style={{display: "inline-block"}}>
          <p class="card-title">
            <p4 style={{color: "#3366FF"}}><b>Homepointr</b></p4>
            <p5 style={{color: "#0099FF"}}>Blueprint Developer</p5>
          </p>
          <p6 class="card-text" style={{ width: 230 }}>
            I developed a website that helps match homeless individuals with available housing, allowing
  better facilitation of the process and communication and better organization of large amount of data.
          </p6>
          <a href="https://github.com/calblueprint/HomePointrCIC" class="btn btn-primary" style={{backgroundColor: "#3366FF", borderRadius: 25, marginTop: 5}}>Github</a>
        </div>
      </div>
    </a>
</div>
          </div>
        </div>
      </div>
    );

  }
}

export default Homepage;
