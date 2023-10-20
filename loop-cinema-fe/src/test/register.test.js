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

// test('render register form', () => {
//     expect(container).toBeInTheDocument();
// });

/**
 * successfully type in field and validate input field
 * cannot create user in db when the form has invalid fields
 */
test("type in field & submit invalid register form", async () => {
    // const dialog = container.querySelector("dialog");
    // const form = dialog.getElementsByTagName("form");
    const button = screen.getByText('Register', { selector: 'button'})
    const input = screen.getByLabelText("Email address *");
  
    // Simulate input.
    fireEvent.change(input, { target: { value: "usertest@gmail.com" } });
    expect(input.value).toBe("usertest@gmail.com");

    // Simulate click.
    fireEvent.click(button);

    const userLength = users.length

    await axios.get(`http://localhost:3001/api/users/`)
    .then(response => {
        users = response.data
    })

    expect(users.length).toBe(userLength)
});