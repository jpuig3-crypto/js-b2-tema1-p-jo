// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e2.md / Enunciat disponible a u5e2.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function numberArray() {
    const ERROR_1 = "ERROR. Ya inicializado.";
    const ERROR_2 = "ERROR. Supera el maximo permitido.";
    const ERROR_3 = "ERROR. Los elementos deben ser exclusivamente numeros.";

    let _list = undefined;
    const _max = maxElements;

    function _checkItems(elements) {
        if (!Array.isArray(elements)) elements = [elements];
        return elements.every(item => typeof item === "number" && !isNaN(item));
    }

    function initialized() {
        return _list !== undefined;
    }

    function init(arrayNumbers) {
        if (initialized()) return ERROR_1;
        if (arrayNumbers.length > _max) return ERROR_2;
        if (!_checkItems(arrayNumbers)) return ERROR_3;

        _list = [...arrayNumbers];
        return true;
    }

    function _addItems(number) {
        if (_list.length >= _max) return false;
        _list.push(number);
        return true;
    }

    function _removeItem(number) {
        const index = _list.indexOf(number);
        if (index !== -1) {
            _list.splice(index, 1);
        }
        return true;
    }

    function length() {
        if (!initialized()) return 0;
        return _list.length;
    }

    function getList() {
        if (!initialized()) return [];
        return [..._list];
    }

    function add(items) {
        const itemsArray = Array.isArray(items) ? items : [items];

        if (!_checkItems(itemsArray)) return ERROR_3;

        let allAdded = true;
        for (let item of itemsArray) {
            const success = _addItem(item);
            if (!success) allAdded = false;
        }
        return allAdded;
    }

    function remove(items) {
        const itemsArray = Array.isArray(items) ? items : [items];

        if (!_checkItems(itemsArray)) return ERROR_3;

        for (let item of itemsArray) {
            _removeItem(item);
        }
        return true;
    }

    return {
        init: init,
        initialized: initialized,
        length: length,
        items: getList,
        add: add,
        remove: remove
    };
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { numberArray };
