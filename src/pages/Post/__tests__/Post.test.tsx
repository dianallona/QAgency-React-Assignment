import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Post from "../Post";

jest.mock("../../../services/getPostById");
jest.mock("../../../services/getUserById");
jest.mock("../../../services/getCommentsByPost");

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));
describe("Post component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render Post", async () => {
    render(
      <Router>
        <Post />
      </Router>
    );

    const postContainer = screen.getAllByTestId("post-container");
    expect(postContainer).not.toBeNull();
  });
  it("should navigate back to /posts", async () => {
    render(
      <Router>
        <Post />
      </Router>
    );

    const backBtn = screen.getByTestId("backBtn");
    userEvent.click(backBtn);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith({ pathname: "/posts" });
  });
});
