import React, { Component, PropTypes } from 'react'
import SmallStory from './SmallStory'
import Tag from './Tag'
import './SmallStoryList.scss'

export default class SmallStoryList extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const cls = 'SmallStoryList'

    return <div className={cls} {...this.props}>
      <SmallStory>
        <Tag>Tranebær</Tag>
        Tranebær er skyld i galdestensudbrud i Gambias hovedstad, Banjul
      </SmallStory>
      <SmallStory>
        <Tag>Vand</Tag>
        Forskere afviser vands gavnende effekt på mennesker og planter
      </SmallStory>
      <SmallStory>
        <Tag>Vejret</Tag>
        Stormen John raser i Sydsudan: Obama er fortsat tavs
      </SmallStory>
      <SmallStory>
        <Tag>Sporløs</Tag>
        Ulrik Wilbeck er sporløst forsvundet på sexturisme i Thailand
      </SmallStory>
      <SmallStory>
        <Tag>Julefrokosten</Tag>
        Sådan undgår du sløje knald til julefrokosten
      </SmallStory>
      <SmallStory>
        <Tag>Sellout</Tag>
        Simon Juhl er vært for DM i Nespresso
      </SmallStory>
      <SmallStory>
        <Tag>Grantræer</Tag>
        Spanske grantræsproducenter advarer om muligt bananflueangreb
      </SmallStory>
      <SmallStory>
        <Tag>Kæp</Tag>
        Søren Pind er ikke imponeret over Vestagers trylledej
      </SmallStory>
      <SmallStory>
        <Tag>Cykling</Tag>
        Årets Tour de France afholdes syd for Skanderborg
      </SmallStory>
      <SmallStory>
        <Tag>Colombia</Tag>
        Colombia giver fortabt og legaliserer kokain og homoseksuelle ægteskaber
      </SmallStory>
      <SmallStory>
        <Tag>Salsa</Tag>
        Salsa er blevet populært blandt fraskilte, lumre singlemænd
      </SmallStory>
    </div>
  }
}
