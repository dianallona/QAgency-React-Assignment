import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import PostList from "../PostList";

jest.mock("../../../services/getAllPosts");
jest.mock("../../../services/getUserById");

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));
describe("PostList component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render PostList", async () => {
    render(
      <Router>
        <PostList />
      </Router>
    );

    await waitFor(() => {
      const postContainer = screen.getAllByTestId("post");

      for (let tempContainer of postContainer) {
        expect(tempContainer).not.toBeNull();
      }
    });
  });

  it("should search PostList", async () => {
    render(
      <Router>
        <PostList />
      </Router>
    );

    await waitFor(() => {
      const postContainer = screen.getAllByTestId("post");

      for (let tempContainer in postContainer) {
        expect(tempContainer).not.toBeNull();
      }
    });

    const searchInput = screen.getByTestId("searchInput");
    const searchInputBtn = screen.getByTestId("searchInputBtn");
    userEvent.type(searchInput, "esse");
    userEvent.click(searchInputBtn);

    await waitFor(() => {
      const postContainer = screen.getAllByTestId("post");

      for (let tempContainer of postContainer) {
        expect(tempContainer).toHaveTextContent(/esse/i);
      }
    });
  });

  it("should load /post/1 page after clicking one post", async () => {
    render(
      <Router>
        <PostList />
      </Router>
    );

    await waitFor(() => {
      const postContainer = screen.getAllByTestId("post");

      for (let tempContainer in postContainer) {
        expect(tempContainer).not.toBeNull();
      }
    });

    const postContainer = screen.getAllByTestId("post");
    userEvent.click(postContainer[0]);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith({ pathname: "/post/1" });
  });
});
