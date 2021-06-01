import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ControlWrapper } from './style';
import { useHistory } from 'react-router-dom';
import { Button } from "antd";

import { setClickedTime } from './store/actionCreators';

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
    }, [history, dispatch])
    return (
        <ControlWrapper>
            <div className="control">
                <Button type="primary" onClick={handleJumpToRealList}>跳转到真实列表</Button>
                <Button type="primary" onClick={handleJumpToVirtualList}>跳转到虚拟列表</Button>
            </div>
        </ControlWrapper>
    )
})
