'use client';
import { Container, Dropdown, DropdownButton, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styles from './styles.module.scss';
import bgImage from 'src/assets/images/jcrb-title.png';
import bgImage2 from 'src/assets/images/nedjelnje-usluge.png';
import bgImage3 from 'src/assets/images/za-djecu.png';
import bgImage4 from 'src/assets/images/ostali-programi.png';
import logoImage from '../../assets/images/photo_2023-07-26_11-49-50.jpg'
//import History from '../History/index';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

export default function Navigation() {
    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage.src})` }}> */}
            
            <Navbar bg='transparent' data-bs-theme="bg='transparent'" className={styles.navbar}>
            <Container className={styles.container}>
                <Navbar.Brand href='/' className={`${styles.logo} ${styles.logo2}`}
                style={{ backgroundImage: `url(${logoImage.src})` }}></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className={styles.menu_nav0}>
                <Nav className='me-auto'>
                    <Nav.Link href='/' className={styles.menu_nav}>Naslovna</Nav.Link>
                    <NavDropdown id='dropdown-basic-button' title='O Nama' className={styles.menu_nav}>
                        <Dropdown.Item className={styles.menu_nav2}><Link href="/history">Istorija</Link></Dropdown.Item>
                        <Dropdown.Item className={styles.menu_nav2}><Link href="/beliefs">Naša Uvijerenja</Link></Dropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='/' className={styles.menu_nav}>Dešavanja</Nav.Link>
                    <NavDropdown id='dropdown-basic-button' title='Druge Službe' className={styles.menu_nav}>
                        <Dropdown.Item className={styles.menu_nav2}><Link href="/kids">Kids Club</Link></Dropdown.Item>
                        <Dropdown.Item className={styles.menu_nav2}><Link href="/teenagers">Tinejdžer</Link></Dropdown.Item>
                        <Dropdown.Item className={styles.menu_nav2}><Link href="/programs">Božićni Program</Link></Dropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className={styles.sliderTitle}>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
                <Slider {...sliderSettings}>
                    <div className={styles.places}>
                    <Image src={bgImage} alt='dads'/>
                    </div>
                    <div className={styles.places}>
                    <Image src={bgImage2} alt='dads'/>
                    </div>
                    <div className={styles.places}>
                    <Image src={bgImage3} alt='dads'/>
                    <Link href="/kids" className={styles.linkKids}>Kids Club</Link>
                    </div>     
                    <div className={styles.places}>
                    <Image src={bgImage4} alt='dads'/>
                    </div>               
                </Slider>
            </div>
            {/* ReactDOM.render( */}
              {/* <Switch> */}
                {/* <Route path="/" element={<Navigation />} /> */}
                {/* Other components and routes */}
              {/* </Switch> */}

              {/* <Router> */}
                {/* <Routes> */}
                   {/* <Route path="/history" element={<History />} /> */}
                {/* </Routes> */}
             {/* </Router> */}
            {/* //   document.getElementById(root) */}
        </div>
    );
}
