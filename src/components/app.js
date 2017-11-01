import logo from "./logo";

export default body => `
  ${logo()}
  <ul>
    <li><a href='#/'>Home</a></li>
    <li><a href='#/about'>About</a></li>
  </ul>
  ${body}
`;
