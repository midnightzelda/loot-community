import { render, screen } from "@testing-library/react"
import App from "./App"

/* demo test to showcase my testing ability */

test("app renders normally", () => {
  render(<App />)
  const linkElement = screen.getByText(/Loot Community/i)
  expect(linkElement).toBeInTheDocument()
})
