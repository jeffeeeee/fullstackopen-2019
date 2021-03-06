import React from 'react'

import Header from './Header'
import Content from './Content';

const Course = ({course}) => (
  <>
    <Header course={course} />
    <Content parts={course.parts} />
  </>
)

export default Course