import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled('div')`
  width: 100%;
  height: 100%;
  // margin: 0;
  padding: 3rem 1rem 10rem 2rem;
  overflow-y: scroll;
  font-family: ui-monospace, monospace;
  font-size: 16px;
  line-height: 24px;
  --webkit-user-select: none;
  --webkit-scrollbar: {width: 0};
  user-select: none;
  display: flex;

  align-items: center;
  justify-content: center;
`

export const Frame = styled('div')`
  position: relative;
  padding: 4px 5px 0px 0px;
  text-overflow: ellipsis;
  // white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: #24292e;
  fill: #24292e;
  margin: auto;
`

export const Title = styled('span')`
  vertical-align: middle;
`

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 18px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`

export const toggle = {
  width: '1em',
  height: '100%',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}
