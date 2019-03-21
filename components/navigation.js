
import React, { Component }  from 'react';
import { Navbar, Nav, NavDropdown, Modal } from 'react-bootstrap';

//scss
import '../style/navigation.scss';
import '../style/login-register.scss';

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
            modalShow: false,
            activeModal: null
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.hideModal = this.hideModal.bind(this);
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

    clickHandler(e, index) {
        this.setState({ activeModal: index })
    }
    hideModal() {
        this.setState({ activeModal: null })
    }

    render() {
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
                                <NavDropdown.Item href="/how-work">How Work</NavDropdown.Item>
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <div className="nav-item-static">
                                <Nav.Link href="#" className="login-link" onClick={e => this.clickHandler(e, 1)}>
                                    <i className="la la-user"></i>Login <span>or</span>
                                </Nav.Link>
                                    <Modal 
                                        show={this.state.activeModal === 1}
                                        onHide={this.hideModal}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        className="login-register-modal"
                                        centered
                                    >
                                    <div className="lg-account-modal" id="lg-login-modal">
                                        <div className="" role="document">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title"><i className="la la-user"></i>Sign In</h5>
                                                <button type="button" className="close" onClick={this.hideModal}>
                                                <i className="la la-times"></i>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="login-form">
                                                    <form id="login" action="login" method="post">
                                                        <p className="status"></p>
                                                        <div className="form-group">
                                                            <input id="username" className="form-control" type="text" name="username" required />
                                                            <label className="animate-label">Username</label>
                                                        </div>
                                                        <div className="form-group">
                                                            <input id="password" className="form-control" type="password" name="password" required />
                                                            <label className="animate-label">Password</label>
                                                        </div>
                                                        <div className="form-group form-check">
                                                            <label>
                                                                <input type="checkbox" /> Keep me signed in	</label>
                                                            <a href="#" className="forget-pass">Forget Password?</a>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary">Sign In</button>
                                                    </form>
                                                </div>
                                                <p className="anotherOption">Don't have an account? <a data-dismiss="modal" data-toggle="modal" href="#">Register Here</a></p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </Modal>
                                <Nav.Link href="#" className="register-link" onClick={e => this.clickHandler(e, 2)}>
                                    Register
                                </Nav.Link>
                                <Modal 
                                    show={this.state.activeModal === 2}
                                    onHide={this.hideModal}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    className="login-register-modal"
                                    centered
                                >
                                    <div className="lg-account-modal">
                                        <div className="gh" role="document">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title"><i className="la la-unlock-alt"></i>Register</h5>
                                                <button type="button" className="close" onClick={this.hideModal} >
                                                    <i className="la la-times"></i>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form id="register" action="register" method="post">
                                                    <p className="status"></p>
                                                    <div className="form-group">
                                                        <input id="registerusername" type="text" className="form-control" name="username" required />
                                                        <label className="animate-label">User Name</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="registeremail1" type="email" className="form-control" name="email" required />
                                                        <label htmlFor="registeremail1" className="animate-label">Email</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="registerpassword1" type="password" name="password" className="form-control" required />
                                                        <label htmlFor="registerpassword1" className="animate-label">Passwrod</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="registerrepassword1" type="password" name="repassword" className="form-control" required />
                                                        <label htmlFor="registerrepassword1" className="animate-label">Re Passwrod</label>
                                                    </div>
                                                    <div className="form-group form-check register-form">
                                                        <input id="registercheckbox1" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="registercheckbox1 ">By signing up, you agree the 
                                                            <a href="http://localhost/listinge">terms of service</a> 
                                                            and 
                                                            <a href="http://localhost/listinge">privacy policy</a>
                                                                                </label>
                                                    </div>
                                                <button type="submit" className="btn btn-primary">Register Now</button>
                                                </form>
                                                <p className="anotherOption">Already have an account? <a data-dismiss="modal" data-toggle="modal" href="#lg-login-modal">Login Here</a></p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                </Modal>
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
                                <NavDropdown.Item href="/how-work">How Work</NavDropdown.Item>
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <div className="nav-item-static">
                                <Nav.Link href="#" className="login-link" onClick={e => this.clickHandler(e, 3)}>
                                    <i className="la la-user"></i>Login <span>or</span>
                                </Nav.Link>
                                    <Modal 
                                        show={this.state.activeModal === 3}
                                        onHide={this.hideModal}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        className="login-register-modal"
                                        centered
                                    >
                                    <div className="lg-account-modal" id="lg-login-modal">
                                        <div className="" role="document">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title"><i className="la la-user"></i>Sign In</h5>
                                                <button type="button" className="close" onClick={this.hideModal}>
                                                <i className="la la-times"></i>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="login-form">
                                                    <form id="login" action="login" method="post">
                                                        <p className="status"></p>
                                                        <div className="form-group">
                                                            <input id="username" className="form-control" type="text" name="username" required />
                                                            <label className="animate-label">Username</label>
                                                        </div>
                                                        <div className="form-group">
                                                            <input id="password" className="form-control" type="password" name="password" required />
                                                            <label className="animate-label">Password</label>
                                                        </div>
                                                        <div className="form-group form-check">
                                                            <label>
                                                                <input type="checkbox" /> Keep me signed in	</label>
                                                            <a href="#" className="forget-pass">Forget Password?</a>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary">Sign In</button>
                                                    </form>
                                                </div>
                                                <p className="anotherOption">Don't have an account? <a data-dismiss="modal" data-toggle="modal" href="#">Register Here</a></p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </Modal>
                                <Nav.Link href="#" className="register-link" onClick={e => this.clickHandler(e, 4)}>
                                    Register
                                </Nav.Link>
                                <Modal 
                                    show={this.state.activeModal === 4}
                                    onHide={this.hideModal}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    className="login-register-modal"
                                    centered
                                >
                                    <div className="lg-account-modal">
                                        <div className="gh" role="document">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title"><i className="la la-unlock-alt"></i>Register</h5>
                                                <button type="button" className="close" onClick={this.hideModal} >
                                                    <i className="la la-times"></i>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form id="register" action="register" method="post">
                                                    <p className="status"></p>
                                                    <div className="form-group">
                                                        <input id="registerusername" type="text" className="form-control" name="username" required />
                                                        <label className="animate-label">User Name</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="registeremail2" type="email" className="form-control" name="email" required />
                                                        <label htmlFor="registeremail2" className="animate-label">Email</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="registerpassword2" type="password" name="password" className="form-control" required />
                                                        <label htmlFor="registerpassword2" className="animate-label">Passwrod</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="registerrepassword2" type="password" name="repassword" className="form-control" required />
                                                        <label htmlFor="registerrepassword2" className="animate-label">Re Passwrod</label>
                                                    </div>
                                                    <div className="form-group form-check register-form">
                                                        <input id="registercheckbox2" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="registercheckbox2">By signing up, you agree the 
                                                            <a href="http://localhost/listinge">terms of service</a> 
                                                            and 
                                                            <a href="http://localhost/listinge">privacy policy</a>
                                                                                </label>
                                                    </div>
                                                <button type="submit" className="btn btn-primary">Register Now</button>
                                                </form>
                                                <p className="anotherOption">Already have an account? <a data-dismiss="modal" data-toggle="modal" href="#lg-login-modal">Login Here</a></p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                </Modal>
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
                            <NavDropdown.Item href="/how-work">How Work</NavDropdown.Item>
                            <NavDropdown.Item href="/about">About</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <div className="nav-item-static">
                                <Nav.Link href="#" className="login-link" onClick={e => this.clickHandler(e, 5)}>
                                    <i className="la la-user"></i>Login <span>or</span>
                                </Nav.Link>
                                    <Modal 
                                        show={this.state.activeModal === 5}
                                        onHide={this.hideModal}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        className="login-register-modal"
                                        centered
                                    >
                                    <div className="lg-account-modal" id="lg-login-modal">
                                        <div className="" role="document">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title"><i className="la la-user"></i>Sign In</h5>
                                                <button type="button" className="close" onClick={this.hideModal}>
                                                <i className="la la-times"></i>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="login-form">
                                                    <form id="login" action="login" method="post">
                                                        <p className="status"></p>
                                                        <div className="form-group">
                                                            <input id="username" className="form-control" type="text" name="username" required />
                                                            <label className="animate-label">Username</label>
                                                        </div>
                                                        <div className="form-group">
                                                            <input id="password" className="form-control" type="password" name="password" required />
                                                            <label className="animate-label">Password</label>
                                                        </div>
                                                        <div className="form-group form-check">
                                                            <label>
                                                                <input type="checkbox" /> Keep me signed in	</label>
                                                            <a href="#" className="forget-pass">Forget Password?</a>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary">Sign In</button>
                                                    </form>
                                                </div>
                                                <p className="anotherOption">Don't have an account? <a data-dismiss="modal" data-toggle="modal" href="#">Register Here</a></p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </Modal>
                                <Nav.Link href="#" className="register-link" onClick={e => this.clickHandler(e, 6)}>
                                    Register
                                </Nav.Link>
                                <Modal 
                                    show={this.state.activeModal === 6}
                                    onHide={this.hideModal}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    className="login-register-modal"
                                    centered
                                >
                                    <div className="lg-account-modal">
                                        <div className="gh" role="document">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title"><i className="la la-unlock-alt"></i>Register</h5>
                                                <button type="button" className="close" onClick={this.hideModal} >
                                                    <i className="la la-times"></i>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form id="register" action="register" method="post">
                                                    <p className="status"></p>
                                                    <div className="form-group">
                                                        <input id="registerusername" type="text" className="form-control" name="username" required />
                                                        <label className="animate-label">User Name</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="registeremail3" type="email" className="form-control" name="email" required />
                                                        <label htmlFor="registeremail3" className="animate-label">Email</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="registerpassword3" type="password" name="password" className="form-control" required />
                                                        <label htmlFor="registerpassword3" className="animate-label">Passwrod</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="registerrepassword3" type="password" name="repassword" className="form-control" required />
                                                        <label htmlFor="registerrepassword3" className="animate-label">Re Passwrod</label>
                                                    </div>
                                                    <div className="form-group form-check register-form">
                                                        <input id="registercheckbox3" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="registercheckbox3">By signing up, you agree the 
                                                            <a href="http://localhost/listinge">terms of service</a> 
                                                            and 
                                                            <a href="http://localhost/listinge">privacy policy</a>
                                                                                </label>
                                                    </div>
                                                <button type="submit" className="btn btn-primary">Register Now</button>
                                                </form>
                                                <p className="anotherOption">Already have an account? <a data-dismiss="modal" data-toggle="modal" href="#lg-login-modal">Login Here</a></p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                </Modal>
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
