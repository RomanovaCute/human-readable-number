module.exports = function toReadable (number) {

    let units = ['zero','one','two','three','four','five','six','seven','eight','nine', 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tens = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let strNum = number.toString().split('');


    if(number <= 19){
        return units[number];
    } else if(number <= 99 && strNum[1] === '0'){
        return tens[strNum[0] - 2];
    } else if(number <= 99){
        return `${tens[strNum[0] - 2]} ${units[strNum[1]]}`;
    } else if(number <= 999 && strNum[1] === '0' && strNum[2] === '0'){
        return `${units[strNum[0]]} hundred`;
    } else if(number <= 999 && strNum[1] <= '1'){
        return `${units[strNum[0]]} hundred ${units[Number(strNum.slice(1, strNum.length).join(''))]}`
    } else if(number <= 999 && strNum[2] === '0'){
        return `${units[strNum[0]]} hundred ${tens[strNum[1]-2]}`;
    } else if(number <= 999){
        return `${units[strNum[0]]} hundred ${tens[strNum[1]-2]} ${units[strNum[2]]}`;
    }

}