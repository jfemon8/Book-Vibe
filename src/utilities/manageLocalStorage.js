const getDataFromLocalStorage = (key) => {
    const getData = localStorage.getItem(key);
    if (getData) {
        return JSON.parse(getData);
    }
    return [];
}

const setDataToLocalStorage = (id, listName) => {
    const data = getDataFromLocalStorage(listName);
    if (!data.includes(id)) {
        data.push(id);
    }
    const stringifyData = JSON.stringify(data);
    localStorage.setItem(listName, stringifyData);
}

const removeDataFromLocalStorage = (id, listName) => {
    const data = getDataFromLocalStorage(listName);
    const newData = data.filter(bId => bId !== id);
    const stringifyData = JSON.stringify(newData);
    localStorage.setItem(listName, stringifyData);
}

export { setDataToLocalStorage as setData, getDataFromLocalStorage as getData, removeDataFromLocalStorage as removeData }