import React, { Component } from 'react'
import './Kitchensink.scss'
import Tag from './Tag'
import SmallStory from './SmallStory'

export default class Kitchensink extends Component {
  render () {
    return <div className='Kitchensink'>
      <h2 className='Kitchensink-sectionHeading'>Tag</h2>
      <Tag modifier='blue'>Blue</Tag>
      <Tag modifier='hotBlue'>Hot blue</Tag>
      <Tag modifier='green'>Green</Tag>
      <Tag modifier='seaGreen'>Seagreen</Tag>
      <Tag modifier='red'>Red</Tag>
      <Tag modifier='hotRed'>Hot red</Tag>
      <Tag modifier='purple'>Purple</Tag>
      <Tag modifier='deepPurple'>Deep purple</Tag>
      <Tag modifier='teal'>Teal</Tag>
      <Tag modifier='orange'>Orange</Tag>
      <Tag modifier='magenta'>Magenta</Tag>

      <h2 className='Kitchensink-sectionHeading'>Tag--blocky</h2>
      <Tag modifier='blocky blue'>Blue</Tag>
      <Tag modifier='blocky hotBlue'>Hot blue</Tag>
      <Tag modifier='blocky green'>Green</Tag>
      <Tag modifier='blocky seaGreen'>Seagreen</Tag>
      <Tag modifier='blocky red'>Red</Tag>
      <Tag modifier='blocky hotRed'>Hot red</Tag>
      <Tag modifier='blocky purple'>Purple</Tag>
      <Tag modifier='blocky deepPurple'>Deep purple</Tag>
      <Tag modifier='blocky teal'>Teal</Tag>
      <Tag modifier='blocky orange'>Orange</Tag>
      <Tag modifier='blocky magenta'>Magenta</Tag>

      <h2 className='Kitchensink-sectionHeading'>SmallStory</h2>
      <SmallStory modifier='hotRed'>
        <Tag modifier='hotRed'>Tranebær</Tag>
        Tranebær er skyld i galdestensudbrud i Gambias hovedstad, Banjul
      </SmallStory>

      <h2 className='Kitchensink-sectionHeading'>SmallStory--done</h2>
      <SmallStory modifier='done'>
        <Tag modifier='blue'>Done</Tag>
        Forskere afviser vands gavnende effekt på mennesker og planter
      </SmallStory>

      <h2 className='Kitchensink-sectionHeading'>StoryList</h2>
    </div>
  }
}
