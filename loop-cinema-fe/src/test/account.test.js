import { render, screen, fireEvent } from "@testing-library/react";
import RegisterForm from "../Components/RegisterForm"
import Movies from "../Components/MovieList"
import "@testing-library/jest-dom";
import axios from "axios";

let users;
let container;

beforeAll(async () => {
    await axios.get(`http://localhost:3001/api/users/`)
    .then(response => {
        users = response.data
    })
})

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

beforeEach(() => {
    const utils = render(<RegisterForm />)
    container = utils.container
})

test('render register form', () => {
    expect(container).toBeInTheDocument();
});

test("type in field", () => {
    const input = screen.getByLabelText("Email address *");
  
    // Simulate input.
    fireEvent.change(input, { target: { value: "usertest@gmail.com" } });
  
    expect(input.value).toBe("usertest@gmail.com");
});

// test("submit empty form", () => {
    // const dialog = container.querySelector("dialog");
    // const form = dialog.getElementsByTagName("form");
    // const button = screen.getByText('Register', { selector: 'button'})
    // console.log(button);

    // // Simulate click.
    // fireEvent.click(button);
    
    // const error = screen.getByText('Email is required.', {selector: 'p'})
    // console.log(error);
    // expect(error.length).toBe(8)
// });