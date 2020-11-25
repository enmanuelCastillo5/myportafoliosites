import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from '../components/educations'
import Experience from '../components/experience'
import Skills from '../components/Skills'


const Resume = () => {
    return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div className="" style={{textAlign: 'center'}}>
                            <img
                                src="https://i.pinimg.com/474x/83/a9/a1/83a9a144ab03763667b8d8aa381bb441.jpg"
                                alt="Avatar"
                                style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Enmanuel Castillo</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%' }}/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, dicta quasi! Vero aut unde consectetur aperiam quis qui blanditiis cumque ullam aliquam modi aliquid, eius est eaque ipsum ipsam quos.
                        Provident, temporibus debitis odit voluptatem laudantium iusto dolores a quos architecto</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%' }}/>
                        <h5>Address</h5>
                        <p>calle las cañadas #83, las colinas</p>
                        <h5>Phone</h5>
                        <p>(809)-705-9525</p>
                        <h5>Email</h5>
                        <p>example@mail.com</p>
                        <h5>Web</h5>
                        <p>mySite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%' }}/>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>

                        <Education
                            startYears='2012'
                            endYears='2016'
                            schoolName='My University'
                            schooldescription='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                         />

                        <Education
                            startYears='2016'
                            endYears='2020'
                            schoolName='my 2nd University'
                            schooldescription='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                         />
                         <hr style={{borderTop: '3px solid #e22947'}}/>

                         <h2>Experience</h2>
                         <Experience
                         startYears='2014'
                         endYears='2018'
                         jobName='empresa'
                         jobDescription='worker' />


                        <Experience
                            startYears='2014'
                            endYears='2018'
                            jobName='empresa'
                            jobDescription='worker' />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <Skills
                            skill='javascript'
                            progress={60} />

                        <Skills
                            skill='React Js'
                            progress={50} />


                        <Skills
                            skill='Ruby On Rails'
                            progress={30} />


                        <Skills
                            skill='nodeJs'
                            progress={40} />



                    </Cell>
                </Grid>
            </div>
    )
}
export default Resume