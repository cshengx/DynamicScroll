import * as React from 'react';
import * as ReactDOM from 'react-dom';

import DynamicScroll from "./components/DynamicScroll.tsx";

let testDivs:any[] = [];
for(let i = 0;i<1000;i++){
    testDivs.push(
        <div data-test={i} key={i}>
            test{i}
        </div>
    )
}

ReactDOM.render(
    <DynamicScroll data={testDivs} height={500} itemHeight={18}/>,
    document.getElementById("main")
);