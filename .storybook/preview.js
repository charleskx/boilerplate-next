import GlobalStyles from '../src/styles/globals'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles/>
      <Story/>
    </>
  )
]
