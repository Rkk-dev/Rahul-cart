function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getData(key) {
    const data = localStorage.getItem(key)
    return JSON.parse(data);
}

function clearData() {
    localStorage.clear();
}

function calculateQuantity(items) {
    let totalQuantityIs =   items.reduce((acc,curr) => acc = acc + curr.quantity , 0)
    return totalQuantityIs;
}

function calculateTotalAmount(items) {
    let totalAmount = items.reduce((acc,curr) => acc = acc + (curr.quantity * curr.price.discountRate),0);
    return totalAmount;
}

export {setData, getData, clearData, calculateQuantity, calculateTotalAmount};