import { assert } from 'chai';
import { byDate, byNumber, byValue, byString } from '../src/index.ts';


const array = ["134", "pfoiwe", "wopeifpwfoe", "2fiweio"].sort(byString({ desc: false }))

const array2 = [{ id: 1 }, { id: 2 }, { id: 3, ciao: { miao: 23 } }].sort(byValue(c => c.ciao?.miao, byNumber({ desc: false })))

// describe('Awesome test.', () => {
//   it('should test default awesome function', () => {
//     const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Dinesh';
//     assert(defaultAwesomeFunction('Dinesh') === expectedVal, 'Default not awesome :(');
//   });

//   it('should test awesome function', () => {
//     const expectedVal = 'I am just an Awesome Function';
//     assert(awesomeFunction() === expectedVal, 'Named awesome :(');
//   });
// });
