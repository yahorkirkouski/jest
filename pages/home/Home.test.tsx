import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("App", () => {
    it("renders Home page", () => {
        render(<Home />);
        expect(
            screen.getByRole("heading", { name: "Welcome to Next.js!" })
        ).toBeInTheDocument();
    });
});
