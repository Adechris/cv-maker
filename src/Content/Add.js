import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  Envelope,
  EnvelopeAtFill,
  Facebook,
  Flag,
  FlagFill,
  GenderAmbiguous,
  GenderFemale,
  GenderTrans,
  GeoAltFill,
  Globe,
  Globe2,
  Mailbox,
  Person,
  Phone,
  TelephoneXFill,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [pic, setPic] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  const [tertiary, setTertiary] = useState("");
  const [course, setCourse] = useState("");
  const [gradDate1, setGradDate1] = useState("");
  const [qualification, setQualification] = useState("");

  const [secondary, setSecondary] = useState("");
  const [gradDate2, setGradDate2] = useState("");
  const [desc, setDesc] = useState("");
  const [qualification2, setQualification2] = useState("");

  const [primary, setPrimary] = useState("");
  const [gradDate3, setGradDate3] = useState("");

  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");

  const [work1, setWork1] = useState("");
  const [work2, setWork2] = useState("");

  const [workFrom, setWorkFrom] = useState("");
  const [workTo, setWorkTo] = useState("");

  const [workFrom2, setWorkFrom2] = useState("");
  const [workTo2, setWorkTo2] = useState("");

  const [place, setPlace] = useState("");
  const [place2, setPlace2] = useState("");

 






 

  return (
    <div>
      <h4 className="text-center bg-primary mb-5 text-white">RESUME BUILDER</h4>
      <Container>
        <div className="text-center">
          <h4>STUDENT DETAILS</h4>
        </div>
        <Form>
          {/* <input
          className="form-control"
          type='file'
          value={pic}
          onChange={(e)=>setPic(e.target.value)}
          /> */}
          <Row>
            <Col>
              <label>Surname</label>
              <input
                type="text"
                placeholder=" Surname*"
                className="form-control shadow-none"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
              />
            </Col>
            <Col>
              <label>Middle Name</label>
              <input
                type="text"
                placeholder="First name*"
                className="form-control shadow-none"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label className="mt-3">Last Name</label>
              <input
                type="text"
                placeholder="Last name*"
                className="form-control shadow-none"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Col>
            <Col>
              <label className="mt-3">Email</label>
              <input
                type="email"
                placeholder="Email*"
                className="form-control shadow-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label className="mt-3">Phone Number</label>
              <input
                type="number"
                placeholder="Phone Number*"
                className="form-control shadow-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
            <Col>
              <label className="mt-3">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="form-control shadow-none"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            {/* <Col>
              <Form.Label className="mt-3">Nationality</Form.Label>
              <input
                className="form-control shadow-none "
                placeholder="Enter Your Country "
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
                
            </Col> */}

            {/* <Col>
              <Form.Label className="mt-3">Gender</Form.Label>
              <Form.Select
                className="form-control shadow-none "
                defaultValue="choose..."
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value=" choose...">choose...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </Form.Select>
            </Col> */}
          </Row>
        </Form>

        {/* EDUCATION DETAIL */}
        <Container>
          <div className="mt-5">
            <h4>EDUCATION DETAILS</h4>
          </div>
          <Form>
            <Row>
              <Col>
                <label className="mt-3">Tertiary</label>
                <input
                  type="text"
                  placeholder="College / University"
                  className="form-control shadow-none"
                  value={tertiary}
                  onChange={(e) => setTertiary(e.target.value)}
                />
              </Col>

              <Col>
                <label className="mt-3">Graduation Year</label>
                <input
                  type="date"
                  className="form-control shadow-none"
                  value={gradDate1}
                  onChange={(e) => setGradDate1(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="mt-3">Qualification</label>
                <input
                  placeholder="M.Sc/B.Sc/HND/OND"
                  type="text"
                  className="form-control shadow-none"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label className="mt-2">Course of Study</Form.Label>
                <input
                  className="form-control shadow-none "
                  defaultValue="choose..."
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </Col>
            </Row>
          </Form>
        </Container>
        {/* SECONDARY */}
        <Container>
          <Form className="mt-4">
            <Row>
              <Col>
                <label className="mt-3">Secondary</label>
                <input
                  type="text"
                  placeholder="Rose Int'L School"
                  className="form-control shadow-none"
                  value={secondary}
                  onChange={(e) => setSecondary(e.target.value)}
                />
              </Col>

              <Col>
                <label className="mt-3">Graduation Year</label>
                <input
                  type="date"
                  className="form-control shadow-none"
                  value={gradDate2}
                  onChange={(e) => setGradDate2(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="mt-3">Qualification</label>
                <input
                  placeholder="School Leaving Testimonial"
                  type="text"
                  className="form-control shadow-none"
                  value={qualification2}
                  onChange={(e) => setQualification2(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label className="mt-2">Course of Study</Form.Label>
                <Form.Select
                  className="form-control shadow-none "
                  defaultValue="choose..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                >
                  <option value=" choose...">choose...</option>
                  <option value="Sciences">Sciences</option>
                  <option value="Arts">Arts</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Others">Others</option>
                </Form.Select>
              </Col>
            </Row>
          </Form>
        </Container>
        {/* Primary */}
        <Container>
          <Form className="mt-4">
            <Row>
              <Col>
                <label className="mt-3">Primary</label>
                <input
                  type="text"
                  placeholder="Rose Int'L School"
                  className="form-control shadow-none"
                  value={primary}
                  onChange={(e) => setPrimary(e.target.value)}
                />
              </Col>

              <Col>
                <label className="mt-3">Graduation Year</label>
                <input
                  type="date"
                  className="form-control shadow-none"
                  value={gradDate3}
                  onChange={(e) => setGradDate3(e.target.value)}
                />
              </Col>
            </Row>
          </Form>
        </Container>

        <Container className="mt-5">
          <div className="text-start">
            <h4>WORK EXPERIENCE</h4>
          </div>
          <Row>
            <Col>
            <label className="mt-3">Experience 1</label>
          <textarea
            placeholder="Experience goes here"
            className="form-control shadow-none"
            value={work1}
            onChange={(e) => setWork1(e.target.value)}
          />
            </Col>
            <Col>
            <label className="mt-3">Place of Work</label>
              <input
                  placeholder="Place of Work"
                type="text"
                className="form-control shadow-none"
                value={place2}
                onChange={(e)=>setPlace2(e.target.value)}
              />
            </Col>
          </Row>
         
          <Row>
            <Col>
              <label className="mt-3">From which Year</label>
              <input
               type="text"
               placeholder="From"
                className="form-control shadow-none"
                value={workFrom}
                onChange={(e)=>setWorkFrom(e.target.value)}
              />
            </Col>
            <Col>
              <label className="mt-3">To which Year</label>
              <input
                 type="text"
                 placeholder="To"
                className="form-control shadow-none"
                value={workTo}
                onChange={(e)=>setWorkTo(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col>
            <label className="mt-3">Experience 2</label>
          <textarea
            placeholder="Experience goes here"
            type="text"
            className="form-control shadow-none"
            value={work2}
            onChange={(e) => setWork2(e.target.value)}
          />
            </Col>
            <Col>
            <label className="mt-3">Place of Work</label>
              <input
                  placeholder="Place of Work"
                type="text"
                className="form-control shadow-none"
                value={place}
                onChange={(e)=>setPlace(e.target.value)}
              />
            </Col>
          </Row>
         
          <Row>
            <Col>
              <label className="mt-3">From which Year</label>
              <input
              placeholder="From"
                 type="text"
                className="form-control shadow-none"
                value={workFrom2}
                onChange={(e)=>setWorkFrom2(e.target.value)}
              />
            </Col>

            <Col>
              <label className="mt-3">To which Year</label>
              <input
                  placeholder="To"
                type="text"
                className="form-control shadow-none"
                value={workTo2}
                onChange={(e)=>setWorkTo2(e.target.value)}
              />
            </Col>
          </Row>
        </Container >
       
               {/* SKILLS */}
               <Container>
          <div className="mt-5" >
            <h4 className="text-start">SKILLS</h4>
          </div>
        
          
          <Form>
            <Row>
              <Col>
                <input
                  type="text"
                  placeholder="skill1"
                  value={skill1}
                  onChange={(e) => setSkill1(e.target.value)}
                  className="form-control shadow-none"
                />
              </Col>
              <Col>
                <input
                  type="text"
                  placeholder="skill2"
                  value={skill2}
                  onChange={(e) => setSkill2(e.target.value)}
                  className="form-control shadow-none"
                />
              </Col>
            </Row>
          </Form> 
        </Container>


        {/* RESULTS */}

        <div style={{marginTop:'100px'}}>
          <div className="">
            <div
              className="text-center"
              style={{
                // backgroundColor: "darkblue",
                // width: "210px",
                // color: "white",
              }}
            >
              <h6 className="">PERSONAL INFORMATION</h6>
              <p className="fs-5 text-uppercase"> {surName} {firstName}  {lastName}</p>
              <div>
                {/* <h6 className="">Contact</h6> */}
                <p>
                  <EnvelopeAtFill />{email}
                </p>
                <p>
                  <TelephoneXFill /> {phone}
                </p>
                <p>
                  <GeoAltFill /> {address}
                </p>
              </div>
            </div>
             

            <div className=" ">
              <div>
                <hr />
                <h6>OBJECTIVE</h6>
              </div>
              <div>
               
                <hr />
                <h6>EDUCATION</h6>
              </div>
              <h6>Tertiary Education</h6>
              <p>{tertiary}</p>
              <p>{gradDate1}</p>
              <p>{course}</p>
              <p>{qualification}</p>
              <h6>Secondary Education</h6>
              <p>{secondary}</p>
              <p>{gradDate2}</p>
              <p>{qualification2}</p>
              <p>{desc}</p>
              <h6>Primary Education</h6>
              <p>{primary}</p>
              <p>{gradDate3}</p>
            </div>
            <hr />
            <h6>EXPERIENCE</h6>
                <ul>
                  <li>{work1}</li>
                  <div><GeoAltFill/>  {place2} </div>
                <div>{workFrom} - {workTo}</div>
                </ul>
                <ul>
                <li>{work2}</li>
                <div><GeoAltFill/>  {place}</div>
                <div> {workFrom2} -  {workTo2}</div>
                </ul>
              </div>
              <div>
                <hr/>
                <div>
                <h6 className="">Skills</h6>
                <ul>
                  <li>{skill1}</li>
                </ul>
                <ul>
                  <li>{skill2}</li>
                </ul>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Add;
