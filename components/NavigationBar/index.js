import Link from "next/link";
import { Navbar, Nav, NavDropdown, NavItem, Dropdown } from "react-bootstrap";
import styles from "../../styles/NavigationBar.module.css";

export default function NavigationBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand className="nameNavBar">MITC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/" passHref>
                        <Nav.Link>Home</Nav.Link>
                    </Link>

                    {/* First dropdown Services */}

                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <div className={styles.flexLeftToRight}>
                            <div className={`${styles.dividerline} ${styles.paddingdropdown} `}>

                                <NavDropdown.Item disabled className="text-dark"><b>RDW</b></NavDropdown.Item>

                                <Link href="/services/rdw" passHref>
                                    <NavDropdown.Item><u>Over ons</u></NavDropdown.Item>
                                </Link>
                                
                            </div>

                            

                            <div className={`${styles.dividerline} ${styles.paddingdropdown} `}>
                                <NavDropdown.Item disabled className="text-dark"><b>NLR</b></NavDropdown.Item>

                                <Link href="/services/nlr" passHref>
                                    <NavDropdown.Item><u>Over ons</u></NavDropdown.Item>
                                </Link>
                            </div>

                            <div className={`${styles.paddingdropdown} `}>
                                <NavDropdown.Item disabled className="text-dark"><b>DNW</b></NavDropdown.Item>

                                <Link href="/services/dnw" passHref>
                                    <NavDropdown.Item><u>Over ons</u></NavDropdown.Item>
                                </Link>
                            </div>
                        </div>
                    </NavDropdown>

                    {/* Second dropdown Mitc */}

                    <NavDropdown title="MITC">
                        <div>
                            <Link href="/mitc/overons" passHref>
                                <NavDropdown.Item>Over ons</NavDropdown.Item>
                            </Link>

                            <Link href="/mitc/info" passHref>
                                <NavDropdown.Item>Info</NavDropdown.Item>
                            </Link>

                            <Link href="/mitc/nieuws" passHref>
                                <NavDropdown.Item>Nieuws</NavDropdown.Item>
                            </Link>
                        </div>
                    </NavDropdown>

                    {/* Third dropdown Contact */}

                    <NavDropdown title="Contact">
                        <div>
                            <Link href="/contact/contactgegevens" passHref>
                                <NavDropdown.Item>
                                    Contact gegevens
                            </NavDropdown.Item>
                            </Link>

                            <Link href="/contact/events" passHref>
                                <NavDropdown.Item>Events</NavDropdown.Item>
                            </Link>

                            <Link href="/contact/locatie" passHref>
                                <NavDropdown.Item>Locatie</NavDropdown.Item>
                            </Link>

                            <Link href="/contact/reserveren" passHref>
                                <NavDropdown.Item>Reserveren</NavDropdown.Item>
                            </Link>
                        </div>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
