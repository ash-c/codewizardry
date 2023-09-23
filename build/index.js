var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links11,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/components/core/core.css
var core_default = "/build/_assets/core-XDIBSMEY.css";

// app/components/core/core.tsx
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function links9() {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
    },
    { rel: "stylesheet", href: core_default },
    ...links3(),
    ...links(),
    ...links2(),
    ...links5(),
    ...links4(),
    ...links8(),
    ...links6(),
    ...links7(),
    ...IconLinks()
  ];
}
var Core = ({ children }) => /* @__PURE__ */ jsxDEV2(Fragment, { children }, void 0, !1, {
  fileName: "app/components/core/core.tsx",
  lineNumber: 47,
  columnNumber: 10
}, this);

// app/components/types/Gap.ts
var GapType = {
  none: "gap-none",
  xsmall: "gap-xsmall",
  small: "gap-small",
  medium: "gap-medium",
  large: "gap-large",
  xlarge: "gap-xlarge"
};

// app/components/layout/box/Box.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Box = ({ as: Tag = "div", children, ...rest }) => /* @__PURE__ */ jsxDEV3(Tag, { ...rest, children }, void 0, !1, {
  fileName: "app/components/layout/box/Box.tsx",
  lineNumber: 9,
  columnNumber: 10
}, this);

// app/components/layout/container/container.css
var container_default = "/build/_assets/container-MBFJQ7UX.css";

// app/components/layout/container/Container.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links2 = () => [
  {
    rel: "stylesheet",
    href: container_default
  }
], Container = ({ children, ...rest }) => /* @__PURE__ */ jsxDEV4(Box, { ...rest, className: "cw-container", children }, void 0, !1, {
  fileName: "app/components/layout/container/Container.tsx",
  lineNumber: 24,
  columnNumber: 5
}, this);

// app/components/layout/column/Column.tsx
import clsx from "clsx";

// app/components/layout/column/column.css
var column_default = "/build/_assets/column-SDWVDONW.css";

// app/components/layout/column/Column.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var links = () => [
  {
    rel: "stylesheet",
    href: column_default
  }
], Column = ({
  as: Tag = "div",
  gap = "medium",
  children,
  className
}) => /* @__PURE__ */ jsxDEV5(Box, { as: Tag, className: clsx("cw-column", className, GapType[gap]), children }, void 0, !1, {
  fileName: "app/components/layout/column/Column.tsx",
  lineNumber: 33,
  columnNumber: 5
}, this);

// app/components/layout/stack/Stack.tsx
import clsx2 from "clsx";

// app/components/layout/stack/stack.css
var stack_default = "/build/_assets/stack-INKT3JXW.css";

// app/components/layout/stack/Stack.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var links3 = () => [
  {
    rel: "stylesheet",
    href: stack_default
  }
], Stack = ({
  as: Tag = "div",
  children,
  gap = "medium",
  className,
  ...rest
}) => /* @__PURE__ */ jsxDEV6(
  Box,
  {
    as: Tag,
    className: clsx2("cw-stack", GapType[gap], className),
    ...rest,
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/layout/stack/Stack.tsx",
    lineNumber: 31,
    columnNumber: 5
  },
  this
);

// app/components/layout/divider/Divider.tsx
import clsx3 from "clsx";

// app/components/layout/divider/divider.css
var divider_default = "/build/_assets/divider-HZFEAXS5.css";

// app/components/layout/divider/Divider.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var links5 = () => [
  {
    rel: "stylesheet",
    href: divider_default
  }
], Divider = ({
  colour = "medium",
  className,
  ...rest
}) => /* @__PURE__ */ jsxDEV7("hr", { ...rest, className: clsx3(colour, className) }, void 0, !1, {
  fileName: "app/components/layout/divider/Divider.tsx",
  lineNumber: 29,
  columnNumber: 10
}, this);

// app/components/input/button/button.css
var button_default = "/build/_assets/button-RSRR3XT4.css";

