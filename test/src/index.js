//在导入多个变量时，我们还可以采用整体导入的方式
import './style.css';

import * as alltest from './add-content.js';

console.log(alltest.person);
alltest.MyTest();