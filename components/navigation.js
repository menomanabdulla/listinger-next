
import React, { Component }  from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';



//scss
import '../style/navigation.scss';


const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
}



class NavbarOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrollPositionY: 0,
        }
    }

    componentDidMount() {
        return window.addEventListener('scroll', debounce(this.handleScroll, 16))
    }

    componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
    }

    handleScroll = () => {
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
    }

    render() {
        console.log(this.SearchFormOne)
        const isScrolling = () => {
            if(this.state.scrollPositionY >= 60){
                return true;
            }else{
                return false;
            }
        }

        if(this.props.navbarCls){
            return(
                <Navbar expand="lg" className={(isScrolling()) ? 'main-navbar active':'main-navbar'}>
                    <div className={this.props.containerCls}>
                    <Navbar.Brand href="/">
                        <img src={this.props.imgSrc} alt="img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <form className="form-inline my-2 my-lg-0 header-form-one mr-auto">
                        <div className="form-group">
                            <div className="type-field-block">
                            <input className="form-control type-field" type="search" placeholder="What are you looking for ?" aria-label="Search" />
                            </div>
                            <div className="location-field-block">
                            <input className="form-control location-field" type="search" placeholder="Where ?" aria-label="Search" />
                            <i className="la la-crosshairs"></i>
                            </div>
                        </div>
                        <button className="btn btn-serach-one" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                        </form>
                        <Nav>
                            <NavDropdown title="Home">
                                <NavDropdown.Item href="/">Home One</NavDropdown.Item>
                                <NavDropdown.Item href="/index-two">Home Two</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/listing">Explore</Nav.Link>
                            <NavDropdown title="News">
                                <NavDropdown.Item href="/bloggrid">News Grid</NavDropdown.Item>
                                <NavDropdown.Item href="/bloglist">News List</NavDropdown.Item>
                                <NavDropdown.Item href="/blogdetails">News Details</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Pages">
                                <NavDropdown.Item href="/listing">Listing</NavDropdown.Item>
                                <NavDropdown.Item href="/listing-details">Listing Details</NavDropdown.Item>
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <div className="nav-item-static">
                                <Nav.Link href="/">
                                    <i className="la la-user"></i>Login <span>or</span> Register
                                </Nav.Link>
                                <Nav.Link href="/addlisting" className="nav-btn btn btn-one">
                                    <i className="fa fa-plus"></i>
                                    Add Listing
                                </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
            )
        }else if(this.props.searchOn){
            return (
                <Navbar expand="lg" className="main-navbar">
                    <Navbar.Brand href="/">
                        <img src={this.props.imgSrc} alt="img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="header-search-container">
                            <span>
                                <i className="la la-binoculars"></i>
                                Browse Listing
                                <i className="fa fa-angle-down"></i>
                                
                            </span>
                            {
                                this.props.SearchForm
                            }
                        </div>
                        <Nav>
                            <NavDropdown title="Home">
                                <NavDropdown.Item href="/">Home One</NavDropdown.Item>
                                <NavDropdown.Item href="/index-two">Home Two</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/listing">Explore</Nav.Link>
                            <NavDropdown title="News">
                                <NavDropdown.Item href="/bloggrid">News Grid</NavDropdown.Item>
                                <NavDropdown.Item href="/bloglist">News List</NavDropdown.Item>
                                <NavDropdown.Item href="/blogdetails">News Details</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Pages">
                                <NavDropdown.Item href="/listing">Listing</NavDropdown.Item>
                                <NavDropdown.Item href="/listing-details">Listing Details</NavDropdown.Item>
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <div className="nav-item-static">
                                <Nav.Link href="/">
                                    <i className="la la-user"></i>Login <span>or</span> Register
                                </Nav.Link>
                                <Nav.Link href="/addlisting" className="nav-btn btn btn-one">
                                    <i className="fa fa-plus"></i>
                                    Add Listing
                                </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
        return (
            <Navbar expand="lg" className="main-navbar">
                <Navbar.Brand href="/">
                    <img src={this.props.imgSrc} alt="img" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        this.props.SearchForm
                    }
                    <Nav>
                        <NavDropdown title="Home">
                            <NavDropdown.Item href="/">Home One</NavDropdown.Item>
                            <NavDropdown.Item href="/index-two">Home Two</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/listing">Explore</Nav.Link>
                        <NavDropdown title="News">
                            <NavDropdown.Item href="/bloggrid">News Grid</NavDropdown.Item>
                            <NavDropdown.Item href="/bloglist">News List</NavDropdown.Item>
                            <NavDropdown.Item href="/blogdetails">News Details</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pages">
                            <NavDropdown.Item href="/listing">Listing</NavDropdown.Item>
                            <NavDropdown.Item href="/listing-details">Listing Details</NavDropdown.Item>
                            <NavDropdown.Item href="/about">About</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <div className="nav-item-static">
                            <Nav.Link href="/">
                                <i className="la la-user"></i>Login <span>or</span> Register
                            </Nav.Link>
                            <Nav.Link href="/addlisting" className="nav-btn btn btn-one">
                                <i className="fa fa-plus"></i>
                                Add Listing
                            </Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarOne;
