import React, { memo, useMemo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { VirtualListWrapper } from './style';
import ListAtom from '../../components/listAtom'
import VList from '../../components/VList';

import { setAppearedTime } from './store/actionCreators';

export default memo(function VirtualList() {

    const dispatch = useDispatch();
    const { virtualListAppearTime, clickTime, listItem } = useSelector(state => ({
        virtualListAppearTime: state.getIn(["virtualListTime", "virtualListAppearTime"]),
        clickTime: state.getIn(["clickTime", "clickedTime"]),
        listItem: state.getIn(["clickTime", "listItem"])
    }), shallowEqual);

    const timeSpend = useMemo(() => {
        if (virtualListAppearTime > clickTime) {
            return clickTime !== 0 ? virtualListAppearTime - clickTime : clickTime;
        }
    }, [virtualListAppearTime]);

    useEffect(() => {
        dispatch(setAppearedTime(new Date().getTime()));
    }, [dispatch, listItem]);
    return (
        <VirtualListWrapper>
            <span className="appearTime">显示虚拟列表花费时长：{ timeSpend } ms</span>
            <ul className="list">
                <VList appearH={700} itemH={60} ItemMap={{Module: ListAtom, title: "title", content: "content", key: "title"}} DataSet={listItem} />
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
