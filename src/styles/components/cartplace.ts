import { styled } from "..";

export const Container = styled('main', {
  display: 'var(--open-cart)',

  position: 'fixed', 
  top: 0,
  right: 0,
  zIndex: 100, 

  backgroundColor: '$gray800',

  gridTemplateRows: 'auto 1fr auto',
  width: '800px',
  height: '100%', 

  padding: '4rem',

  'h3': {
    paddingBottom: '1rem',
  }
})

export const CloseButton = styled('div', {

  position: 'fixed',
  padding: '1.5rem',
  right: 0,
  top: 0,
})

export const ListItems = styled('div', {
  overflowY: 'auto',
  paddingTop: '2rem',

  /* For Chrome, Edge, Safari */
  '&::-webkit-scrollbar': {
    width: '8px',   // scrollbar width
  },
  '&::-webkit-scrollbar-track': {
    background: '$green500', // track color
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$green500', // thumb color
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '$green500',
  },
  '&::-webkit-scrollbar-button': {
    display: 'none',
  },

  /* For Firefox */
  scrollbarWidth: 'thin',
  scrollbarColor: '#c4c4cc #121214',
  
})

export const Footer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, auto)',

  paddingTop: '2rem',

  gap: '1.4rem',

  'p.boldValue': {
    fontWeight: 'bold',
  },

  'p.rightText': {
    textAlign: 'right',
  },

  'button': {
    backgroundColor: '$green500',

    height: '70px',
    borderRadius: '8px',
    
    fontWeight: 'bold'
  },

  'button.fullCollumn': {
    gridColumn: '1 / span 2',
  },

  'button:hover': {
    backgroundColor: '$green300'
  },
})