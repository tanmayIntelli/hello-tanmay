import React from 'react'
import { Container } from 'react-bootstrap'
import { Row,Col } from 'react-bootstrap'
import '../css/about.css'

function About() {
  return (
    <>
    <Container fluid id="about">
        <Row className='about-row'>
            <Col md={7} xs={12} className="about-content">
            <h3 className="heading">About me...</h3>
                <p>Hey there. I'm Tanmay (Yes, that's my full name), a 24 year old software engineer with special interest in Web developement. I currently live in <a className="content-link" href="https://goo.gl/maps/8N5KRaFdZzAtgsYS9" rel="nofollow noreferrer" target="_blank">New Delhi</a>, India but owing to my parents’ air force life, much of my life has been spent in ‘Bharat Darshan’. I am fairly confident about my cooking and coding skills. Professionally a Computer Science Engineer, currently trying to make healhcare accessible for all by continuous innovtion, with awesome folks at <a className="content-link" href="https://www.cerner.com/">Cerner Corporation</a>.</p>
                <p>When not working or pondering over some problem statement, I am usually found exploring lastest world affairs or tasty street food.</p>
                <p>Few things not mentioned in my resume. I've love trekking and want to cover as many mountain treks as possible. You will never be bored in my company. I admit I have a weak spot for chole bhature and if we ever go out, chances are I'll order chole bhature, momos and noodles for the table. Consistency is my strength. Have been trying to maintain a balance between fitness and love for food and I am consistently failing at it.</p>
                <p>Let us connect on LinkedIn. I am always excited to work with like minded people. Lets discuss over <span id="coffee">coffee</span> <i>chai</i>.</p>
            </Col>
            <Col md={5} xs={12} className="spider-quote">
                <h1>"Spiders are the only web developers that are happy to find bugs"</h1>
                <h5>~Every web developer EVER</h5>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default About