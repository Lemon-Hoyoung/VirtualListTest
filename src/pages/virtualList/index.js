import React, { memo, useMemo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { VirtualListWrapper } from './style';
import localData from '../../local-data/local-data.js';
import ListAtom from '../../components/listAtom'
import VList from '../../components/VList';

import { setAppearedTime } from './store/actionCreators';

export default memo(function VirtualList() {

    const dispatch = useDispatch();
    const { virtualListAppearTime, clickTime } = useSelector(state => ({
        virtualListAppearTime: state.getIn(["virtualListTime", "virtualListAppearTime"]),
        clickTime: state.getIn(["clickTime", "clickedTime"])
    }), shallowEqual);

    const timeSpend = useMemo(() => {
        return virtualListAppearTime - clickTime;
    }, [virtualListAppearTime, clickTime]);

    useEffect(() => {
        dispatch(setAppearedTime(new Date().getTime()));
    }, [dispatch]);
    return (
        <VirtualListWrapper>
            <span className="appearTime">显示虚拟列表花费时长：{ timeSpend } ms</span>
            <ul className="list">
                <VList appearH={700} itemH={60} ItemMap={{Module: ListAtom, title: "title", content: "content", key: "title"}} DataSet={localData} />
                {/* <VList appearH={700} itemH={60}>
                    {
                        localData.map((item, index) => {
                            return <ListAtom title={item.title} content={item.content} key={item.title} />
                        })
                    }
                </VList> */}
            </ul>
        </VirtualListWrapper>
    )
})
