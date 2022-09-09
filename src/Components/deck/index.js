import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import react from '../../image/cards/react.svg'
import css from '../../image/cards/css.svg'
import blender from '../../image/cards/blender.svg'
import rc from '../../image/cards/rc.svg'
import three from '../../image/cards/three.svg'
import node from '../../image/cards/node.svg'
import ModalDeck from '../modalDeck/index'
import { useTranslation } from 'react-i18next';
import './styles.css'

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
function Deck() {
  const { t } = useTranslation()
const cards = [
  {name: rc, description: `${t("rc")}`},
  {name: blender, description: `${t("blender")}`},
  {name: three, description: `${t("three")}`},
  {name: css, description: `${t("css")}`},
  {name: node, description: `${t("node")}`},
  {name: react, description: `${t("react")}`}
]
  const [gone] = useState(() => new Set()) 
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) 
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = 0.1 //  flicktrigger card to fly
    const dir = xDir < 0 ? -1 : 1 
    if (!down && trigger) gone.add(index) 
    api.start(i => {
      if (index !== i) return 
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // card gone left or right
      const rot = mx / 100 + (isGone ? dir * 10 * 1 : 0) //  card tilts
      const scale = down ? 2.1 : 1 //  cards lift 
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className='deck' key={i} style={{ x, y }}>
          <animated.div
            {...bind(i) }
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i].name})`,
            }}
          />
          <ModalDeck
          description={cards[i].description}
          key={i}/>
        </animated.div>
        
      ))}
    </>
  )
}

export default function AppD() {
  return (
    <>
     
      <Deck />
    
    </>
  )
}