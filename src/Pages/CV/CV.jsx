import React from 'react';
import Photo from "../../Assets/memoji.png";
import "./CV.css";

const CV = () => {
  return (
    <>
      <div className='Cv_Container'>

        <div className="Flex1">
          <div className="Flex_Item1">
            <img className='cv_img' src={Photo} alt="profile" />
          </div>
          <div className="Flex_Item2"><span>
            Hey, my name is <strong>Benjamin Murdy</strong>, I am a <strong>Digital Designer</strong> from Virginia. I work with{" "}
            <strong>Graphic Design</strong> including branding, <strong>UI/UX Design</strong>, and I dabble in{" "}
            <strong>Illustration Design</strong>. I am self-taught for the most part and have been a Designer since around{" "}
            <strong>2016</strong>.
          </span></div>
          <div className="Flex_Item3 text-end">
            <h3>Benjamin Logan Murdy</h3>
            <span className="font">(He/Him)</span>
            <br />
            <span className="font">Digital Designer and Entrepreneur</span>
          </div>
        </div>
        <div className='Flex'>
          <div className="flex_item2">
            <div className='mb-5'>
              <h3>Education</h3>
              <h5 className='mt-3'>Advanced Diploma</h5>
              <span>Cosby High School, Chesterfield, VA (2018-2022)</span>
            </div>
            <div className='mb-5'>
              <h3>Achievements</h3>
              <h5>Gifted Education Program</h5>
              <span>Member</span>
              <h5>Miniature Economy</h5>
              <span>Winner</span>
              <h5>Gained Clients</h5>
              <span>Worked with over 100 clients</span>
            </div>
            <div>
              <h3>Software</h3>
              <ul className="bullet-list">
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Premiere Pro</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h3 className='mt-5'>Interests</h3>
              <h5>Humanities</h5>
              <span>Ancient History, War, Philosophy, and Theology</span>
              <h5>Literature</h5>
              <span>Historical Non-Fiction and Classical Fiction</span>
              <h5>Music</h5>
              <span>Crooner, Classical, Country, Pop Rock, and Classic Rock</span>
              <h5>Exercise</h5>
              <span>Working out and enjoying the outdoors</span>
            </div>
          </div>

          <div className="flex_item2">
            <h3>Experience</h3>
            <div className='mt-3'>
              <h5>Freelance Graphic Designer</h5>
              <span>Richmond, VA (2018-2022)</span>
              <ul className="bullet-list">
                <li>Started a business utilizing creative skills using Adobe Illustrator, PaintToolSai, and Adobe Photoshop</li>
                <li>Developed complex graphics and hand illustrated designs</li>
                <li>Used prior knowledge to create and deliver quality logos, meeting deadlines in a timely manner and staying punctual whilst maintaining quality </li>
                <li>Began to scale clientele, using adverts and social media such as: Instagram, Twitter, and Discord with 5+ postings per week  </li>
                <li>Scaled freelancing operation from less than 5 clients to 100+, by exhibiting professional levels of communication</li>
              </ul>
            </div>
            <div className='mb-4'>
              <h5>Visual Designer</h5>
              <span>NDA (Digital Asset Startup) Dover, DE (2021-2022)</span>
              <ul className="bullet-list">
                <li>Designed visual assets to be used for digital marketing campaigns, such as social media graphics, which increased user engagement on twitter</li>
                <li>Assisted in the creation of a user-friendly and visually engaging website layout working cooperatively in Adobe XD</li>
              </ul>
            </div>
            <div className='mb-5'>
              <h5>Graphic Designer</h5>
              <span>PickShare, Dover, DE (2023-Present) </span>
              <ul className="bullet-list">
                <li>Utilized abilities to create a UI with prototyping for developers to understand flow, in turn increasing productivity</li>
                <li>Produced graphic elements and visual content for PickShare, enhancing its aesthetical appeal</li>
                <li>Developing more styles and skills, incorporating current trends to improve appeal</li>
              </ul>
            </div>
          </div>

          <div className="flex_item ms-3">
            <div className='mb-5'>
              <h3>Contact</h3>
              <h5 className='mt-3'>Email</h5>
              <span>benjaminmurdy@gmail.com</span>
            </div>
            <div className='mb-5'>
              <h3>Languages</h3>
              <h5 className='mt-3'>English</h5>
              <span>Fluent</span>
              <h5 className='mt-3'>Spanish</h5>
              <span>Beginner</span>
              <h5 className='mt-3'>Latin</h5>
              <span>Beginner</span>
            </div>
            <div className='mb-5'>
              <h3>Abilities</h3>
              <ul className="bullet-list">
                <li>Creativity</li>
                <li>Responsibility</li>
                <li>Team leadership</li>
                <li>Effective listening & orating</li>
                <li>Public speaking</li>
                <li>Written communications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CV;
