import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { componentItem, componentsList } from './utils/contant';
import { Button, Text } from 'nxs-ui';


function App() {

    const [componentsArr, setComponentsArr]: [Array<componentItem>, Function] = useState([]);
    const [jsxDom, setJsxDom] = useState('');

    useEffect(() => {
        setComponentsArr(componentsList);
        window.addEventListener('message', handleMessage, false);
    }, []);

    useEffect(() => {
        setJsxDom((): any => {
            return componentsArr.map((item: componentItem, index: number) => {
                if (item.componentName === 'Button') {
                    return <Button key={item.componentName + index}>{item.content || 'default'}</Button>;
                } else if (item.componentName === 'Text') {
                    return <Text key={item.componentName + index} text={item.componentProps.text}>{item.content || 'default'}</Text>;
                }
                return '';
            });
        });
    }, [componentsArr]);

    const handleMessage: EventListener = (event: any) => {
        let params: string = event.data.params;
        // 根据上面制定的结构来解析iframe内部发回来的数据
        const cmd: { [key: string]: Function } = {
            changePageInfo: () => {
                console.log(params);
                setComponentsArr(JSON.parse(params));
            }
        };
        if (event.data.cmd && typeof cmd[event.data.cmd] === 'function') {
            cmd[event.data.cmd]();
        } else {
            console.log(`非内部指令:${event.data.type}`);
        }
    };

    return (
        <div className="page-content">
            {jsxDom}
        </div>
    );
}

export default App;
