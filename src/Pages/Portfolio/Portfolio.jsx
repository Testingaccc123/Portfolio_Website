import React, { useEffect, useState } from 'react';
import Image1 from "../../Assets/Grids.png"
import Image2 from "../../Assets/Grids-1.png"
import Image3 from "../../Assets/Grids-2.png"
import Image4 from "../../Assets/Grids-3.png"
import Image5 from "../../Assets/Grids-4.png"
import Image6 from "../../Assets/Grids-5.png"
import Image7 from "../../Assets/Grids-6.png"
import Image8 from "../../Assets/Grids-7.png"
import Image9 from "../../Assets/Grids-8.png"
import Image10 from "../../Assets/Grids-9.png"
import Image11 from "../../Assets/Begotten-Designs.png"
import Image12 from "../../Assets/Grids-11.png"
import Image13 from "../../Assets/Grids-12.png"
import Image14 from "../../Assets/Grids-13.png"
import Image15 from "../../Assets/Grids-14.png"
import Image16 from "../../Assets/Grids-15.png"
import Image17 from "../../Assets/Grids-16.png"
import Image18 from "../../Assets/Grids-17.png"
import Image19 from "../../Assets/Grids-18.png"
import Image20 from "../../Assets/Grids-19.png"
import Image21 from "../../Assets/Grids-20.png"
import Image22 from "../../Assets/Grids-21.png"
import Image23 from "../../Assets/Grids-22.png"
import Image24 from "../../Assets/Grids-23.png"
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center'>
          <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className='margin'>
        <div className='container-fluid'>
          
        <div className='row mt-5 '>
          <div className='col-md-6'>
            <div className='row mb-3'>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image2} alt=' Project 1' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image3} alt='Project 2' className='img-fluid full-viewport' />
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image4} alt=' Project 3' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image5} alt=' Project 4' className='img-fluid full-viewport' />
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xxl-6 CaseStudy  '>
            <Link to="/CaseStudy1">
              <img className='main' src={Image1} alt='Project' />
              <div className='Overlay'>View</div>
            </Link>
          </div>
        </div>
      
        <div className='row mt-4'>
          <div className='col-md-6 col-xxl-6 col-12 CaseStudy'>
            <Link to="/CaseStudy3 ">
              <img className='main' src={Image10} alt=' Project' />
              <div className='Overlay'>View</div>
            </Link>
          </div>
          <div className='col-md-6 col-xxl-6'>
            <div className='row mb-3'>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image6} alt='Project 7' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image7} alt='Project 8' className='img-fluid full-viewport' />
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image8} alt=' Project 9' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image9} alt=' Project 10' className='img-fluid full-viewport' />
              </div>
            </div>
          </div>
        </div>
      
        <div className='row mt-4'>
          <div className='col-md-6 col-xxl-6'>
            <div className='row mb-3'>
              <div className='col-md-6'>
                <img src={Image12} alt='Project 11' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image13} alt='Project 12' className='img-fluid full-viewport' />
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image14} alt=' Project 13' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image15} alt='Project 14' className='img-fluid full-viewport' />
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xxl-6 CaseStudy'>
            <Link to="/CaseStudy2 ">
              <img className='main' src={Image11} alt='Project' />
              <div className='Overlay'>View</div>
            </Link>
          </div>
        </div>

        <div className='row mt-4 '>
        <div className='col-md-6 col-xxl-6 col-12 CaseStudy'>
            <Link to="/CaseStudy4 ">
              <img className='main' src={Image20} alt=' Project' />
              <div className='Overlay'>View</div>
            </Link>
          </div>
          <div className='col-md-6'>
            <div className='row mb-3'>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image16} alt=' Project 15' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image17} alt='Project 16' className='img-fluid full-viewport' />
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image18} alt=' Project 17' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image19} alt=' Project 18' className='img-fluid full-viewport' />
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-md-6 col-xxl-6'>
            <div className='row mb-3'>
              <div className='col-md-6'>
                <img src={Image21} alt='Project 20' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image22} alt='Project 12' className='img-fluid full-viewport' />
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image23} alt=' Project 13' className='img-fluid full-viewport' />
              </div>
              <div className='col-md-6 col-xxl-6'>
                <img src={Image24} alt='Project 14' className='img-fluid full-viewport' />
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xxl-6 CaseStudy'>
            <Link to="/CaseStudy5 ">
              <img className='main' src={Image20} alt='Project' />
              <div className='Overlay'>View</div>
            </Link>
          </div>
        </div>
      
        {/* Add new project here */}
      </div>
      </div>
      
      )}
    </>

  );
};

export default Portfolio;
