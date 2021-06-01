import React, { memo } from 'react';
import { ListShowWrapper } from './style';
import { renderRoutes } from "react-router-config";
import routes from '../../routers'

export default memo(function ListShow() {
    return (
        <ListShowWrapper>
            {renderRoutes(routes)}
        </ListShowWrapper>
    )
})