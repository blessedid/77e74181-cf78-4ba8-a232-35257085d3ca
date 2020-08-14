export default {
    state: {
        mapAddresses: [],
        mapAddressesCount: 0
    },
    mutations: {
        updateMapAddresses(state, data = {}) {
            let item = state.mapAddresses.find(item => item.id === data.id);
            item.address = data.address;
            item.coords = data.coords;
        },
        addMapAddresses(state, data) {
            state.mapAddresses.push(data);
        },
        removeMapAddresses(state, id) {
            console.log(id);
            state.mapAddresses.splice(id, 1);
        },
        setMapAddressesCount(state, count) {
            state.mapAddressesCount = count;
        },
        clearMapState(state) {
            state.mapAddresses = [];
            state.mapAddressesCount = 0;
        }
    },
    actions: {},
    getters: {
        getMapAddresses(state) {
            return state.mapAddresses;
        },
        getMapAddressesCount(state) {
            return state.mapAddressesCount;
        }
    },
}
