import React from 'react'
import Button from './Button'

const list=['All','Mixes','Music','Live','Cricket','News','Gaming','Comedy','Movies','Cooking','Tech','Education','Travel','Fashion','Sports','Fitness','Vlogs','Podcasts','Documentaries','DIY','Animation']

const ButtonList = () => {
  return (
    <div className="flex flex-wrap gap-1 p-4 bg-gray-50">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
     


    </div>
  )
}

export default ButtonList