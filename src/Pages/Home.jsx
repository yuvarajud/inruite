import React from 'react'
import Header from '../Components/Header/Header';
import './Home.css'
import { IoBarChartSharp } from "react-icons/io5";
import Footer from '../Components/Footer/Footer'
export const Home = () => {
  return (
    <>
      <div >
        <div className=" ">
          <Header />
        </div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.jobvite.com/wp-content/uploads/2023/10/shutterstock_2358872743-1-scaled-e1698330944181.jpg" className="d-block w-100" alt="IMAGE1" style={{height:'70vh'}}/>
        <div className="carousel-caption">
          <h5 className="text-capitalize  text-center">digital transformation</h5>
          <p className="text-capitalize text-center">Reinventing Companies by delivering excellence</p>
          <a href="#" className="btn text-uppercase fw-semibold"  style={{backgroundColor:"#fe5722", color:"white"}}>view our services</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://assets.entrepreneur.com/content/3x2/2000/1703169874-hiring-interview-process-g-1434331704.jpg" className="d-block w-100" alt="image2 " style={{height:'70vh'}}/>
        <div className="carousel-caption">
          <h5 className="text-capitalize">digital transformation</h5>
          <p className="text-capitalize">Reinventing Companies by delivering excellence</p>
          <a href="#" className="btn text-uppercase fw-semibold" style={{backgroundColor:"#fe5722", color:"white"}}>view our services</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.ctfassets.net/p03bi75xct27/47Fx29nT0wcVxPp5jBreAL/175dda14f19038e1e9e0e4c07c79ad7f/Two-colleagues-work-on-their-social-media-recruiting-strategy..jpg?q=80&fm=webp&w=2048" className="d-block w-100" alt="image3" style={{height:'70vh'}}/>
        <div className="carousel-caption">
          <h5 className="text-capitalize">digital transformation</h5>
          <p className="text-capitalize">Reinventing Companies by delivering excellence</p>
          <a href="#" className="btn text-uppercase fw-semibold"  style={{backgroundColor:"#fe5722", color:"white"}}>view our services</a>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className="container my-5">
    <div className="row g-3 mb-4">
      <div className="col-md-4">
        <h6 className="text-uppercase fw-bold">INRECRUIT HR SERVICES PRIVATE LIMITED</h6>
        <h4>Whether you have immediate or pressing goals or long-term dreams, we will work with you to fulfill them.</h4>
      </div>
      <div className="col-md-8 align-self-center">
        <p>Bring to the table win-win survival strategies to ensure proactive domination. Our goal is to build a platform where business establishments across the globe and job aspirants can connect and achieve mutually beneficial results.</p>
      </div>
    </div>
    <div className="row g-3">
      <div className="col-md-3 col-sm-6 p-2">
        <div className="card rounded-0 border-0 h-100 hover-card">
          <img src="https://www.ismartrecruit.com/upload/blog/main_image/social-media-recruitment.webp" alt="image" className="img-fluid h-100" />
          <div className="card-body">
            <h5 className="card-title text-dark text-center">Recruiting</h5>
            <p className="card-text text-dark">Intermediary Between Organisation Recruiting Client And Individual Seeking Employment.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 p-2">
        <div className="card rounded-0 border-0 h-100 hover-card">
          <img src="https://vcconsultingservices.com/wp-content/uploads/2021/02/Consulting-Services.png" alt="image" className="img-fluid h-100" />
          <div className="card-body">
            <h5 className="card-title text-dark text-center">Consulting</h5>
            <p className="card-text text-dark">Engaged In Business Of Giving Expert Advice To People Working In A Professional Or Technical Field.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 p-2">
        <div className="card rounded-0 border-0 h-100 hover-card">
          <img src="https://f.hubspotusercontent30.net/hubfs/3277184/employee%20training%20and%20development.png" alt="image" className="img-fluid h-100" />
          <div className="card-body">
            <h5 className="card-title text-dark text-center">Training</h5>
            <p className="card-text text-dark">Duties and responsibilities include developing instructional materials, organizing learning activities.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 p-2">
        <div className="card rounded-0 border-0 h-100 hover-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7qOst_mq3nCogpvneWJmvjdVh4_Fzte6o2A&s" alt="image" className="img-fluid h-100" />
          <div className="card-body">
            <h5 className="card-title text-dark text-center">Outsourcing</h5>
            <p className="card-text text-dark">Contract to provide a certain number of people to perform certain tasks for another company.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-3 py-3">
      <div className="col-sm-12">
        <p className="text-center fw-semibold">We Always Strive Hard To Find The Right Person For The Right Job.</p>
      </div>
    </div>
  </div>


        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="position-relative h-100">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/64a499c7ed583f23248aa486/Black-male-professional-presenting-at-business-meeting/960x0.jpg?height=474&width=711&fit=bounds"
                  alt="image"
                  className="img-fluid mx-auto d-block h-100 hover-card1"
                />
                <div
                  className="position-absolute bottom-0 start-50 translate-middle-x w-100 p-3"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
                >
                  <h2 className="text-center">About Us</h2>
                  <p className="px-3">
                    WE ALWAYS STRIVE HARD TO FIND THE RIGHT PERSON FOR THE RIGHT JOB.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="fw-semibold">Mission of our company to give best service to customers.</h4>
              <p className="lh-lg" style={{ textAlign: 'justify' }}>
                We are one of the top Human Resource (HR) consultants, providing specialist advice and services to help
                businesses maximize the efficiency of their HR operations and implement appropriate new policies and procedures
                in the best way possible.
              </p>
              <p className="lh-lg" style={{ textAlign: 'justify' }}>
                Our primary domain, Talent management has emerged as an area of focus from a strategic HR standpoint. Our
                primary goal is to assist you in scaling through these processes, such as assessment, documentation, and filing.
                We have professionals who will guide you from the beginning to the end process (from getting an offer letter to
                getting a visa and accommodation).
              </p>
              <a href="#" className="btn text-uppercase fw-semibold text-white" style={{ backgroundColor: '#fe5722' }}>
                Find out more
              </a>
            </div>
          </div>
        </div>

        <div className="container my-5">
  <div className="row g-5">
    <div className="col-md-4">
      <h4 className="h1 text-center fw-bold">Our Core Values</h4>
      <hr />
      <h5 className="h3 fw-semibold lh-base" style={{ textAlign: 'justify', fontSize: '1.25rem' }}>
        Integrity  |    Perseverance
        Accountability  |   Discipline
        Commitment  |  Diligence
      </h5>
    </div>
    <div className="col-md-8">
      <p className="lh-sm fw-light h3" style={{ fontSize: '1.25rem', fontWeight: '300', textAlign: 'justify' }}>
        InRecruit HR Services Private Limited ensures that our recruit meets the expectations of our clients and the right candidate with the desired qualification and relevant work experience get on board.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h4 className="text-center h1" style={{ fontSize: '2rem', fontWeight: '600' }}>20+</h4>
            <p className="text-center" style={{ fontSize: '1rem', fontWeight: '400' }}>Countries Served</p>
          </div>
          <div className="col-sm-4">
            <h4 className="text-center h1" style={{ fontSize: '2rem', fontWeight: '600' }}>200+</h4>
            <p className="text-center" style={{ fontSize: '1rem', fontWeight: '400' }}>Clients Served</p>
          </div>
          <div className="col-sm-4">
            <h4 className="text-center h1" style={{ fontSize: '2rem', fontWeight: '600' }}>1000+</h4>
            <p className="text-center" style={{ fontSize: '1rem', fontWeight: '400' }}>Our Success Stories</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container my-5 ">
  <div className="row">
    <div className="col-md-4">
      <h4 className="fw-semibold h2">Our Practice Area</h4>
      <hr className="w-25 border border-2 rounded-3 border-primary" />
      <p className="lh-base" style={{ textAlign: 'justify', fontSize: '1rem', fontWeight: '400' }}>
        Talent management has emerged as an area of focus from a strategic HR standpoint.
      </p>
      <p className="lh-base" style={{ textAlign: 'justify', fontSize: '1rem', fontWeight: '400' }}>
        Human Resource Consulting Industry has emerged from management consulting and addresses human resource management tasks and decisions.
      </p>
      <div className="float-start">
        <a href="" className="btn text-white text-uppercase p-3 rounded-0 fw-semibold" style={{ backgroundColor: '#fe5722' }}>
          view all services
        </a>
      </div>
    </div>
    <div className="col-md-8">
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="d-flex flex-row justify-content-start gap-2">
            <h4 className="text-primary"><IoBarChartSharp /></h4>
            <div className="d-flex flex-column">
              <p className="fw-bold" style={{ fontSize: '1rem', margin: 0 }}>Overseas Recruitment</p>
              <p style={{ fontSize: '0.875rem', textAlign: 'justify' }}>
                Overseas is a staffing agency. Our primary business is providing a bridge between qualified workers and the businesses that require its services.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="d-flex flex-row justify-content-start gap-2">
            <h4 className="text-primary"><IoBarChartSharp /></h4>
            <div className="d-flex flex-column">
              <p className="fw-bold" style={{ fontSize: '1rem', margin: 0 }}>Contract Hiring</p>
              <p style={{ fontSize: '0.875rem', textAlign: 'justify' }}>
              Employee placed in a short-term position for a set period, with the possibility of being hired full-time when the contract ends.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="d-flex flex-row justify-content-start gap-2">
            <h4 className="text-primary"><IoBarChartSharp /></h4>
            <div className="d-flex flex-column">
              <p className="fw-bold" style={{ fontSize: '1rem', margin: 0 }}>Permanent Staffing</p>
              <p style={{ fontSize: '0.875rem', textAlign: 'justify' }}>
              Process of providing required candidates for long-term employment based on specified candidate factors.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="d-flex flex-row justify-content-start gap-2">
            <h4 className="text-primary"><IoBarChartSharp /></h4>
            <div className="d-flex flex-column">
              <p className="fw-bold" style={{ fontSize: '1rem', margin: 0 }}>Executive Search</p>
              <p style={{ fontSize: '0.875rem', textAlign: 'justify' }}>
              Specialized recruitment service to recruit qualified candidates for senior-level and executive jobs across the public and private sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid my-5 bg-secondary">
    <div className="row">
      <div className="col">
        <div className="container py-4">
          <h4 className="text-capitalize h2 fw-bold text-dark">Industries That We Serve</h4>
          <p className="fs-5">We serve the clients of the following industries by providing quality professional services designed to support their mission and business needs.</p>
          <div className="row g-3">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="card h-100">
                <img src="https://static.vecteezy.com/system/resources/previews/013/365/315/original/manufacturing-icon-design-free-vector.jpg" alt="Manufacturing" className="img-fluid h-100"/>
                <div className="card-body">
                  <h5 className="text-capitalize h5 text-center text-dark">Manufacturing</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZiAwXG8l-xpkyLsJW_3QkAphO2kv0SleCQ&s" alt="Engineering" className="img-fluid h-100"/>
                <div className="card-body">
                  <h5 className="text-capitalize h5 text-center text-dark">Engineering</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="card h-100">
                <img src="https://static.vecteezy.com/system/resources/previews/002/387/825/non_2x/antenna-icon-flat-style-isolated-on-white-background-free-vector.jpg" alt="IT & Telecom" className="img-fluid h-100"/>
                <div className="card-body">
                  <h5 className="text-capitalize h5 text-center text-dark">IT & Telecom</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="card h-100">
                <img src="https://cdn-icons-png.freepik.com/512/542/542424.png" alt="Energy & Resources" className="img-fluid h-100"/>
                <div className="card-body">
                  <h5 className="text-capitalize h5 text-center text-dark">Energy & Resources</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="card h-100">
                <img src="https://cdn-icons-png.flaticon.com/512/5333/5333434.png" alt="Travel & Tourism" className="img-fluid h-100"/>
                <div className="card-body">
                  <h5 className="text-capitalize h5 text-center text-dark">Travel & Tourism</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDyKonzsSMWfvb-7TmvW5hJwa8uzA0EP1hA&s" alt="Accounting & Operations" className="img-fluid h-100"/>
                <div className="card-body">
                  <h5 className="text-capitalize h5 text-center text-dark">Accounting & Operations</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="text-center pb-4">
        <a href="#" className="btn text-white fw-semibold  text-uppercase " style={{backgroundColor: "#fe5722"}}>View All Industries</a>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row g-3">
      <div className="col-md-6">
        <div className="card rounded-0 border-0  hover-card  h-100" style={{backgroundImage:`url(${"https://hrshelf.com/wp-content/uploads/2022/04/Internal-Recruitment.jpg"})`,backgroundColor:'rgba(0,0,0,0.6)', backgroundBlendMode:'multiply'}}>
        
        
        <div className="card-img-overlay align-self-center">
        <h5 className=" text-capitalize fw-bold h3 text-center text-white" >How can we build your business?</h5>
        <p className="lh-base text-white " style={{textAlign:'justify'}}>
        We provide expert opinions, analysis, and strategies to organizations to prevent problems and improve performance.
        </p>
        <div className="text-center">
        <a href="" className="btn text-white text-uppercase rounded-5 px-3 py-2" style={{backgroundColor:'#fe5722'}}>let's work together</a>
        </div>
      
          </div> 
        </div>
      </div>
      <div className="col-md-6">
        <div className="card rounded-0 border-0 hover-card h-100">
          <img src="https://imageio.forbes.com/specials-images/imageserve/63bf071b2f42e71ecce4e9c0/Human-resources-and-CRM/960x0.jpg?height=473&width=711&fit=bounds" alt="cardimage" className="  img-fluid h-100 p-0" />
        
        <div className="card-img-overlay align-self-center">
        <h5 className=" text-capitalize fw-bold h3 text-center">Our people are our
        greatest assests</h5>
        <p className="lh-base" style={{textAlign:'justify'}}>
        We work with you to transform your organization, driving bold ideas and pragmatic solutions
        </p>
        <div className="text-center">
        <a href="" className="btn text-dark text-uppercase rounded-5 px-3 py-2" style={{backgroundColor:'#fff'}}>come work with us</a>
        </div>
      
          </div> 
        </div>
      </div>
    </div>
  </div>

    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="">Explore Blog</h2>
          <hr />
        </div>
      </div>
    </div>
        
      <div className="container bg-light my-5 ">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="">Our Clients</h2>
            <p className="">You're in good hands with our clients. Meet our happy clients.</p>

          </div>
          
          <div class="carousel slide theme-slider text-center carousel-fade my-5" id="controlStyledExample" data-ride="carousel">
                        <div class="carousel-indicators">
                          <button class="" type="button" data-bs-target="#controlStyledExample" data-bs-slide-to="0" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#controlStyledExample" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                          <button type="button" data-bs-target="#controlStyledExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner rounded">
                          <div class="carousel-item">
                            <img class="d-block w-10 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3k8gdPN8T54xI2gtOFtTQ8f1RiBZ0YNlbuA&s" alt="First slide"/>
                          </div>
                          <div class="carousel-item active">
                            <img class="d-block w-10 mx-auto" src="https://i.pinimg.com/originals/4a/d6/a8/4ad6a837521a77adb881c380f35941f2.png" alt="Second slide"/>
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3k8gdPN8T54xI2gtOFtTQ8f1RiBZ0YNlbuA&s" alt="Third slide"/>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#controlStyledExample" data-bs-slide="prev">
                          
                         </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#controlStyledExample" data-bs-slide="next">
                           
                          </button>
                        </div>
                      </div>
                    
        </div>
      </div>
      
     
        <Footer/>
     
   
  
   
  </div>


      

    </>
  )
}
export default Home