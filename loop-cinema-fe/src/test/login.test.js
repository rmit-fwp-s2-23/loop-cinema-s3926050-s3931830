import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../Components/LoginForm"
import Account from "../Pages/MyAccount"
import MyAccountActivity from "../Pages/MyAccountActivity"
import "@testing-library/jest-dom";
import axios from "axios";

let reviews;
let user;
let registerContainer;
let accountContainer;
let accountActivityContainer;

beforeAll(() => {
})

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

beforeEach(() => {
    const utils = render(<LoginForm />)
    registerContainer = utils.container
})

/**
 * successfully login 
 */
test('login successfully', () => {
    // global.window = { location: { pathname: null } };
    const input1 = screen.getByLabelText("Email address");
    const input2 = screen.getByLabelText("Password");
  
    // Simulate input.
    fireEvent.change(input1, { target: { value: "baohoang@gmail.com" } });
    fireEvent.change(input2, { target: { value: "baohoang" } });

    const accountUtils = render(<Account />)
    accountContainer = accountUtils.container

    expect(accountContainer).toBeInTheDocument();
});

/**
 * successfully login 
 */
test('login and see my activity', async () => {
    // global.window = { location: { pathname: null } };
    const input1 = screen.getByLabelText("Email address");
    const input2 = screen.getByLabelText("Password");
  
    // Simulate input.
    fireEvent.change(input1, { target: { value: "baohoang@gmail.com" } });
    fireEvent.change(input2, { target: { value: "baohoang" } });

    const accountActivityUtils = render(<MyAccountActivity />)
    accountActivityContainer = accountActivityUtils.container
    expect(accountActivityContainer).toBeInTheDocument();
});