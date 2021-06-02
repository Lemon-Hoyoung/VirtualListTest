export default function makeDataArray(number) {
    let dataArray = Array.from({length: number});
    return dataArray.map((item, index) => {
        return {title: `这是第${index+1}条数据内容`, content:`${index+1}aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyy`}
    });
}