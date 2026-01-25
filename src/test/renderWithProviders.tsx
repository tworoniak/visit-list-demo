import React from "react";
import type { PropsWithChildren } from "react";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { visitApi } from "../store/api/visitApi";

export function renderWithProviders(
  ui: React.ReactElement,
  {
    store = configureStore({
      reducer: {
        [visitApi.reducerPath]: visitApi.reducer,
      },
      middleware: (gDM) => gDM().concat(visitApi.middleware),
    }),
  }: { store?: ReturnType<typeof configureStore> } = {},
) {
  function Wrapper({ children }: PropsWithChildren) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper }) };
}
