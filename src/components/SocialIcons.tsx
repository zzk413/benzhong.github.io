import React, { useRef, useState, useEffect } from 'react'
import './SocialIcons.css'
import resume from "./Resume.pdf"
import useMeasure from 'react-use-measure'
import { useSpring, a } from '@react-spring/web'
interface IconProps extends React.SVGProps<SVGSVGElement> {
    style?: React.CSSProperties;
    name: string;
    svgPath: string;
    href?: string;
  }

  
const LinkedIn = "M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
const Email = "M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
const mailto: string = "mailto:benzhong2014@gmail.com? &subject=Hello! &body=Let's connect on LinkedIn"

const CV = "M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"

const SvgIcon: React.FC <IconProps> = ({ style, name, svgPath, href, ...rest })=> (
    (<a href = {href} target="_blank" rel="noopener noreferrer" >
      <svg className={`svgicon ${name}`}  style={{...style}} {...rest} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g>
          <path d={svgPath}/>
        </g>
      </svg>
    </a>)
  )
const EntityResolution = "M20 3c0-1.657-1.344-3-3-3s-3 1.343-3 3c0 .312.061.606.149.889l-4.21 3.157c.473.471.878 1.01 1.201 1.599l4.197-3.148c.477.316 1.048.503 1.663.503 1.656 0 3-1.343 3-3zm-2 0c0 .551-.448 1-1 1s-1-.449-1-1 .448-1 1-1 1 .449 1 1zm3 12.062c1.656 0 3-1.343 3-3s-1.344-3-3-3c-1.281 0-2.367.807-2.797 1.938h-6.283c.047.328.08.66.08 1s-.033.672-.08 1h6.244c.396 1.195 1.509 2.062 2.836 2.062zm-1-3c0-.551.448-1 1-1s1 .449 1 1-.448 1-1 1-1-.448-1-1zm-20-.062c0 2.761 2.238 5 5 5s5-2.239 5-5-2.238-5-5-5-5 2.239-5 5zm2 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm7.939 4.955l4.21 3.157c-.088.282-.149.576-.149.888 0 1.657 1.344 3 3 3s3-1.343 3-3-1.344-3-3-3c-.615 0-1.186.187-1.662.504l-4.197-3.148c-.324.589-.729 1.127-1.202 1.599zm6.061 4.045c0-.551.448-1 1-1s1 .449 1 1-.448 1-1 1-1-.449-1-1z"

interface SocialIconProp {
  // raised: boolean
}


const SocialIcons: React.FC<SocialIconProp> = () => {
  const [isOpen, setOpen] = useState(true)

  const [ref, bounds] = useMeasure()
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? bounds.height : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 50,
    },
  })
  return (
      <div id="footer">
          <SvgIcon svgPath = {LinkedIn} 
          href = 'http://www.linkedin.com/in/benzhong' 
          name = 'linkedin' />
          <SvgIcon 
          svgPath = {Email} 
          href = {mailto}
          name = 'email' />
          <SvgIcon svgPath = {CV} href = {resume} name = 'cv' fill-rule="evenodd" clip-rule="evenodd"/>
      </div>
  );
};




export default SocialIcons

