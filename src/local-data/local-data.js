let dataArray = Array.from({length: 100000});

export default dataArray.map((item, index) => {
    return {title: `这是第${index+1}条数据内容`, content:"aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz"}
});