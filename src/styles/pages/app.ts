import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'relative',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const CartIcon = styled('div', {
  padding: '12px',
  backgroundColor: '#202024',
  borderRadius: '6px',

  '&:hover': {
    backgroundColor: '#E1E1E6',
  }
})

export const CartItemsCount = styled('div', {
  position: 'absolute',
  top: '1rem',
  right: '-8px',
  marginBottom: '2rem',
  padding: '4px',

  borderRadius: '4px',

  backgroundColor: '$green500'
})