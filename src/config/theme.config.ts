import { ThemeConfig } from 'antd/es/config-provider/context'

export const customTheme: ThemeConfig = {
  token: {
    fontFamily: "sans-serif",
    colorPrimary: "#ef7d17",
    colorPrimaryHover: "#edd9c7",
  },
  components: {
    Input: {
      fontSize: 14,
      borderRadius: 2,
    },
    Button: {
      fontSize: 14,
    },
    Select: {
      borderRadius: 2,
    },
    DatePicker: {
      borderRadius: 2,
    },
    // Upload: {
    //     borderRadius: 2,
    //     colorBorder:"green"
    // }
  }
}
