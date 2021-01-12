export const headings2 = {
  // color: 'red'
}

export const project = (first) => ({
  display: 'flex',
  ...(first && { paddingRight: '200px' }),
  ...(!first && { paddingLeft: '200px' })

})