import {keyframes} from "styled-components";



export const ButtonSocialStyle = {
    padding: '0.35rem 0.9rem 0.35rem 2.8rem',
    letterSpacing: '0.08rem',
    iconLeft: '0.4rem',
    borderRadius: '0.7rem',
    iconBorderRadius: '2rem',
    hoverIconBorderRadius: '0.5rem',
    transition: 'all 0.5s',
}

export const ButtonSocialTiny = {
    wrapperWidth: '6rem',
    wrapperHeight: '2rem',
    iconHeight: '1.8rem',
    iconWidth: '1.8rem',
    svgWidth: '1.2rem',
    svgHeight: '1.2rem',
    textMarginLeft: '-6px',
}

export const ButtonSocialSmall = {
    wrapperWidth: '8rem',
    wrapperHeight: '2.1rem',
    iconHeight: '2rem',
    iconWidth: '2rem',
    svgWidth: '1.2rem',
    svgHeight: '1.2rem',
    textMarginLeft: '0',
}

export const ButtonSocialMedium = {
    wrapperWidth: '10rem',
    wrapperHeight: '2.5rem',
    iconHeight: '2.1rem',
    iconWidth: '2.1rem',
    svgWidth: '1.4rem',
    svgHeight: '1.4rem',
    textMarginLeft: '7px',
}

export const ButtonSocialLarge = {
    wrapperWidth: '12rem',
    wrapperHeight: '3rem',
    iconHeight: '2.5rem',
    iconWidth: '2.5rem',
    svgWidth: '1.8rem',
    svgHeight: '1.8rem',
    textMarginLeft: '18px',
}

export const ButtonSocialHuge = {
    wrapperWidth: '15rem',
    wrapperHeight: '4.2rem',
    iconHeight: '3.6rem',
    iconWidth: '3.6rem',
    svgWidth: '2.6rem',
    svgHeight: '2.6rem',
    textMarginLeft: '45px',
}


export const ButtonBaseColor = {
    cyber: '#ff013c',
    cyberSecond: '#02ffd3',
    cyberFont: `#f0e900`,
    svgFont: '#fff',
};

export const ButtonBaseSize = {
    cyberVminSize: 3,
    cyberFontWeight:700,
    cyberLineHeight: `15vmin`,
    cyberLetterSpacing: `0.2vmin`,
}

export const ButtonConstant:{[key:string]:any} = {
    buttonBaseOverflow: 'hidden',
    svgBorderRadius: '16px',
    svgInnerPadding: '0.7em 1em',
    svgInnerPaddingLeft: '0.9em',
    svgFontMove: '100em',
    svgMove:'translateX(1.2em) rotate(45deg) scale(1.1)',
    svgAnimationScaleModerate: '1em',
    svgAnimationScaleIntensity: '1.5em',
    polygon: `polygon(
          0 0,
          100% 0,
          100% 100%,
          95% 100%,
          95% 90%,
          85% 90%,
          85% 100%,
          8% 100%,
          0 70%
    );`,
    clip_0: `polygon(0 0, 0 0, 0 0, 0 0)`,
    clip_1: `polygon(0 2%, 100% 2%, 100% 5%, 0 5%)`,
    clip_2: `polygon(
          0 80%,
          100% 80%,
          100% 100%,
          95% 100%,
          95% 90%,
          85% 90%,
          85% 100%,
          5% 100%,
          0 80%
    )`,
    clip_3: `polygon(0 54%, 100% 54%, 100% 44%, 0 44%)`,
    clip_4: `polygon(0 60%, 100% 60%, 100% 40%, 0 40%)`,
    clip_5: `polygon(0 40%, 100% 40%, 100% 85%, 4% 85%, 0 70%)`,
    clip_6: `polygon(0 63%, 100% 63%, 100% 80%, 3% 80%, 0 70%)`,
    clip_7: `polygon(0 10%, 100% 10%, 100% 0, 0 0)`,


    itemAlign:'center',
    cyberTagBottom: {
        vmin2: '-110%',
        vmin3: '-70%',
        vmin4: '-47%',
        vmin5: '-37%'
    }
}

const CyberAnimationArr = [
    [ButtonConstant.clip_1, ButtonConstant.clip_2, ButtonConstant.clip_2, ButtonConstant.clip_2,ButtonConstant.clip_2,
        ButtonConstant.clip_3,ButtonConstant.clip_3,ButtonConstant.clip_0,ButtonConstant.clip_4,ButtonConstant.clip_4,
        ButtonConstant.clip_0, ButtonConstant.clip_5, ButtonConstant.clip_5, ButtonConstant.clip_0, ButtonConstant.clip_6,
        ButtonConstant.clip_6,ButtonConstant.clip_6,ButtonConstant.clip_6,ButtonConstant.clip_7,ButtonConstant.clip_7,
        ButtonConstant.clip_0,ButtonConstant.clip_5,ButtonConstant.clip_5,ButtonConstant.clip_0,ButtonConstant.clip_0
    ],
    [ButtonConstant.clip_1, ButtonConstant.clip_2, ButtonConstant.clip_2, ButtonConstant.clip_2,ButtonConstant.clip_2,
        ButtonConstant.clip_3,ButtonConstant.clip_3,ButtonConstant.clip_0,ButtonConstant.clip_4,ButtonConstant.clip_4,
        ButtonConstant.clip_0, ButtonConstant.clip_2, ButtonConstant.clip_2, ButtonConstant.clip_0, ButtonConstant.clip_3,
        ButtonConstant.clip_2,ButtonConstant.clip_3,ButtonConstant.clip_4,ButtonConstant.clip_2,ButtonConstant.clip_3,
        ButtonConstant.clip_0,ButtonConstant.clip_2,ButtonConstant.clip_4,ButtonConstant.clip_0,ButtonConstant.clip_0
    ]
]

