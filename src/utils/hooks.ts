import React, { Fragment, useEffect, useState } from 'react';
import { componentItem, componentsList } from './contant';

const [componentsArr, setComponentsArr]: [Array<componentItem>, Function] = useState([]);

export default {
    componentsArr,
    setComponentsArr
};

