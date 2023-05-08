/** @type { import('@storybook/html').Preview } */

const customViewports = {
  small:{
    name: "small",
    styles:{
      width:"360px",
      height:"540px"
    }
  },
  medium:{
    name:"medium",
    styles:{
      width:"1024px",
      height:"1200px"
    }
  }
}
const preview = {
  parameters: {
    viewMode: 'docs',
    previewTabs: { 'storybook/docs/panel': null, canvas: { hidden: true } },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViwport: 'someDefault'
    },
  },
  
  

};

export default preview;
