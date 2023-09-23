import "../app/components/cw/core/core.css"

import "../app/components/cw/layout/container/container.css"
import "../app/components/cw/layout/column/column.css"
import "../app/components/cw/layout/stack/stack.css"
import '../app/components/cw/layout/divider/divider.css'

import "../app/components/cw/input/button/button.css"
import "../app/components/cw/input/iconbutton/iconbutton.css"
import "../app/components/cw/input/checkbox/checkbox.css"
import "../app/components/cw/input/text/text.css"

import "../app/components/cw/icons/icons.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

