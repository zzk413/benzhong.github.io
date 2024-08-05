import React, { useRef, useState, useEffect } from 'react'
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { Container, Title, Frame, Content, toggle } from './styles'
import * as Icons from './components/icons'
import SocialIcons from './components/SocialIcons'


function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean
    name: string | JSX.Element
  }
> (({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [ref, bounds] = useMeasure()
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? bounds.height : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 50,
    },
  })
  // @ts-ignore
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
  return (
    <Frame>
      <Icon style={{...style, ...toggle, opacity: children ? 1 : 0.3, cursor: children? 'pointer':'auto' }} onClick={() => {setOpen(!isOpen)}} />
      <Title style={{...style, ...toggle, cursor: children? 'pointer':'auto'}} onClick={() => {setOpen(!isOpen)}}> 
        {name} 
      </Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  )
})


export default function App() {
  return (
      <Container>
        
        <Tree name="About Me" defaultOpen>
          <div>My name is Ben Zhong
          <br/>
          I am a developer with a focus on data
          </div>
          <Tree name="Work/Projects" >
            <Tree name="Computer Vision Fraud Detection">

              <div>
              Training computer vision models for detecting manipulated images and/or AI 🤖 generated/manipualted images 
              </div>
              <div> 
                A very cool open source tool I am using is 5️⃣1️⃣ <a href = "https://voxel51.com/fiftyone/">Fiftyone</a>
              </div>

            </Tree>
            <Tree name="LLM App">
              <div>
                Working on the backend of a LLM service for summarization and extraction
              </div>
              <div>
                Fine tuning LLM
              </div>
              <div>
                Using AWS Bedrock 🛏️🗿 and Textract
              </div>
              
            </Tree>
            <Tree name="Entity Resolution">
              <div>
                Let's just say I had access to some crazy PII
              </div>
              <a href = "https://senzing.com/what-is-entity-resolution/">More on entity resolution</a>
              
            </Tree>
            <Tree name="Data Engineering with Spark">
              <div>
                I am good at Spark. I wrote good Spark code for 2 years. 
              </div>
            </Tree>
          </Tree>
    
          <Tree name="Play" defaultOpen>
            <Tree name="Skiing" style={{ color: '#37ceff' }}>
              <div>
                I am too lazy to edit the videos but skiing is fun. Here is a place holder instead of a gif till I feel like editing the videos
              </div>
              <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: 300,
                      padding: 10,
                    }}>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background: 'black',
                        borderRadius: 5,
                      }}
                    />
              </div>
            </Tree>
            <Tree name="Cooking">
              <div>
                Currently reading <a href = "https://www.seriouseats.com/the-food-lab-5118015">The Food Lab</a>. This is a really good comprehensive culinary book that is scientific.
              </div>
              <div>
                Another cookbook that is entirely readable is <a href = "https://www.saltfatacidheat.com">The Food Lab</a>
              </div>
            </Tree>
          </Tree>
          
          <Tree name="Open to DE/DS/SWE roles " />
        </Tree>
        <SocialIcons/>
      </Container>
  )
}