// 动画特效
export const CyberAnimationBig = keyframes`
  0% {
    clip-path: ${CyberAnimationArr[0][0]};
  }
  2% {
    clip-path: ${CyberAnimationArr[0][1]};
    transform: translate(-1vmin);
  }
  6% {
    clip-path: ${CyberAnimationArr[0][2]};
    transform: translate(1vmin);
  }
  8% {
    clip-path: ${CyberAnimationArr[0][3]};
    transform: translate(-1vmin);
  }
  9% {
    clip-path: ${CyberAnimationArr[0][4]};
  }
  10% {
    clip-path: ${CyberAnimationArr[0][5]};
    transform: translate(1vmin);
  }
  13% {
    clip-path: ${CyberAnimationArr[0][6]};
  }
  13.1% {
    clip-path: ${CyberAnimationArr[0][7]};
    transform: translate(1vmin);
  }
  15% {
    clip-path: ${CyberAnimationArr[0][8]};
    transform: translate(1vmin);
  }
  20% {
    clip-path: ${CyberAnimationArr[0][9]};
    transform: translate(-1vmin);
  }
  20.1% {
    clip-path: ${CyberAnimationArr[0][10]};
    transform: translate(1vmin);
  }
  25% {
    clip-path: ${CyberAnimationArr[0][11]};
    transform: translate(1vmin);
  }
  30% {
    clip-path: ${CyberAnimationArr[0][12]};
    transform: translate(-1vmin);
  }
  30.1% {
    clip-path: ${CyberAnimationArr[0][13]};
  }
  35% {
    clip-path: ${CyberAnimationArr[0][14]};
    transform: translate(-1vmin);
  }
  40% {
    clip-path: ${CyberAnimationArr[0][15]};
    transform: translate(1vmin);
  }
  45% {
    clip-path: ${CyberAnimationArr[0][15]};
    transform: translate(-1vmin);
  }
  50% {
    clip-path: ${CyberAnimationArr[0][17]};
  }
  55% {
    clip-path: ${CyberAnimationArr[0][18]};
    transform: translate(1vmin);
  }
  60% {
    clip-path: ${CyberAnimationArr[0][19]};
  }
  60.1% {
    clip-path: ${CyberAnimationArr[0][20]};
  }
  65% {
    clip-path: ${CyberAnimationArr[0][21]};
    transform: translate(-1vmin);
  }
  68% {
    clip-path: ${CyberAnimationArr[0][22]};
    transform: translate(1vmin);
  }
  80% {
    clip-path: ${CyberAnimationArr[0][23]};
  }
  100% {
    clip-path: ${CyberAnimationArr[0][24]};
  }
`

export const CyberAnimationSmall = keyframes`
  0% {
    clip-path: ${CyberAnimationArr[1][0]};
  }
  2% {
    clip-path: ${CyberAnimationArr[1][1]};
    transform: translate(-1vmin);
  }
  6% {
    clip-path: ${CyberAnimationArr[1][2]};
    transform: translate(1vmin);
  }
  8% {
    clip-path: ${CyberAnimationArr[1][3]};
    transform: translate(-1vmin);
  }
  9% {
    clip-path: ${CyberAnimationArr[1][4]};
  }
  10% {
    clip-path: ${CyberAnimationArr[1][5]};
    transform: translate(1vmin);
  }
  13% {
    clip-path: ${CyberAnimationArr[1][6]};
  }
  13.1% {
    clip-path: ${CyberAnimationArr[1][7]};
    transform: translate(1vmin);
  }
  15% {
    clip-path: ${CyberAnimationArr[1][8]};
    transform: translate(1vmin);
  }
  20% {
    clip-path: ${CyberAnimationArr[1][9]};
    transform: translate(-1vmin);
  }
  20.1% {
    clip-path: ${CyberAnimationArr[1][10]};
    transform: translate(1vmin);
  }
  25% {
    clip-path: ${CyberAnimationArr[1][11]};
    transform: translate(1vmin);
  }
  30% {
    clip-path: ${CyberAnimationArr[1][12]};
    transform: translate(-1vmin);
  }
  30.1% {
    clip-path: ${CyberAnimationArr[1][13]};
  }
  35% {
    clip-path: ${CyberAnimationArr[1][14]};
    transform: translate(-1vmin);
  }
  40% {
    clip-path: ${CyberAnimationArr[1][15]};
    transform: translate(1vmin);
  }
  45% {
    clip-path: ${CyberAnimationArr[1][15]};
    transform: translate(-1vmin);
  }
  50% {
    clip-path: ${CyberAnimationArr[1][17]};
  }
  55% {
    clip-path: ${CyberAnimationArr[1][18]};
    transform: translate(1vmin);
  }
  60% {
    clip-path: ${CyberAnimationArr[1][19]};
  }
  60.1% {
    clip-path: ${CyberAnimationArr[1][20]};
  }
  65% {
    clip-path: ${CyberAnimationArr[1][21]};
    transform: translate(-1vmin);
  }
  68% {
    clip-path: ${CyberAnimationArr[1][22]};
    transform: translate(1vmin);
  }
  80% {
    clip-path: ${CyberAnimationArr[1][23]};
  }
  100% {
    clip-path: ${CyberAnimationArr[1][24]};
  }
`

export const SvgAnimationScarcely = keyframes`
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
`

export const SvgAnimationModerate = keyframes`
  from {
    transform: translateY(0.3em);
  }

  to {
    transform: translateY(-0.3em);
  }
`

export const SvgAnimationIntensity = keyframes`
  from {
    transform: translateY(0.5em);
  }

  to {
    transform: translateY(-0.5em);
  }
`
