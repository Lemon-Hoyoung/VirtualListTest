import React, { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RealListWrapper } from './style';
import localData from '../../local-data/local-data.js';
import ListAtom from '../../components/listAtom'

import { setAppearedTime } from './store/actionCreators'

export default memo(function RealList() {

    const dispatch = useDispatch();
    const { realListAppearTime, clickTime } = useSelector(state => ({
        realListAppearTime: state.getIn(["realListTime", "realListAppearTime"]),
        clickTime: state.getIn(["clickTime", "clickedTime"])
    }), shallowEqual);

    const timeSpend = useMemo(() => {
        return realListAppearTime - clickTime;
    }, [realListAppearTime, clickTime]);

    useEffect(() => {
        dispatch(setAppearedTime(new Date().getTime()));
    }, [dispatch]);

    return (
        <RealListWrapper>
            <span className="appearTime">显示实际列表花费时长：{ timeSpend } ms</span>
            <ul className="list">
                {
                    localData.map((item, index) => {
                        return <ListAtom title={item.title} content={item.content} key={item.title} />
                    })
                }
            </ul>
        </RealListWrapper>
    )
})
