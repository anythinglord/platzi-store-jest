 import { configure } from "enzyme";
 import adapter from 'enzyme-adapter-react-16';

 configure({ adapter: new adapter() })
 global.fetch = require('jest-fetch-mock');