// app/components/input/button/Button.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var links4 = () => [
  {
    rel: "stylesheet",
    href: button_default
  }
], Button = ({
  children,
  colour = "primary",
  StartIcon,
  EndIcon,
  ...rest
}) => {
  if (StartIcon && EndIcon)
    throw new Error(
      "Buttons can only have either a Start or End Icon, not both."
    );
  return /* @__PURE__ */ jsxDEV8("button", { ...rest, className: colour, children: [
    StartIcon && /* @__PURE__ */ jsxDEV8(StartIcon, {}, void 0, !1, {
      fileName: "app/components/input/button/Button.tsx",
      lineNumber: 46,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV8("span", { children }, void 0, !1, {
      fileName: "app/components/input/button/Button.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    EndIcon && /* @__PURE__ */ jsxDEV8(EndIcon, {}, void 0, !1, {
      fileName: "app/components/input/button/Button.tsx",
      lineNumber: 48,
      columnNumber: 19
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/input/button/Button.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
};

// app/components/input/checkbox/Checkbox.tsx
import clsx4 from "clsx";

// app/components/input/checkbox/checkbox.css
var checkbox_default = "/build/_assets/checkbox-SNFIP2GY.css";

// app/components/input/checkbox/Checkbox.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var links6 = () => [
  {
    rel: "stylesheet",
    href: checkbox_default
  }
], Checkbox = ({ label, ...rest }) => /* @__PURE__ */ jsxDEV9(
  "label",
  {
    className: clsx4(
      [
        "checkbox",
        { disabled: rest.disabled },
        { gap: !!label }
      ]
    ),
    children: [
      /* @__PURE__ */ jsxDEV9("input", { type: "checkbox", ...rest }, void 0, !1, {
        fileName: "app/components/input/checkbox/Checkbox.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      label
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/input/checkbox/Checkbox.tsx",
    lineNumber: 22,
    columnNumber: 5
  },
  this
);

// app/components/input/text/Text.tsx
import clsx5 from "clsx";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

// app/components/input/text/text.css
var text_default = "/build/_assets/text-LO33FLV6.css";

// app/components/input/text/Text.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var links7 = () => [
  {
    rel: "stylesheet",
    href: text_default
  }
], Text = ({
  value = "",
  helperText,
  errorText,
  label,
  placeholder,
  readOnly,
  disabled,
  required,
  onFocus = () => null,
  onBlur = () => null,
  onChange = () => null,
  ...rest
}) => {
  let [hasPlaceholder, setHasPlaceholder] = useState(!!placeholder), [isFocused, setIsFocused] = useState(!1), [text, setText] = useState(value);
  useEffect(() => {
    text?.length > 0 ? setHasPlaceholder(!0) : placeholder || setHasPlaceholder(!1);
  }, [text, placeholder]), useEffect(() => {
    value !== text && (setText(value), value?.length <= 0 && setIsFocused(!1));
  }, [value, text]);
  let handleFocusChange = useCallback((focus) => {
    setIsFocused(focus);
  }, []), labelCss = useCallback(
    () => ({
      placeholder: hasPlaceholder,
      focused: isFocused,
      readonly: readOnly,
      disabled,
      "error-border": !!errorText
    }),
    [hasPlaceholder, isFocused, readOnly, disabled, errorText]
  );
  return /* @__PURE__ */ jsxDEV10(
    "div",
    {
      className: clsx5("input-container", {
        "margin-b-medium": helperText || errorText,
        "error-text": !!errorText
      }),
      children: [
        /* @__PURE__ */ jsxDEV10(
          "input",
          {
            ...rest,
            placeholder,
            disabled,
            readOnly,
            value: text,
            className: "input",
            onFocus: (e) => {
              handleFocusChange(!0), onFocus(e);
            },
            onBlur: (e) => {
              handleFocusChange(!1), onBlur(e);
            },
            onChange: (e) => {
              setText(e.target.value), onChange(e);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/input/text/Text.tsx",
            lineNumber: 82,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10("div", { className: clsx5("helper-text"), children: errorText || helperText }, void 0, !1, {
          fileName: "app/components/input/text/Text.tsx",
          lineNumber: 102,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "input-outline", children: [
          /* @__PURE__ */ jsxDEV10("div", { className: clsx5(["left", labelCss()]) }, void 0, !1, {
            fileName: "app/components/input/text/Text.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: clsx5(["label", labelCss()]), children: /* @__PURE__ */ jsxDEV10("label", { children: [
            label,
            required && "*"
          ] }, void 0, !0, {
            fileName: "app/components/input/text/Text.tsx",
            lineNumber: 106,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/input/text/Text.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: clsx5(["right", labelCss()]) }, void 0, !1, {
            fileName: "app/components/input/text/Text.tsx",
            lineNumber: 111,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/input/text/Text.tsx",
          lineNumber: 103,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/input/text/Text.tsx",
      lineNumber: 76,
      columnNumber: 5
    },
    this
  );
};

// app/components/input/iconbutton/IconButton.tsx
import clsx6 from "clsx";

// app/components/input/iconbutton/iconbutton.css
var iconbutton_default = "/build/_assets/iconbutton-ZYIWVXTS.css";

// app/components/input/iconbutton/IconButton.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var links8 = () => [
  {
    rel: "stylesheet",
    href: iconbutton_default
  }
], IconButton = ({
  Icon,
  colour = "default",
  className,
  ...rest
}) => /* @__PURE__ */ jsxDEV11("button", { ...rest, className: clsx6("icon-button", className), children: /* @__PURE__ */ jsxDEV11(Icon, { colour }, void 0, !1, {
  fileName: "app/components/input/iconbutton/IconButton.tsx",
  lineNumber: 38,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/input/iconbutton/IconButton.tsx",
  lineNumber: 37,
  columnNumber: 5
}, this);

// app/components/icons/icons.css
var icons_default = "/build/_assets/icons-OOOYFTWZ.css";

// app/components/icons/svg/Svg.tsx
import clsx7 from "clsx";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Svg = ({ children, colour = "default", ...rest }) => /* @__PURE__ */ jsxDEV12(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": !0,
    focusable: !1,
    className: clsx7("icon", {
      [colour]: colour !== "default"
    }),
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/svg/Svg.tsx",
    lineNumber: 14,
    columnNumber: 5
  },
  this
);

// app/components/icons/delete/Delete.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var Delete = (props) => /* @__PURE__ */ jsxDEV13(Svg, { ...props, children: /* @__PURE__ */ jsxDEV13(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/delete/Delete.tsx",
    lineNumber: 14,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/icons/delete/Delete.tsx",
  lineNumber: 13,
  columnNumber: 5
}, this);

// app/components/icons/index.ts
var links10 = () => [
  {
    rel: "stylesheet",
    href: icons_default
  }
], IconLinks = links10;

// app/root.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var meta = () => [{ title: "Code Wizardry" }], links11 = () => [...links9()];
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ jsxDEV14(Box, { children: [
    /* @__PURE__ */ jsxDEV14("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14(Stack, { children: [
      /* @__PURE__ */ jsxDEV14("h2", { children: "Message" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(Box, { children: error.message }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("h3", { children: "Stack Trace" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(Box, { children: error.stack }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV14("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV14("head", { children: [
      /* @__PURE__ */ jsxDEV14("meta", { charSet: "utf=8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("body", { children: [
      /* @__PURE__ */ jsxDEV14(Core, { children: [
        /* @__PURE__ */ jsxDEV14("nav", { id: "navbar", children: /* @__PURE__ */ jsxDEV14(Column, { gap: "none", className: "height-full align-center", children: [
          /* @__PURE__ */ jsxDEV14(Box, { className: "nav-logo", children: "CW" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV14(NavLink, { to: "/", prefetch: "intent", children: "Home" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV14(NavLink, { to: "/projects", prefetch: "intent", children: "Projects" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14(Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/projects._index.tsx
var projects_index_exports = {};
__export(projects_index_exports, {
  default: () => Projects
});
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function Projects() {
  return /* @__PURE__ */ jsxDEV15(Container, { children: /* @__PURE__ */ jsxDEV15("main", { children: [
    /* @__PURE__ */ jsxDEV15("h1", { children: "Projects" }, void 0, !1, {
      fileName: "app/routes/projects._index.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV15("h2", { children: "Work" }, void 0, !1, {
      fileName: "app/routes/projects._index.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV15("h2", { children: "Learning" }, void 0, !1, {
      fileName: "app/routes/projects._index.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV15(Column, { children: /* @__PURE__ */ jsxDEV15(Link, { to: "todo", children: "ToDo" }, void 0, !1, {
      fileName: "app/routes/projects._index.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects._index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects._index.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects._index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/projects.todo/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => todo,
  links: () => links12
});

// app/routes/projects.todo/store/todo.store.tsx
import { useEffect as useEffect2 } from "react";
import { useCallback as useCallback2 } from "react";
import { createContext, useState as useState2 } from "react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var STORAGEKEY = "todoItems", TodoContext = createContext(null), TodoProvider = ({ children }) => {
  let [todos, setTodos] = useState2([]);
  useEffect2(() => {
    let localTodos = localStorage.getItem(STORAGEKEY);
    localTodos && setTodos(JSON.parse(localTodos));
  }, []), useEffect2(() => {
    localStorage.setItem(STORAGEKEY, JSON.stringify(todos));
  }, [todos]);
  let onAddTodo = useCallback2(
    (text) => {
      todos?.length > 0 ? todos.push({ id: todos[todos.length - 1].id + 1, text, done: !1 }) : todos.push({ id: 1, text, done: !1 }), setTodos([...todos]);
    },
    [todos]
  ), onDeleteTodo = useCallback2(
    (id) => {
      let todoIndex = todos.findIndex((val) => val.id === id);
      -1 < todoIndex && (todos.splice(todoIndex, 1), setTodos([...todos]));
    },
    [todos]
  ), onSetDoneStatus = useCallback2(
    (id, status) => {
      let todo2 = todos.find((val) => val.id === id);
      todo2 && (todo2.done = status), setTodos([...todos]);
    },
    [todos]
  );
  return /* @__PURE__ */ jsxDEV16(
    TodoContext.Provider,
    {
      value: {
        addTodo: onAddTodo,
        setDoneStatus: onSetDoneStatus,
        deleteTodo: onDeleteTodo,
        todos
      },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/routes/projects.todo/store/todo.store.tsx",
      lineNumber: 77,
      columnNumber: 5
    },
    this
  );
};

// app/routes/projects.todo/store/useTodos.tsx
import { useContext } from "react";
var useTodos = () => {
  let todos = useContext(TodoContext);
  if (todos == null)
    throw new Error("useTodos must be wrapped in a TodoProvider.");
  return todos;
};

// app/routes/projects.todo/todo.tsx
import { useCallback as useCallback3, useState as useState3 } from "react";

// app/routes/projects.todo/todo.css
var todo_default = "/build/_assets/todo-U4WQUZSY.css";

// app/routes/projects.todo/todoItem.tsx
import clsx8 from "clsx";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var TodoItem = ({
  setDoneStatus,
  deleteTodo,
  todo: todo2
}) => {
  let { text, done, id } = todo2;
  return /* @__PURE__ */ jsxDEV17(Column, { className: "todo-item align-center", children: [
    /* @__PURE__ */ jsxDEV17(Box, { className: "box", children: [
      /* @__PURE__ */ jsxDEV17("span", { className: clsx8("text", { done }), children: text }, void 0, !1, {
        fileName: "app/routes/projects.todo/todoItem.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: clsx8("todo", { done }) }, void 0, !1, {
        fileName: "app/routes/projects.todo/todoItem.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects.todo/todoItem.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(Box, { children: /* @__PURE__ */ jsxDEV17(
      Checkbox,
      {
        name: "todoItem-doneState",
        checked: done,
        onChange: (event) => setDoneStatus(id, event.target.checked)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects.todo/todoItem.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/projects.todo/todoItem.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(IconButton, { Icon: Delete, onClick: () => deleteTodo(id) }, void 0, !1, {
      fileName: "app/routes/projects.todo/todoItem.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.todo/todoItem.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// app/routes/projects.todo/todo.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var TodoLinks = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Oswald"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro"
  },
  { rel: "stylesheet", href: todo_default }
], TodoApp = () => {
  let [text, setText] = useState3(""), [validation, setValidation] = useState3(), { addTodo, setDoneStatus, deleteTodo, todos } = useTodos(), handleAddTodo = useCallback3(() => {
    text.length <= 0 ? setValidation("Text is required.") : (setValidation(void 0), addTodo(text), setText(""));
  }, [text, addTodo]);
  return /* @__PURE__ */ jsxDEV18(Box, { className: "todo-container", children: /* @__PURE__ */ jsxDEV18(Stack, { gap: "xlarge", className: "width-full", children: [
    /* @__PURE__ */ jsxDEV18(Box, { children: /* @__PURE__ */ jsxDEV18("h1", { children: "ToDO List" }, void 0, !1, {
      fileName: "app/routes/projects.todo/todo.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.todo/todo.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18(Column, { children: [
      /* @__PURE__ */ jsxDEV18(
        Text,
        {
          label: "Todo item",
          type: "text",
          name: "text",
          errorText: validation,
          value: text,
          onChange: (event) => {
            setValidation(void 0), setText(event.target.value);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/projects.todo/todo.tsx",
          lineNumber: 48,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV18(Button, { type: "submit", onClick: handleAddTodo, children: "Add" }, void 0, !1, {
        fileName: "app/routes/projects.todo/todo.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects.todo/todo.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18(Divider, { colour: "secondary" }, void 0, !1, {
      fileName: "app/routes/projects.todo/todo.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18(Stack, { gap: "small", children: todos.map(
      (todo2) => /* @__PURE__ */ jsxDEV18(
        TodoItem,
        {
          todo: todo2,
          setDoneStatus,
          deleteTodo
        },
        JSON.stringify(todo2),
        !1,
        {
          fileName: "app/routes/projects.todo/todo.tsx",
          lineNumber: 66,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, !1, {
      fileName: "app/routes/projects.todo/todo.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.todo/todo.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects.todo/todo.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
};

// app/routes/projects.todo/route.tsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var links12 = () => [...TodoLinks()];
function todo() {
  return /* @__PURE__ */ jsxDEV19(TodoProvider, { children: /* @__PURE__ */ jsxDEV19(TodoApp, {}, void 0, !1, {
    fileName: "app/routes/projects.todo/route.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects.todo/route.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV20(Container, { children: /* @__PURE__ */ jsxDEV20("main", { children: [
    /* @__PURE__ */ jsxDEV20("h1", { children: "Welcome to Code Wizardry" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20(Stack, { gap: "medium", children: [
      /* @__PURE__ */ jsxDEV20(Box, { children: /* @__PURE__ */ jsxDEV20(Box, { children: "some text about" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV20(Box, { children: /* @__PURE__ */ jsxDEV20("h2", { children: /* @__PURE__ */ jsxDEV20(Link2, { to: "/projects", children: "Projects" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 17,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PUA5XZJE.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-F5JEGH3J.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-XFW6AOUW.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-G7DTQ6NL.js", imports: ["/build/_shared/chunk-UIRC43MY.js", "/build/_shared/chunk-XJPFLF7F.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-XERPV2TD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects._index": { id: "routes/projects._index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects._index-Z7SMKQTU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects.todo": { id: "routes/projects.todo", parentId: "root", path: "projects/todo", index: void 0, caseSensitive: void 0, module: "/build/routes/projects.todo-DZ4EFV7W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "d30f5a55", hmr: { runtime: "/build/_shared/chunk-XFW6AOUW.js", timestamp: 1695460607968 }, url: "/build/manifest-D30F5A55.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects._index": {
    id: "routes/projects._index",
    parentId: "root",
    path: "projects",
    index: !0,
    caseSensitive: void 0,
    module: projects_index_exports
  },
  "routes/projects.todo": {
    id: "routes/projects.todo",
    parentId: "root",
    path: "projects/todo",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
