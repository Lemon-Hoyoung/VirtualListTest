import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ControlWrapper } from './style';
import { useHistory } from 'react-router-dom';
import { Button, Input } from "antd";

import { setClickedTime, setListItemNumber } from './store/actionCreators';

export default memo(function ControlZone() {

    const history = useHistory();
    const dispatch = useDispatch();
    const handleJumpToRealList = useCallback(() => {
      dispatch(setClickedTime(new Date().getTime()));
      history.push('/realList');
    }, [history, dispatch]);
  
    const handleJumpToVirtualList = useCallback(() => {
      dispatch(setClickedTime(new Date().getTime()));
      history.push('/virtualList');
    }, [history, dispatch]);

    const setItemNum = useCallback((e) => {
      const num = Number(e.target.value);
      !isNaN(num) && dispatch(setListItemNumber(num));
      !isNaN(num) && dispatch(setClickedTime(new Date().getTime()))
    }, [dispatch]);
    return (
        <ControlWrapper>
            <div className="control">
                <Button type="primary" onClick={handleJumpToRealList}>跳转到真实列表</Button>
                <Button type="primary" onClick={handleJumpToVirtualList}>跳转到虚拟列表</Button>
                <Input placeholder="请输入列表元素个数" onChange={e => setItemNum(e)}/>
            </div>
        </ControlWrapper>
    )
})
