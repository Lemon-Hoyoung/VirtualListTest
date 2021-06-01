import styled from "styled-components";

export const VListWrapper = styled.div.attrs(props => ({
    style: {
        height: props.appearH + 'px'
    }
}))`
    width: 100%;
    overflow: auto;
`;

export const SlidePieceWrapper = styled.div.attrs(props => ({
    style: {
        height: props.slideH + 'px'
    }
}))`
    position: relative;
`;

export const WindowWrapper = styled.div.attrs(props => ({
    style: {
        top: props.scrollDis + 'px'
    }
}))`
    position: absolute;
`