import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import githired from "../images/githired.png";
import qwerty from "../images/qwerty.png";
import weatherapp from "../images/weatherapp.png";
import electron from "../images/electron.png";
import article from "../images/article.png";
import kiara from "../images/kiara.jpeg";
import FontAwesome from "react-fontawesome";

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.landing = this.landing.bind(this);
		this.projects = this.projects.bind(this);
		this.contact = this.contact.bind(this);
		this.skills = this.skills.bind(this);
	}

	landing(props) {
		return (
			<section>
				<h1 className="logo">KIARA CONTRERAS</h1>
				<h2>Full Stack Web Developer</h2>
				<h3>New York</h3>
				<p>
					I’m intrigued by improving and crafting digital experiences. With the
					left side of my brain fueled by music and teaching yoga I have found
					that Web Development requires my perceptive nature, logical thinking,
					and resilience. I am passionate about creating technology with the
					user experience in mind and spend my free time exploring NYC.
				</p>
				<img id="me" src={kiara} />
				<p>This site was built with <span>&hearts;</span> and React</p>
			</section>
		);
	}

	projects(props) {
		return (
			<section className="project-container">
				<div className="container">
					<img src={electron} className="projects" />
					<div className="hold-text">
							<p>Full CRUD Express/React app hosted with Electron Framework</p>
							<p><a className="demo grow" href="http://electron-libre.surge.sh/">Noted.</a></p>
						</div>
				</div>

				<div className="container">
					<img src={githired} className="projects image" />
					<div className="hold-text">
							<p>GitHired App made with Express/React and GitHub Jobs API</p>
							<p><a className="demo grow" href="http://githiredpotoo.surge.sh/">GitHired</a></p>
					</div>
				</div>
				<div className="container">
					<img src={article} className="projects image" />
					<div className="hold-text">
							<p>Save That Article built with Express, User Authentication, and NYTimes Article API</p>
							<p><a className="demo grow" href="https://savethatarticle.herokuapp.com/">Save That Article</a></p>
					</div>
				</div>
				<div className="container">
					<img src={weatherapp} className="projects" />
					<div className="hold-text">
							<p>Worked alongside UX Developers to create a Weather App that is
							fully CRUD Express/React app</p>
							{/*<p><a className="demo grow" href="#">WeatherApp</a></p>*/}
					</div>
				</div>
			{/*	<div className="container">
								<img src={qwerty} className="projects" />
								<div className="hold-text">
										<p>Text-based adventure game about Qwerty the Cat completed with
										multiple endings. Built with HTML, CSS, Javascript, and jQuery.</p>
										<p><a className="demo grow" href="qwerty-kpc.bitballoon.com">Qwerty</a></p>
								</div>
							</div>*/}
			</section>
		);
	}

	skills(props) {
		return (
			<div>
				<section>
					<div className="skills-box">
						<div className="skills">
							<p className="grow">
								<a href="https://reactjs.org/">React</a>
							</p>
							<p className="grow">
								<a href="https://www.javascript.com/">Javascript</a>
							</p>
							<p className="grow">
								<a href="https://jqueryui.com/">jQuery</a>
							</p>
							<p className="grow">
								<a href="https://www.w3schools.com/html/">HTML</a>
							</p>
							<p className="grow">
								<a href="https://www.w3schools.com/css/css_intro.asp">CSS</a>
							</p>
						</div>

						<div className="skills">
							<p className="grow">
								<a href="https://expressjs.com/">Express</a>
							</p>
							<p className="grow">
								<a href="https://nodejs.org/en/">Node.js</a>
							</p>
							<p className="grow">
								<a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">
									MVC
								</a>
							</p>
							<p className="grow">
								<a href="https://electron.atom.io/">Electron</a>
							</p>
							<p className="grow">
								<a href="https://angular.io/">Angular</a>
							</p>
						</div>

						<div className="skills">
							<p className="grow">
								<a href="https://angular.io/">Ruby</a>
							</p>
							<p className="grow">
								<a href="http://rubyonrails.org/">Rails</a>
							</p>
							<p className="grow">
								<a href="#">RESTful APIs</a>
							</p>
							<p className="grow">
								<a href="http://es6-features.org/#Constants">ES6</a>
							</p>
							<p className="grow">
								<a href="https://www.w3schools.com/sql/">SQL | PSQL</a>
							</p>
						</div>
					</div>
				</section>
			</div>
		);
	}

	contact(props) {
		return (
			<section>
				<div className="contact">
					<h2>Get in touch</h2>
					<div className="contact-links">
						<p className="grow">
							<a href="mailto: kcontreras01@gmail.com">Email</a>
						</p>
						<p className="grow">
							<a href="https://www.linkedin.com/in/kiara-contreras/">
								Linkedin
							</a>
						</p>
						<p className="grow">
							<a href="https://github.com/kcontreras01">GitHub</a>
						</p>
						<p className="grow">
							<a href="https://codepen.io/kpcontreras/">Codepen</a>
						</p>
					</div>
				</div>
			</section>
		);
	}

	render() {
		const redir = <Redirect to="/aboutme" />;
		//const redir = <p>flarp</p>;
		return (
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/aboutme">About Me</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/skills">Skills</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
				<Route exact path="/" render={() => redir} />
				<Route path="/aboutme" render={this.landing} />
				<Route path="/skills" render={this.skills} />
				<Route path="/projects" render={this.projects} />
				<Route path="/contact" render={this.contact} />
			</div>
		);
	}
}

export default Portfolio;
