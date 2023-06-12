/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//  Code from Marry Below
const HomePage = () => {
    const [packageData, setPackages] = useState([
      {
        id: 1,
        title: "Package 1",
        description: "Description for package 1",
        image: "https://picsum.photos/300/200",
        price: 1200,
        duration: "3 days",
      },
      {
        id: 2,
        title: "Package 2",
        description: "Description for package 2",
        image: "https://picsum.photos/300/200",
        price: 1400,
        duration: "5 days",
      },
      {
        id: 3,
        title: "Package 3",
        description: "Description for package 3",
        image: "https://picsum.photos/300/200",
        price: 300,
        duration: "7 days",
      },
    ]);
  
    const handleSelectPackage = (id) => {
      // Code to handle selecting a package
    };
  
    return (
      <Container>
        <h1 className="text-center my-4">Available Packages</h1>
        <Row>
          {packages.map((pkg) => (
            <Col key={pkg.id} sm={12} md={6} lg={4}>
              <Card className="my-3 p-3 rounded">
                <Card.Img src={pkg.image} variant="top" />
                <Card.Body>
                  <Card.Title>{pkg.title}</Card.Title>
                  <Card.Text>{pkg.description}</Card.Text>
                  <Card.Text>
                    Price: {pkg.price}, Duration: {pkg.duration}
                  </Card.Text>
                  <Button onClick={() => handleSelectPackage(pkg.id)}>
                    Select Package
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  

/*=============== QUESTIONS ACCORDION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
