import React, { Component } from 'react'
import './Kitchensink.scss'
import Tag from './Tag'
import SmallStory from './SmallStory'
import SmallStoryList from './SmallStoryList'
import WelcomeHeader from './WelcomeHeader'
import ArticleHeader from './ArticleHeader'
import Quote from './Quote'

export default class Kitchensink extends Component {
  render () {
    return <div className='Kitchensink'>
      <h2 className='Kitchensink-sectionHeading'>Tag</h2>
      <Tag modifiers='blue'>Blue</Tag>
      <Tag modifiers='hotBlue'>Hot blue</Tag>
      <Tag modifiers='green'>Green</Tag>
      <Tag modifiers='seaGreen'>Seagreen</Tag>
      <Tag modifiers='red'>Red</Tag>
      <Tag modifiers='hotRed'>Hot red</Tag>
      <Tag modifiers='purple'>Purple</Tag>
      <Tag modifiers='deepPurple'>Deep purple</Tag>
      <Tag modifiers='teal'>Teal</Tag>
      <Tag modifiers='orange'>Orange</Tag>
      <Tag modifiers='magenta'>Magenta</Tag>

      <h2 className='Kitchensink-sectionHeading'>Tag--blocky</h2>
      <Tag modifiers='blocky blue'>Blue</Tag>
      <Tag modifiers='blocky hotBlue'>Hot blue</Tag>
      <Tag modifiers='blocky green'>Green</Tag>
      <Tag modifiers='blocky seaGreen'>Seagreen</Tag>
      <Tag modifiers='blocky red'>Red</Tag>
      <Tag modifiers='blocky hotRed'>Hot red</Tag>
      <Tag modifiers='blocky purple'>Purple</Tag>
    <Tag modifiers='blocky deepPurple'>Deep purple</Tag>
      <Tag modifiers='blocky teal'>Teal</Tag>
      <Tag modifiers='blocky orange'>Orange</Tag>
      <Tag modifiers='blocky magenta'>Magenta</Tag>

      <h2 className='Kitchensink-sectionHeading'>SmallStory</h2>
      <SmallStory modifiers='hotRed'>
        <Tag modifiers='hotRed'>Tranebær</Tag>
        Tranebær er skyld i galdestensudbrud i Gambias hovedstad, Banjul
      </SmallStory>

      <h2 className='Kitchensink-sectionHeading'>SmallStory--done</h2>
      <SmallStory modifiers='done'>
        <Tag modifiers='blue'>Done</Tag>
        Forskere afviser vands gavnende effekt på mennesker og planter
      </SmallStory>

      <h2 className='Kitchensink-sectionHeading'>SmallStoryList</h2>
      <SmallStoryList>
        <SmallStory modifiers='hotRed'>
          <Tag modifiers='hotRed'>Tranebær</Tag>
          Tranebær er skyld i galdestensudbrud i Gambias hovedstad, Banjul
        </SmallStory>
        <SmallStory modifiers='hotRed'>
          <Tag modifiers='hotRed'>Tranebær</Tag>
          Tranebær er skyld i galdestensudbrud i Gambias hovedstad, Banjul
        </SmallStory>
        <SmallStory modifiers='hotRed'>
          <Tag modifiers='hotRed'>Tranebær</Tag>
          Tranebær er skyld i galdestensudbrud i Gambias hovedstad, Banjul
        </SmallStory>
      </SmallStoryList>

      <h2 className='Kitchensink-sectionHeading'>WelcomeHeader</h2>
      <WelcomeHeader greeting='Godaften' title='Her er dagens nyheder' ctaLabel='Læsetid:' duration='3m 34s' backgroundImageFilename='blueToRedWelcomeHeader.jpg' />
      <WelcomeHeader modifier='morning' greeting='Godmorgen' title='Her er nattens nyheder' ctaLabel='Læsetid:' duration='3m 34s' backgroundImageFilename='purpleToOrangeWelcomeHeader.jpg' />
      <WelcomeHeader modifier='done' title='Det var dagens nyheder' ctaLabel='Læs igen' backgroundImageFilename='blueToRedWelcomeHeader.jpg' />

      <h2 className='Kitchensink-sectionHeading'>ArticleHeader</h2>
      <ArticleHeader title='Spanske grantræsproducenter advarer om muligt bananflueangreb' backgroundImageFilename='blueToRedWelcomeHeader.jpg' />

      <h2 className='Kitchensink-sectionHeading'>Quote</h2>
      <Quote cite='Thomas Edison, CEO at Macrohard'>
          If you don't have anything to say, at least make sure you have a lot of money. And preferably tits.
      </Quote>
    </div>
  }
}
