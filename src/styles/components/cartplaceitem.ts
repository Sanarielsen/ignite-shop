import { styled } from "..";

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: '4',

  marginBottom: '24px',
})

export const ImageSection = styled('div', {
  gridColumn: '1',

  'img': {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '8px',
  }
})

export const DescriptionSection = styled('div', {
  gridColumn: '2 / 12 span',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  gap: '1rem',

  'div': {
    display: 'grid',
    gridTemplateRows: 2,
    gap: '1.8rem',
  },

  'div > h4#titleProduct': {
    color: '$gray300'
  },
  
})

export const DescriptionActions = styled('div', {

  display: 'flex !important',

  'span': {
    
    color: '$rose700',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      color: '$rose900',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  },
})