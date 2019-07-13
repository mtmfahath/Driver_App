/**
 * Side Drawer Component
 */
import * as React from 'react';
import { Component } from 'react';
import { Accordion, Card, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type Props = {};

export default class Sidedrawer extends Component<Props> {
  props: Props;

  /* updateWidth(): void {
    innerWidth = window.innerWidth;
    this.setState({ width: innerWidth });
  } */

  toggelSidebar = (): void => {
    console.log('Toggle Sidebar: ', this.props);
  };

  render() {
    return (
      <Nav id="sidebar" className="active">
        <div className="sidebar-header">
          <div className="d-inline-block sidebar-header__headline">
            <h4>Headline</h4>
          </div>
          <a
            href="#"
            onClick={this.toggelSidebar}
            className="inline sidebar-header__link"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
        </div>
        {/* Sidebar links go here */}
        <div className="components">
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Home 1</a>
                    </li>
                    <li>
                      <a href="#">Home 2</a>
                    </li>
                    <li>
                      <a href="#">Home 3</a>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Nav>
    );
  }
}
