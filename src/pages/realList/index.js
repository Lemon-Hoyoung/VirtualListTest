import React, { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RealListWrapper } from './style';
import ListAtom from '../../components/listAtom'

import { setAppearedTime } from './store/actionCreators'

export default memo(function RealList() {

    const dispatch = useDispatch();
    const { realListAppearTime, clickTime, listItem } = useSelector(state => ({
        realListAppearTime: state.getIn(["realListTime", "realListAppearTime"]),
        clickTime: state.getIn(["clickTime", "clickedTime"]),
        listItem: state.getIn(["clickTime", "listItem"])
    }), shallowEqual);

    const timeSpend = useMemo(() => {
        if (realListAppearTime > clickTime) {
            return clickTime !== 0 ? realListAppearTime - clickTime : clickTime;
        }
    }, [realListAppearTime]);

    useEffect(() => {
        dispatch(setAppearedTime(new Date().getTime()));
    }, [dispatch, listItem]);

    return (
        <RealListWrapper>
            <span className="appearTime">显示实际列表花费时长：{ timeSpend } ms</span>
            <ul className="list">
                {
                    listItem && listItem.map((item, index) => {
                        return <ListAtom title={item.title} content={item.content} key={item.title} />
                    })
                }
            </ul>
        </RealListWrapper>
    )
})
