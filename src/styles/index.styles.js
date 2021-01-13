// About section

export const headings = {
  fontFamily: 'Nunito Sans',
  fontWeight: 700,
  textTransform: 'uppercase',
  color: 'black',
  fontSize: 48,
  marginBottom: 8
}

export const title = {
  ...headings,
  fontSize: 24,
  letterSpacing: '0.2em',
  marginBottom: 60
}

export const aboutMe = {
  fontFamily: 'Nunito Sans',
  fontWeight: 500,
  fontSize: 14,
  color: '#69696',
  lineHeight: '145.1%'
}


// Weapon Section
export const headings2 = {
  marginTop: 96,
  marginBottom: 36,
  fontFamily: 'Nunito Sans',
  fontWeight: 700,
  textTransform: 'uppercase',
  color: 'black',
  fontSize: 30,
}

export const weaponType = {
  ...headings2,
  marginTop: 16,
  fontSize: 24,
  textAlign: 'center',
  textTransform: 'none'
}

export const project = (first) => ({
  display: 'flex',
  ...(first && { paddingRight: '15%' }),
  ...(!first && { paddingLeft: '15%' })

})